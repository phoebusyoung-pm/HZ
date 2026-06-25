figma.showUI(__html__, { width: 360, height: 220 });

const T = {
  pc: { width: 1440, height: 1024, sidebar: 248, topbar: 72 },
  mini: { width: 375, height: 812, topbar: 96, tabbar: 64 },
  color: {
    primary: "#1677FF",
    primaryLight: "#EAF3FF",
    success: "#16A34A",
    successLight: "#E8F7EF",
    warning: "#D48806",
    warningLight: "#FFF4DE",
    danger: "#DC2626",
    dangerLight: "#FEECEC",
    info: "#2563EB",
    infoLight: "#EAF3FF",
    bg: "#F3F6FB",
    surface: "#FFFFFF",
    sidebar: "#10233F",
    border: "#E5EAF2",
    text: "#172033",
    sub: "#667085",
    weak: "#98A2B3"
  },
  fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 28 },
  radius: { xs: 4, sm: 8, md: 12 },
  space: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32 },
  font: {
    regular: { family: "Inter", style: "Regular" },
    bold: { family: "Inter", style: "Bold" }
  }
};

const PAGES = [
  ["admin-dashboard", "管理后台-总览", "pc", "admin", "dashboard"],
  ["admin-exhibition", "管理后台-展务管理", "pc", "admin", "table", "admin-exhibition-detail"],
  ["admin-exhibition-detail", "管理后台-展务详情", "pc", "admin", "detail"],
  ["admin-supplier", "管理后台-供应商管理", "pc", "admin", "table", "admin-supplier-detail"],
  ["admin-supplier-detail", "管理后台-供应商详情", "pc", "admin", "detail"],
  ["admin-enterprise", "管理后台-展商管理", "pc", "admin", "table", "admin-enterprise-detail", "admin-enterprise-review"],
  ["admin-enterprise-detail", "管理后台-展商详情", "pc", "admin", "detail"],
  ["admin-enterprise-review", "管理后台-企业资料审核", "pc", "admin", "review"],
  ["admin-review-green", "管理后台-绿搭审核", "pc", "admin", "table", "admin-green-detail"],
  ["admin-green-detail", "管理后台-绿搭详情", "pc", "admin", "detail"],
  ["admin-review-raw", "管理后台-光地审核", "pc", "admin", "table", "admin-raw-detail"],
  ["admin-raw-detail", "管理后台-光地详情", "pc", "admin", "detail"],
  ["admin-notice", "管理后台-通知书管理", "pc", "admin", "config"],
  ["admin-message", "管理后台-消息通知", "pc", "admin", "config"],
  ["admin-settings", "管理后台-系统设置", "pc", "admin", "config"],
  ["admin-cert", "管理后台-证件管理", "pc", "admin", "table", "admin-cert-detail"],
  ["admin-cert-detail", "管理后台-证件详情", "pc", "admin", "detail"],
  ["dashboard", "企业端-首页", "pc", "enterprise", "dashboard"],
  ["basic-info", "企业端-参展资料", "pc", "enterprise", "form", null, "basic-info-edit"],
  ["basic-info-edit", "企业端-参展资料编辑", "pc", "enterprise", "edit"],
  ["product-info", "企业端-展品信息", "pc", "enterprise", "upload"],
  ["brand-info", "企业端-宣传资料", "pc", "enterprise", "upload"],
  ["booth-standard", "企业端-标展管理", "pc", "enterprise", "list", "booth-standard-detail", "booth-standard-edit"],
  ["booth-standard-detail", "企业端-标展详情", "pc", "enterprise", "detail"],
  ["booth-standard-edit", "企业端-标展编辑", "pc", "enterprise", "edit"],
  ["booth-green", "企业端-绿搭管理", "pc", "enterprise", "list", "booth-green-detail", "booth-green-edit"],
  ["booth-green-detail", "企业端-绿搭详情", "pc", "enterprise", "detail"],
  ["booth-green-edit", "企业端-绿搭编辑", "pc", "enterprise", "edit"],
  ["booth-raw", "企业端-光地管理", "pc", "enterprise", "list", "booth-raw-detail", "booth-raw-edit"],
  ["booth-raw-detail", "企业端-光地详情", "pc", "enterprise", "detail"],
  ["booth-raw-edit", "企业端-光地编辑", "pc", "enterprise", "edit"],
  ["notice", "企业端-报到通知书", "pc", "enterprise", "notice"],
  ["progress", "企业端-进度中心", "pc", "enterprise", "list", "progress-detail"],
  ["progress-detail", "企业端-进度详情", "pc", "enterprise", "detail"],
  ["message", "企业端-消息管理", "pc", "enterprise", "list", "message-detail"],
  ["message-detail", "企业端-消息详情", "pc", "enterprise", "detail"],
  ["supplier-green", "供应商-绿搭审核", "pc", "supplier", "list", "supplier-green-detail"],
  ["supplier-green-detail", "供应商-绿搭审核详情", "pc", "supplier", "detail"],
  ["supplier-standard", "供应商-标展审核", "pc", "supplier", "list", "supplier-standard-detail"],
  ["supplier-standard-detail", "供应商-标展审核详情", "pc", "supplier", "detail"],
  ["supplier-raw", "供应商-光地审核", "pc", "supplier", "list", "supplier-raw-detail"],
  ["supplier-raw-detail", "供应商-光地审核详情", "pc", "supplier", "detail"],
  ["supplier-message", "供应商-消息通知", "pc", "supplier", "list", "supplier-message-detail"],
  ["supplier-message-detail", "供应商-消息详情", "pc", "supplier", "detail"],
  ["operator-dashboard", "运营商-总览", "pc", "operator", "dashboard"],
  ["operator-exhibition", "运营商-展务协同", "pc", "operator", "list", "operator-exhibition-detail"],
  ["operator-exhibition-detail", "运营商-展务详情", "pc", "operator", "detail"],
  ["operator-booth", "运营商-展位协同", "pc", "operator", "list", "operator-booth-detail"],
  ["operator-booth-detail", "运营商-展位详情", "pc", "operator", "detail"],
  ["operator-green", "运营商-绿搭协同", "pc", "operator", "list", "operator-green-detail"],
  ["operator-green-detail", "运营商-绿搭详情", "pc", "operator", "detail"],
  ["operator-notice", "运营商-报到通知", "pc", "operator", "notice"],
  ["operator-cert", "运营商-证件协同", "pc", "operator", "list", "operator-cert-detail"],
  ["operator-cert-detail", "运营商-证件详情", "pc", "operator", "detail"],
  ["operator-message", "运营商-消息协同", "pc", "operator", "list", "operator-message-detail"],
  ["operator-message-detail", "运营商-消息详情", "pc", "operator", "detail"],
  ["mini-home", "小程序-首页", "mini", "mini", "mobile"],
  ["mini-enterprise-info", "小程序-企业信息填写", "mini", "mini", "form"],
  ["mini-product-info", "小程序-展品信息", "mini", "mini", "form"],
  ["mini-upload", "小程序-资质上传", "mini", "mini", "upload"],
  ["mini-booth", "小程序-展位管理", "mini", "mini", "list", "mini-booth-detail"],
  ["mini-booth-detail", "小程序-展位详情", "mini", "mini", "detail"],
  ["mini-booth-confirm", "小程序-展位确认", "mini", "mini", "form"],
  ["mini-notice", "小程序-报到通知书", "mini", "mini", "notice"],
  ["mini-share", "小程序-分享页", "mini", "mini", "share"],
  ["mini-profile", "小程序-个人中心", "mini", "mini", "profile"],
  ["mini-progress", "小程序-进度列表", "mini", "mini", "list", "mini-progress-detail"],
  ["mini-progress-detail", "小程序-进度详情", "mini", "mini", "detail"],
  ["mini-message", "小程序-消息", "mini", "mini", "list", "mini-message-detail"],
  ["mini-message-detail", "小程序-消息详情", "mini", "mini", "detail"],
  ["mini-cert", "小程序-证件", "mini", "mini", "form"]
].map(toPage);

