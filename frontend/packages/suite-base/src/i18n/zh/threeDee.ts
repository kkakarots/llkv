// SPDX-FileCopyrightText: Copyright (C) 2023-2025 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

export const threeDee = {
  // Common
  color: "颜色",
  colorMode: "颜色模式",
  frame: "坐标系",
  lineWidth: "线宽",
  position: "位置",
  reset: "重置",
  rotation: "旋转",
  scale: "缩放",
  gradient: "渐变",
  type: "类型",
  topic: "主题",

  // Frame
  age: "年龄",
  axisScale: "轴缩放",
  displayFrame: "显示坐标系",
  displayFrameHelp: "放置摄像机的坐标系。摄像机的位置和方向相对于该坐标系的原点。",
  editable: "可编辑",
  enablePreloading: "启用预加载",
  enablePreloadingTooltip: "请注意，启用预加载可能会影响性能。",
  fixed: "固定",
  followMode: "跟随模式",
  followModeHelp: "播放期间更改摄像机行为以是否跟随显示坐标系。",
  frameNotFound: "未找到坐标系 {{frameId}}",
  hideAll: "全部隐藏",
  historySize: "历史大小",
  labels: "标签",
  labelSize: "标签大小",
  lineColor: "线条颜色",
  noCoordinateFramesFound: "未找到坐标系",
  parent: "父级",
  pose: "位姿",
  rotationOffset: "旋转偏移",
  settings: "设置",
  showAll: "全部显示",
  transforms: "变换",
  translation: "平移",
  translationOffset: "平移偏移",

  // Scene
  background: "背景",
  debugPicking: "调试拾取",
  ignoreColladaUpAxis: "忽略 COLLADA <up_axis>",
  ignoreColladaUpAxisHelp: "通过忽略 COLLADA 文件中的 <up_axis> 标签以匹配 rviz 的行为",
  labelScale: "标签缩放",
  labelScaleHelp: "应用于所有标签的缩放因子",
  meshUpAxis: "网格向上轴",
  meshUpAxisHelp: "加载没有方向信息的网格（STL 和 OBJ）时使用的“向上”方向",
  renderStats: "渲染统计",
  scene: "场景",
  takeEffectAfterReboot: "此设置需要重启后生效",
  YUp: "Y轴向上",
  ZUp: "Z轴向上",

  // Camera
  distance: "距离",
  far: "远",
  fovy: "Y轴视野角",
  near: "近",
  perspective: "透视",
  phi: "Phi角",
  planarProjectionFactor: "平面投影系数",
  syncCamera: "同步摄像机",
  syncCameraHelp: "与其他也启用此设置的面板同步摄像机。",
  target: "目标",
  theta: "Theta角",
  view: "视图",

  // Topics
  topics: "主题",

  // Custom layers
  addGrid: "添加网格",
  addURDF: "添加 URDF",
  customLayers: "自定义图层",
  delete: "删除",
  divisions: "分割数",
  grid: "网格",
  size: "大小",

  // Image annotations
  imageAnnotations: "图像注释",
  resetView: "重置视图",

  // Images
  cameraInfo: "摄像头信息",

  // Occupancy Grids
  colorModeCustom: "自定义",
  colorModeRaw: "原始",
  colorModeRvizCostmap: "代价地图",
  colorModeRvizMap: "地图",
  frameLock: "坐标系锁定",
  invalidColor: "无效颜色",
  maxColor: "最大颜色",
  minColor: "最小颜色",
  unknownColor: "未知颜色",

  // Point Extension Utils
  decayTime: "衰减时间",
  decayTimeDefaultZeroSeconds: "0 秒",
  pointShape: "点形状",
  pointShapeCircle: "圆形",
  pointShapeSquare: "方形",
  pointSize: "点大小",

  // Color Mode
  colorBy: "颜色依据",
  colorModeBgraPacked: "BGRA（打包）",
  colorModeBgrPacked: "BGR（打包）",
  colorModeColorMap: "颜色映射",
  colorModeFlat: "纯色",
  colorModeRgbaSeparateFields: "RGBA（分开字段）",
  ColorFieldComputedDistance: "距离（自动）",
  flatColor: "纯色",
  opacity: "不透明度",
  valueMax: "最大值",
  valueMin: "最小值",

  // Markers
  selectionVariable: "选择变量",
  selectionVariableHelp: "选择标记时，此全局变量将设置为标记 ID",
  showOutline: "显示轮廓",

  // Poses
  covariance: "协方差",
  covarianceColor: "协方差颜色",
  poseDisplayTypeArrow: "箭头",
  poseDisplayTypeAxis: "轴",
  poseDisplayTypeLine: "线",

  // Publish
  publish: "发布",
  publishTopicHelp: "发布的主题",
  publishTypeHelp: "点击场景时发布的消息类型",
  publishTypePoint: "点（geometry_msgs/Point）",
  publishTypePose: "位姿（geometry_msgs/PoseStamped）",
  publishTypePoseEstimate: "位姿估计（geometry_msgs/PoseWithCovarianceStamped）",
  thetaDeviation: "Theta 偏差",
  thetaDeviationHelp: "发布位姿估计时的 Theta 标准偏差",
  xDeviation: "X 偏差",
  xDeviationHelp: "发布位姿估计时的 X 标准偏差",
  yDeviation: "Y 偏差",
  yDeviationHelp: "发布位姿估计时的 Y 标准偏差",

  // HUD Items and empty states
  noImageTopicsAvailable: "无可用的图像主题。",
  imageTopicDNE: "图像主题不存在。",
  calibrationTopicDNE: "标定主题不存在。",
  imageAndCalibrationDNE: "图像和标定主题均不存在。",
  waitingForCalibrationAndImages: "等待消息中…",
  waitingForCalibration: "等待标定消息中…",
  waitingForImages: "等待图像消息中…",
  waitingForSyncAnnotations: "等待同步注释中…",
};
