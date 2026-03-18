// SPDX-FileCopyrightText: Copyright (C) 2023-2025 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { Menu, PaperProps, PopoverPosition, PopoverReference } from "@mui/material";
import { makeStyles } from "tss-react/mui";

import LayoutBrowser from "@lichtblick/suite-base/components/LayoutBrowser";

const useStyles = makeStyles()((theme) => ({
  menuList: {
    minWidth: 320,
    paddingBottom: theme.spacing(1),
  },
}));

type LayoutMenuProps = {
  anchorEl?: HTMLElement;
  anchorPosition?: PopoverPosition;
  anchorReference?: PopoverReference;
  disablePortal?: boolean;
  handleClose: () => void;
  open: boolean;
};

export function LayoutMenu(props: LayoutMenuProps): React.JSX.Element {
  const { classes } = useStyles();
  const { anchorEl, anchorPosition, anchorReference, disablePortal, handleClose, open } = props;

  return (
    <Menu
      id="layout-menu"
      anchorEl={anchorEl}
      anchorPosition={anchorPosition}
      anchorReference={anchorReference}
      disablePortal={disablePortal}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        dense: true,
        disablePadding: true,
        "aria-labelledby": "layout-button",
        className: classes.menuList,
      }}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      slotProps={{
        paper: {
          "data-tourid": "layout-menu",
        } as Partial<PaperProps & { "data-tourid"?: string }>,
      }}
    >
      <LayoutBrowser menuClose={handleClose} />
    </Menu>
  );
}

export default LayoutMenu;