const NAV = {
  admin: ["admin-dashboard", "admin-exhibition", "admin-supplier", "admin-enterprise", "admin-enterprise-review", "admin-notice", "admin-message", "admin-settings"],
  enterprise: ["dashboard", "basic-info", "booth-standard", "booth-green", "booth-raw", "notice", "progress", "message"],
  supplier: ["supplier-green", "supplier-standard", "supplier-raw", "supplier-message"],
  operator: ["operator-dashboard", "operator-exhibition", "operator-booth", "operator-green", "operator-notice", "operator-cert", "operator-message"],
  mini: ["mini-home", "mini-booth", "mini-message"]
};

let frameMap = {};
let overlayMap = {};
let pendingReactions = [];

function toPage(row) {
  return {
    id: row[0],
    title: row[1],
    platform: row[2],
    role: row[3],
    type: row[4],
    detailPage: row[5] || null,
    editPage: row[6] || null
  };
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function safeText(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback || "";
  return String(value);
}

function hexToRgb(hex) {
  const value = /^#[0-9A-Fa-f]{6}$/.test(String(hex)) ? String(hex).slice(1) : "000000";
  return {
    r: parseInt(value.slice(0, 2), 16) / 255,
    g: parseInt(value.slice(2, 4), 16) / 255,
    b: parseInt(value.slice(4, 6), 16) / 255
  };
}

function fill(hex) {
  return [{ type: "SOLID", color: hexToRgb(hex) }];
}

function shadow(kind) {
  const popup = kind === "popup";
  return [{
    type: "DROP_SHADOW",
    color: { r: 0.063, g: 0.094, b: 0.157, a: popup ? 0.18 : 0.08 },
    offset: { x: 0, y: popup ? 18 : 10 },
    radius: popup ? 40 : 24,
    spread: 0,
    visible: true,
    blendMode: "NORMAL"
  }];
}

function pad(node, top, right, bottom, left) {
  const t = Number.isFinite(top) ? top : 0;
  node.paddingTop = t;
  node.paddingRight = Number.isFinite(right) ? right : t;
  node.paddingBottom = Number.isFinite(bottom) ? bottom : t;
  node.paddingLeft = Number.isFinite(left) ? left : t;
}

function append(parent, child) {
  if (!parent || !child || typeof parent.appendChild !== "function") return child;
  parent.appendChild(child);
  return child;
}

function frame(name, mode, options) {
  console.log("step 1: create frame", name || "Unnamed");
  const opts = options || {};
  const node = figma.createFrame();
  node.name = name || "Unnamed";
  figma.currentPage.appendChild(node);
  node.layoutMode = mode === "HORIZONTAL" ? "HORIZONTAL" : "VERTICAL";
  node.primaryAxisSizingMode = opts.primary || "AUTO";
  node.counterAxisSizingMode = opts.counter || "AUTO";
  node.itemSpacing = Number.isFinite(opts.gap) ? opts.gap : T.space.md;
  node.fills = opts.fill ? fill(opts.fill) : [];
  if (Number.isFinite(opts.radius)) node.cornerRadius = opts.radius;
  if (opts.stroke) node.strokes = fill(opts.stroke);
  if (opts.shadow) node.effects = shadow(opts.shadow === true ? "card" : opts.shadow);
  if (opts.align) node.counterAxisAlignItems = opts.align;
  if (opts.justify) node.primaryAxisAlignItems = opts.justify;
  if (Number.isFinite(opts.padding)) pad(node, opts.padding);
  if (Number.isFinite(opts.width) || Number.isFinite(opts.height)) {
    node.resize(Number.isFinite(opts.width) ? opts.width : 1, Number.isFinite(opts.height) ? opts.height : 1);
    if (node.layoutMode === "HORIZONTAL") {
      if (Number.isFinite(opts.width)) node.primaryAxisSizingMode = "FIXED";
      if (Number.isFinite(opts.height)) node.counterAxisSizingMode = "FIXED";
    } else {
      if (Number.isFinite(opts.width)) node.counterAxisSizingMode = "FIXED";
      if (Number.isFinite(opts.height)) node.primaryAxisSizingMode = "FIXED";
    }
  }
  return node;
}

function txt(name, value, size, color, bold, width) {
  const node = figma.createText();
  node.name = name || "Text";
  figma.currentPage.appendChild(node);
  node.fontName = bold ? T.font.bold : T.font.regular;
  node.characters = safeText(value, "");
  node.fontSize = Number.isFinite(size) ? size : T.fontSize.sm;
  node.lineHeight = { unit: "PERCENT", value: 140 };
  node.fills = fill(color || T.color.text);
  if (Number.isFinite(width) && width > 0) {
    node.textAutoResize = "HEIGHT";
    node.resize(width, Math.max(1, node.height));
  }
  return node;
}

function icon(name, color) {
  const c = color || T.color.primary;
  const node = figma.createNodeFromSvg(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="12" height="12" rx="3" stroke="${c}" stroke-width="1.6"/><circle cx="9" cy="9" r="2.4" fill="${c}"/></svg>`);
  node.name = name || "SVG Icon";
  figma.currentPage.appendChild(node);
  return node;
}

function addReaction(node, destinationId, reason) {
  if (!node || !destinationId) return;
  pendingReactions.push({ node, destinationId, reason: reason || "navigation" });
}

function applyReactions() {
  pendingReactions.forEach(item => {
    if (!item.node || !item.destinationId) return;
    const destinationNode = frameMap[item.destinationId] || overlayMap[item.destinationId];
    if (!destinationNode || !destinationNode.id) return;
    item.node.reactions = [{
      trigger: "ON_CLICK",
      action: {
        type: "NODE",
        destinationId: destinationNode.id
      }
    }];
  });
}

function badge(prefix, label, type, targetId) {
  const map = {
    success: [T.color.successLight, T.color.success],
    warning: [T.color.warningLight, T.color.warning],
    danger: [T.color.dangerLight, T.color.danger],
    info: [T.color.infoLight, T.color.info]
  };
  const colors = map[type || "info"] || map.info;
  const box = frame(`${prefix}-Badge-${label}`, "HORIZONTAL", { fill: colors[0], radius: 99, gap: 4, align: "CENTER" });
  pad(box, 5, 10, 5, 10);
  append(box, txt(`${prefix}-BadgeText-${label}`, `● ${label}`, T.fontSize.xs, colors[1], true));
  if (targetId) addReaction(box, targetId, "status-filter");
  return box;
}

function button(prefix, label, variant, targetId) {
  const bg = variant === "danger" ? T.color.danger : variant === "secondary" ? T.color.surface : T.color.primary;
  const fg = variant === "secondary" ? T.color.primary : "#FFFFFF";
  const node = frame(`${prefix}-Button-${label}`, "HORIZONTAL", { fill: bg, radius: T.radius.sm, gap: T.space.xs, align: "CENTER" });
  pad(node, 10, 18, 10, 18);
  if (variant === "secondary") node.strokes = fill("#D8E7FF");
  append(node, txt(`${prefix}-ButtonText-${label}`, label, T.fontSize.sm, fg, true));
  if (targetId) addReaction(node, targetId, "button");
  return node;
}

function card(prefix, title, children) {
  const node = frame(`${prefix}-Card-${title}`, "VERTICAL", { fill: T.color.surface, radius: T.radius.md, padding: T.space.lg, gap: T.space.md, shadow: true });
  node.layoutAlign = "STRETCH";
  safeArray(children).forEach(child => append(node, child));
  return node;
}

function infoRow(prefix, title, desc, state, stateType, targetId) {
  const row = frame(`${prefix}-Row-${title}`, "HORIZONTAL", { fill: "#F8FAFD", radius: T.radius.sm, gap: T.space.md, justify: "SPACE_BETWEEN", align: "CENTER" });
  row.layoutAlign = "STRETCH";
  pad(row, 12, 14, 12, 14);
  const left = frame(`${prefix}-RowLeft-${title}`, "VERTICAL", { gap: 2 });
  append(left, txt(`${prefix}-RowTitle-${title}`, title, T.fontSize.sm, T.color.text, true));
  append(left, txt(`${prefix}-RowDesc-${title}`, desc, T.fontSize.xs, T.color.sub, false));
  append(row, left);
  append(row, badge(prefix, state || "待处理", stateType || "warning", targetId));
  if (targetId) addReaction(row, targetId, "row");
  return row;
}

function field(prefix, label, value) {
  const wrap = frame(`${prefix}-FormItem-${label}`, "VERTICAL", { gap: T.space.xs });
  wrap.layoutAlign = "STRETCH";
  append(wrap, txt(`${prefix}-FormLabel-${label}`, label, T.fontSize.xs, T.color.text, true));
  const input = frame(`${prefix}-Input-${label}`, "HORIZONTAL", { fill: T.color.surface, stroke: "#D8E0EC", radius: T.radius.sm, width: 320, height: 42, align: "CENTER" });
  input.layoutAlign = "STRETCH";
  pad(input, 11, 12, 11, 12);
  append(input, txt(`${prefix}-InputValue-${label}`, value || "请输入", T.fontSize.sm, T.color.sub, false));
  append(wrap, input);
  return wrap;
}

function formBlock(prefix, targetId) {
  const rows = [];
  const row1 = frame(`${prefix}-FormRow-1`, "HORIZONTAL", { gap: T.space.md });
  row1.layoutAlign = "STRETCH";
  append(row1, field(prefix, "企业名称", "华丰农业科技"));
  append(row1, field(prefix, "联系人", "李明 138-0000-8888"));
  const row2 = frame(`${prefix}-FormRow-2`, "HORIZONTAL", { gap: T.space.md });
  row2.layoutAlign = "STRETCH";
  append(row2, field(prefix, "展位号", "A3-218"));
  append(row2, field(prefix, "楣板信息", "华丰农业科技"));
  rows.push(txt(`${prefix}-FormTitle`, "详情表单", T.fontSize.lg, T.color.text, true), row1, row2);
  const actions = frame(`${prefix}-FormActions`, "HORIZONTAL", { gap: T.space.sm });
  append(actions, button(prefix, "保存草稿", "secondary", targetId));
  append(actions, button(prefix, "提交审核", "primary", targetId));
  rows.push(actions);
  return card(prefix, "详情表单", rows);
}

function uploadBlock(prefix, targetId) {
  const children = [txt(`${prefix}-UploadTitle`, "文件/资质上传", T.fontSize.lg, T.color.text, true)];
  ["营业执照.pdf", "登记证.pdf", "检测报告.pdf", "LOGO.png"].forEach((file, index) => {
    children.push(infoRow(prefix, file, "支持预览和替换", index === 2 ? "待审核" : "已上传", index === 2 ? "warning" : "success", targetId));
  });
  const zone = frame(`${prefix}-UploadZone`, "VERTICAL", { fill: "#F7FBFF", stroke: "#B8D7FF", radius: T.radius.md, padding: T.space.lg, gap: T.space.xs, align: "CENTER" });
  zone.layoutAlign = "STRETCH";
  append(zone, icon(`${prefix}-UploadIcon`, T.color.primary));
  append(zone, txt(`${prefix}-UploadText`, "点击或拖拽上传文件", T.fontSize.sm, T.color.primary, true));
  append(zone, txt(`${prefix}-UploadHint`, "支持 JPG、PNG、PDF，单个文件不超过 20MB", T.fontSize.xs, T.color.sub, false));
  if (targetId) addReaction(zone, targetId, "upload-button");
  children.push(zone);
  return card(prefix, "上传模块", children);
}

function tableBlock(prefix, columns, detailId, filteredId) {
  const finalColumns = safeArray(columns).length ? columns : ["名称", "类型", "状态", "操作"];
  const wrap = card(prefix, "列表", [txt(`${prefix}-TableTitle`, "列表", T.fontSize.lg, T.color.text, true)]);
  const header = frame(`${prefix}-TableHeader`, "HORIZONTAL", { fill: "#F2F5FA", radius: T.radius.sm, gap: 0 });
  header.layoutAlign = "STRETCH";
  finalColumns.forEach(col => {
    const cell = frame(`${prefix}-TableHeaderCell-${col}`, "HORIZONTAL", { width: 142, height: 42, gap: 0, align: "CENTER" });
    pad(cell, 12, 8, 12, 8);
    append(cell, txt(`${prefix}-TableHeaderText-${col}`, col, T.fontSize.xs, "#52637A", true));
    append(header, cell);
  });
  append(wrap, header);
  for (let i = 1; i <= 4; i += 1) {
    const row = frame(`${prefix}-TableRow-${i}`, "HORIZONTAL", { fill: T.color.surface, gap: 0 });
    row.layoutAlign = "STRETCH";
    finalColumns.forEach((col, colIndex) => {
      const cell = frame(`${prefix}-TableCell-${i}-${col}`, "HORIZONTAL", { width: 142, height: 46, gap: 0, align: "CENTER" });
      pad(cell, 12, 8, 12, 8);
      const isAction = colIndex === finalColumns.length - 1;
      const value = isAction ? "查看详情" : sample(col, i);
      append(cell, txt(`${prefix}-TableCellText-${i}-${col}`, value, T.fontSize.xs, isAction ? T.color.primary : T.color.text, isAction));
      append(row, cell);
    });
    if (detailId) addReaction(row, detailId, "table-row");
    append(wrap, row);
  }
  const filterBar = frame(`${prefix}-StatusFilter`, "HORIZONTAL", { gap: T.space.sm });
  append(filterBar, badge(prefix, "全部", "info", filteredId));
  append(filterBar, badge(prefix, "审核中", "warning", filteredId));
  append(filterBar, badge(prefix, "已通过", "success", filteredId));
  append(filterBar, badge(prefix, "已驳回", "danger", filteredId));
  append(wrap, filterBar);
  return wrap;
}

function sample(col, index) {
  const map = {
    企业名称: ["华丰农业科技", "绿田肥业", "丰农装备", "华垦科技"],
    展商: ["华丰农业科技", "绿田肥业", "丰农装备", "华垦科技"],
    展会: ["中国国际农业科技展", "中国国际农业科技展", "西南农资订货会", "中国国际农业科技展"],
    展位: ["A3-218", "B1-086", "C2-106", "C2-108"],
    状态: ["进行中", "待确认", "已通过", "待补充"],
    来源: ["展商修改提交", "慕渊云同步", "展商修改提交", "慕渊云同步"],
    资料状态: ["待后台审核", "免审", "资料待补", "审核中"]
  };
  return map[col] && map[col][index - 1] ? map[col][index - 1] : `${col}${index}`;
}

function noticeBlock(prefix, targetId) {
  const rows = [
    txt(`${prefix}-NoticeTitle`, "参展报道通知书", T.fontSize.xl, T.color.text, true),
    infoRow(prefix, "展会名称", "2026 中国国际农业科技展", "已配置", "success", targetId),
    infoRow(prefix, "报到时间", "2026-09-17 09:00 - 18:00", "已配置", "success", targetId),
    infoRow(prefix, "报到地点", "上海国家会展中心 北登录厅 2 号服务台", "已配置", "success", targetId),
    infoRow(prefix, "展位号", "A3-218", "已配置", "success", targetId)
  ];
  const flow = frame(`${prefix}-NoticeFlow`, "HORIZONTAL", { gap: T.space.sm, align: "CENTER" });
  append(flow, button(prefix, "签到领证件", "secondary", targetId));
  append(flow, txt(`${prefix}-NoticeFlowArrow`, "→", T.fontSize.lg, T.color.weak, true));
  append(flow, button(prefix, "办理入场手续", "secondary", targetId));
  rows.push(flow, button(prefix, "下载通知书 PDF", "primary", targetId));
  return card(prefix, "参展报道通知书", rows);
}

function sectionBlock(prefix, title, items, targetId) {
  const children = [txt(`${prefix}-SectionTitle-${title}`, title, T.fontSize.lg, T.color.text, true)];
  safeArray(items).forEach((item, index) => {
    children.push(infoRow(prefix, item, "按 HTML DOM 顺序映射的模块", index % 2 ? "审核中" : "已完成", index % 2 ? "warning" : "success", targetId));
  });
  return card(prefix, title, children);
}

function createPcFrame(page) {
  const prefix = `PC-${page.title}`;
  const root = frame(`${prefix}-PageFrame`, "HORIZONTAL", { fill: T.color.bg, width: T.pc.width, height: T.pc.height, gap: 0 });
  console.log("step 2: add components", root.name);
  const sidebar = frame(`${prefix}-Sidebar`, "VERTICAL", { fill: T.color.sidebar, width: T.pc.sidebar, height: T.pc.height, gap: T.space.md });
  pad(sidebar, 28, 18, 28, 18);
  const brand = frame(`${prefix}-SidebarBrand`, "HORIZONTAL", { gap: T.space.sm, align: "CENTER" });
  append(brand, button(prefix, page.role === "admin" ? "管" : page.role === "supplier" ? "供" : page.role === "operator" ? "运" : "展", "primary"));
  const brandText = frame(`${prefix}-SidebarBrandText`, "VERTICAL", { gap: 2 });
  append(brandText, txt(`${prefix}-SystemName`, page.role === "admin" ? "展务管理平台" : page.role === "supplier" ? "供应商审核中心" : page.role === "operator" ? "运营商协同平台" : "企业服务中心", T.fontSize.lg, "#FFFFFF", true));
  append(brandText, txt(`${prefix}-EnglishName`, "EXHIBITION SERVICE", T.fontSize.xs, "#9FB3CF", false));
  append(brand, brandText);
  append(sidebar, brand);
  safeArray(NAV[page.role]).forEach(navId => {
    const navPage = PAGES.find(p => p.id === navId);
    const active = navId === page.id;
    const item = frame(`${prefix}-SidebarItem-${navPage ? navPage.title : navId}`, "HORIZONTAL", { fill: active ? T.color.primary : undefined, radius: T.radius.sm, gap: T.space.sm, align: "CENTER" });
    item.layoutAlign = "STRETCH";
    pad(item, 12, 14, 12, 14);
    append(item, icon(`${prefix}-SidebarIcon-${navId}`, active ? "#FFFFFF" : "#9FB3CF"));
    append(item, txt(`${prefix}-SidebarText-${navId}`, navPage ? navPage.title.replace(/^.*-/, "") : navId, T.fontSize.sm, active ? "#FFFFFF" : "#C8D4E6", active));
    addReaction(item, navId, "sidebar");
    append(sidebar, item);
  });
  append(root, sidebar);

  const main = frame(`${prefix}-Main`, "VERTICAL", { width: T.pc.width - T.pc.sidebar, height: T.pc.height, gap: 0 });
  const topbar = frame(`${prefix}-Topbar`, "HORIZONTAL", { fill: T.color.surface, width: T.pc.width - T.pc.sidebar, height: T.pc.topbar, justify: "SPACE_BETWEEN", align: "CENTER" });
  pad(topbar, 0, 32, 0, 32);
  append(topbar, txt(`${prefix}-Breadcrumb`, `2026 中国国际农业科技展 / ${page.title}`, T.fontSize.sm, T.color.sub, false));
  append(topbar, badge(prefix, "展会进行中", "success", `${page.id}-filtered`));
  append(main, topbar);

  const content = frame(`${prefix}-Content`, "VERTICAL", { width: T.pc.width - T.pc.sidebar, height: T.pc.height - T.pc.topbar, gap: T.space.lg });
  pad(content, 32);
  const header = frame(`${prefix}-PageHeader`, "HORIZONTAL", { justify: "SPACE_BETWEEN", align: "CENTER" });
  header.layoutAlign = "STRETCH";
  const h = frame(`${prefix}-HeaderText`, "VERTICAL", { gap: 4 });
  append(h, txt(`${prefix}-Title`, page.title, T.fontSize.xxl, T.color.text, true));
  append(h, txt(`${prefix}-Desc`, page.type === "detail" ? "详情表单，保留 HTML DOM 层级顺序" : "页面结构按原型 DOM 顺序映射，支持 prototype 流转", T.fontSize.sm, T.color.sub, false));
  append(header, h);
  const actionTarget = page.editPage || page.detailPage || "overlay-feedback";
  append(header, button(prefix, page.type === "detail" ? "返回列表" : "主要操作", "primary", actionTarget));
  append(content, header);

  const detailTarget = page.detailPage || null;
  const editTarget = page.editPage || null;
  const filterTarget = `${page.id}-filtered`;
  if (["table", "list"].includes(page.type)) append(content, tableBlock(prefix, ["名称", "展会", "展位", "状态", "操作"], detailTarget, filterTarget));
  if (["form", "edit", "detail"].includes(page.type)) append(content, formBlock(prefix, editTarget || page.id));
  if (["upload", "review"].includes(page.type)) append(content, uploadBlock(prefix, "overlay-reject"));
  if (page.type === "notice" || page.type === "config") append(content, noticeBlock(prefix, "overlay-deadline"));
  if (page.type === "dashboard") {
    const metrics = frame(`${prefix}-Metrics`, "HORIZONTAL", { gap: T.space.md });
    metrics.layoutAlign = "STRETCH";
    ["展商数量 328", "审核通过率 82%", "待处理 46", "异常 19"].forEach(item => append(metrics, card(prefix, item, [txt(`${prefix}-Metric-${item}`, item, T.fontSize.xl, T.color.text, true)])));
    append(content, metrics);
    const grid = frame(`${prefix}-ModuleGrid`, "HORIZONTAL", { gap: T.space.lg });
    grid.layoutAlign = "STRETCH";
    append(grid, sectionBlock(prefix, "核心流程", ["企业资料确认", "展位资料提交", "供应商审核", "效果图确认"], actionTarget));
    append(grid, sectionBlock(prefix, "待办提醒", ["审核失败通知", "资料截止提醒", "系统消息"], actionTarget));
    append(content, grid);
  }
  if (["green", "raw", "booth"].includes(page.type)) {
    const grid = frame(`${prefix}-ModuleGrid`, "HORIZONTAL", { gap: T.space.lg });
    grid.layoutAlign = "STRETCH";
    append(grid, formBlock(prefix, editTarget || page.id));
    append(grid, uploadBlock(prefix, "overlay-feedback"));
    append(content, grid);
  }
  append(main, content);
  append(root, main);
  return root;
}

function createMiniFrame(page) {
  const prefix = `MiniProgram-${page.title}`;
  const root = frame(`${prefix}-PageFrame`, "VERTICAL", { fill: T.color.bg, width: T.mini.width, height: T.mini.height, gap: 0 });
  console.log("step 2: add components", root.name);
  const header = frame(`${prefix}-Header`, "VERTICAL", { fill: T.color.primary, width: T.mini.width, height: T.mini.topbar, gap: T.space.sm });
  pad(header, 14, 18, 14, 18);
  const status = frame(`${prefix}-StatusBar`, "HORIZONTAL", { justify: "SPACE_BETWEEN" });
  status.layoutAlign = "STRETCH";
  append(status, txt(`${prefix}-Time`, "09:41", T.fontSize.xs, "#FFFFFF", false));
  append(status, txt(`${prefix}-Dots`, "●●●", T.fontSize.xs, "#FFFFFF", false));
  append(header, status);
  const title = frame(`${prefix}-TitleRow`, "HORIZONTAL", { justify: "SPACE_BETWEEN", align: "CENTER" });
  title.layoutAlign = "STRETCH";
  append(title, txt(`${prefix}-Title`, page.title.replace("小程序-", ""), T.fontSize.xl, "#FFFFFF", true));
  append(title, txt(`${prefix}-More`, "···", T.fontSize.lg, "#FFFFFF", true));
  append(header, title);
  append(root, header);
  const body = frame(`${prefix}-Content`, "VERTICAL", { fill: T.color.bg, width: T.mini.width, height: T.mini.height - T.mini.topbar - T.mini.tabbar, gap: T.space.sm });
  pad(body, 14);
  const nextTarget = page.detailPage || "mini-progress";
  const sections = page.type === "notice" ? ["报到信息", "报到流程", "注意事项", "现场对接人", "下载按钮"] : page.type === "upload" ? ["营业执照", "登记证", "检测报告", "上传限制说明"] : ["我的展位", "当前进度", "参展报道通知书", "待办提醒"];
  sections.forEach((section, index) => {
    const c = card(prefix, section, [txt(`${prefix}-CardTitle-${section}`, section, T.fontSize.md, T.color.text, true)]);
    c.effects = [];
    append(c, txt(`${prefix}-CardDesc-${section}`, "移动端页面模块，文本和布局均可编辑。", T.fontSize.xs, T.color.sub, false, 300));
    append(c, index % 2 ? badge(prefix, "审核中", "warning", nextTarget) : badge(prefix, "已完成", "success", nextTarget));
    addReaction(c, nextTarget, "mini-card");
    append(body, c);
  });
  append(root, body);
  const tab = frame(`${prefix}-BottomNav`, "HORIZONTAL", { fill: T.color.surface, width: T.mini.width, height: T.mini.tabbar, justify: "SPACE_AROUND", align: "CENTER", gap: 0 });
  safeArray(NAV.mini).forEach(navId => {
    const navPage = PAGES.find(p => p.id === navId);
    const item = frame(`${prefix}-BottomNavItem-${navId}`, "VERTICAL", { gap: 2, align: "CENTER" });
    append(item, icon(`${prefix}-BottomNavIcon-${navId}`, navId === page.id ? T.color.primary : T.color.sub));
    append(item, txt(`${prefix}-BottomNavText-${navId}`, navPage ? navPage.title.replace("小程序-", "") : navId, T.fontSize.xs, navId === page.id ? T.color.primary : T.color.sub, navId === page.id));
    addReaction(item, navId, "bottom-nav");
    append(tab, item);
  });
  append(root, tab);
  return root;
}

function createFilteredFrame(page) {
  const p = Object.assign({}, page, { id: `${page.id}-filtered`, title: `${page.title}-筛选结果`, type: "table" });
  const root = p.platform === "mini" ? createMiniFrame(p) : createPcFrame(p);
  return root;
}

function createOverlay(id, title) {
  const root = frame(`Overlay-${title}-Frame [Overlay]`, "VERTICAL", { fill: T.color.surface, radius: T.radius.md, padding: T.space.lg, gap: T.space.md, shadow: "popup", width: 520, height: 320 });
  append(root, txt(`Overlay-${title}-Title`, title, T.fontSize.lg, T.color.text, true));
  append(root, txt(`Overlay-${title}-Desc`, "该 Frame 仅用于 Prototype Overlay，不覆盖普通页面。", T.fontSize.sm, T.color.sub, false));
  append(root, field(`Overlay-${title}`, "备注说明", "请输入说明"));
  const actions = frame(`Overlay-${title}-Actions`, "HORIZONTAL", { gap: T.space.sm, justify: "SPACE_BETWEEN" });
  actions.layoutAlign = "STRETCH";
  append(actions, button(`Overlay-${title}`, "取消", "secondary"));
  append(actions, button(`Overlay-${title}`, "确认", "primary"));
  append(root, actions);
  overlayMap[id] = root;
  return root;
}

function componentLibrary() {
  const b = figma.createComponent();
  b.name = "Component / Button / Primary";
  figma.currentPage.appendChild(b);
  b.layoutMode = "HORIZONTAL";
  b.primaryAxisSizingMode = "AUTO";
  b.counterAxisSizingMode = "AUTO";
  b.fills = fill(T.color.primary);
  b.cornerRadius = T.radius.sm;
  b.counterAxisAlignItems = "CENTER";
  pad(b, 10, 18, 10, 18);
  append(b, txt("Component-Button-Label", "主要按钮", T.fontSize.sm, "#FFFFFF", true));
  const c = figma.createComponent();
  c.name = "Component / Card / Container";
  figma.currentPage.appendChild(c);
  c.layoutMode = "VERTICAL";
  c.primaryAxisSizingMode = "AUTO";
  c.counterAxisSizingMode = "AUTO";
  c.fills = fill(T.color.surface);
  c.cornerRadius = T.radius.md;
  c.effects = shadow("card");
  pad(c, T.space.lg);
  append(c, txt("Component-Card-Title", "卡片标题", T.fontSize.lg, T.color.text, true));
}

async function createAll() {
  await figma.loadFontAsync(T.font.regular);
  await figma.loadFontAsync(T.font.bold);
  frameMap = {};
  overlayMap = {};
  pendingReactions = [];

  const componentsPage = figma.createPage();
  componentsPage.name = "00 Components / 基础组件";
  await figma.setCurrentPageAsync(componentsPage);
  componentLibrary();

  const overlayPage = figma.createPage();
  overlayPage.name = "05 Overlays / 弹窗";
  await figma.setCurrentPageAsync(overlayPage);
  [["overlay-reject", "驳回原因弹窗"], ["overlay-deadline", "资料截止配置弹窗"], ["overlay-feedback", "错误反馈弹窗"], ["overlay-assign", "分配展商弹窗"]].forEach((item, index) => {
    const node = createOverlay(item[0], item[1]);
    node.x = index * 620;
    node.y = 0;
  });

  const groups = [
    ["01 管理后台 PC", "admin"],
    ["02 企业端 PC", "enterprise"],
    ["03 供应商 PC", "supplier"],
    ["04 运营商 PC", "operator"],
    ["06 小程序端 375", "mini"]
  ];

  for (const group of groups) {
    const page = figma.createPage();
    page.name = group[0];
    await figma.setCurrentPageAsync(page);
    const specs = PAGES.filter(p => p.role === group[1]);
    const perRow = group[1] === "mini" ? 5 : 2;
    const width = group[1] === "mini" ? T.mini.width : T.pc.width;
    const height = group[1] === "mini" ? T.mini.height : T.pc.height;
    specs.forEach((spec, index) => {
      const node = spec.platform === "mini" ? createMiniFrame(spec) : createPcFrame(spec);
      node.x = (index % perRow) * (width + 96);
      node.y = Math.floor(index / perRow) * (height + 96);
      frameMap[spec.id] = node;
    });
  }

  for (const group of groups) {
    const page = figma.root.children.find(p => p.name === group[0]);
    if (!page) continue;
    await figma.setCurrentPageAsync(page);
    const specs = PAGES.filter(p => p.role === group[1] && ["table", "list", "review"].includes(p.type));
    const perRow = group[1] === "mini" ? 5 : 2;
    const width = group[1] === "mini" ? T.mini.width : T.pc.width;
    const height = group[1] === "mini" ? T.mini.height : T.pc.height;
    specs.forEach((spec, index) => {
      const node = createFilteredFrame(spec);
      const baseCount = PAGES.filter(p => p.role === group[1]).length;
      const order = baseCount + index;
      node.x = (order % perRow) * (width + 96);
      node.y = Math.floor(order / perRow) * (height + 96);
      frameMap[`${spec.id}-filtered`] = node;
    });
  }

  pendingReactions = [];
  for (const group of groups) {
    const page = figma.root.children.find(p => p.name === group[0]);
    if (!page) continue;
    await figma.setCurrentPageAsync(page);
    PAGES.filter(p => p.role === group[1]).forEach(spec => {
      const existing = frameMap[spec.id];
      if (!existing) return;
      const oldX = existing.x;
      const oldY = existing.y;
      existing.remove();
      const rebuilt = spec.platform === "mini" ? createMiniFrame(spec) : createPcFrame(spec);
      rebuilt.x = oldX;
      rebuilt.y = oldY;
      frameMap[spec.id] = rebuilt;
    });
  }
  applyReactions();

  const first = frameMap["admin-dashboard"] || frameMap["dashboard"] || Object.keys(frameMap).map(k => frameMap[k])[0];
  if (first && first.parent && first.parent.type === "PAGE") {
    await figma.setCurrentPageAsync(first.parent);
    figma.viewport.scrollAndZoomIntoView([first]);
  }
  figma.notify(`已生成 ${Object.keys(frameMap).length} 个页面 Frame，并绑定 Prototype 交互`);
}

figma.ui.onmessage = async msg => {
  if (msg && msg.type === "close") {
    figma.closePlugin();
    return;
  }
  if (msg && msg.type === "create") {
    try {
      await createAll();
    } catch (error) {
      console.log("runtime error:", error && error.message ? error.message : "unknown");
      figma.notify(`生成失败：${error && error.message ? error.message : "未知错误"}`);
    }
  }
};
