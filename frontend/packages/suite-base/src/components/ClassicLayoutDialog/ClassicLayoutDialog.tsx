// SPDX-FileCopyrightText: Copyright (C) 2023-2025 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useCurrentLayoutActions } from "@lichtblick/suite-base/context/CurrentLayoutContext";
import { LayoutData } from "@lichtblick/suite-base/context/CurrentLayoutContext/actions";
import { useLayoutManager } from "@lichtblick/suite-base/context/LayoutManagerContext";

import { classicLayouts } from "./classicLayouts";

export interface ClassicLayoutDialogProps extends Omit<DialogProps, "onClose"> {
  onClose: () => void;
}

export function ClassicLayoutDialog({
  onClose,
  ...props
}: ClassicLayoutDialogProps): React.JSX.Element {
  const { t } = useTranslation("others");
  const { setSelectedLayoutId } = useCurrentLayoutActions();
  const layoutManager = useLayoutManager();

  const handleSelectLayout = useCallback(
    async (layoutData: LayoutData, layoutName: string) => {
      try {
        // 先保存为新布局
        const newLayout = await layoutManager.saveNewLayout({
          name: layoutName,
          data: layoutData,
          permission: "CREATOR_WRITE",
        });

        // 使用 setSelectedLayoutId 来切换布局
        setSelectedLayoutId(newLayout.id);

        onClose();
      } catch (error) {
        console.error("Failed to load classic layout:", error);
      }
    },
    [setSelectedLayoutId, layoutManager, onClose],
  );

  return (
    <Dialog
      {...props}
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      PaperProps={{ style: { overflowX: "hidden" } }}
    >
      <DialogTitle>
        {t("SelectClassicLayout")}
        <IconButton
          edge="end"
          onClick={onClose}
          style={{ position: "absolute", right: 28, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers style={{ overflowX: "hidden" }}>
        <Typography variant="body2" color="text.secondary" style={{ marginBottom: 16 }}>
          {t("SelectClassicLayoutDescription")}
        </Typography>
        <List>
          {classicLayouts.map((layout, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={async () => {
                  await handleSelectLayout(layout.data, layout.name);
                }}
                style={{ borderRadius: 4 }}
              >
                <ListItemText primary={layout.name} secondary={layout.description} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>{/* 可以在这里添加其他操作按钮 */}</DialogActions>
    </Dialog>
  );
}
