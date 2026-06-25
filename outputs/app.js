const page = document.body.dataset.page || "dashboard";

const enterpriseNav = [
  ["dashboard.html","dashboard","◫","企业工作台"],
  ["basic-info.html","basic-info","▤","基础信息"],
  ["product-info.html","product-info","▣","企业及展品"],
  ["brand-info.html","brand-info","✦","宣传资料"],
  ["booth-standard.html","booth-standard","⌂","标展服务"],
  ["booth-green.html","booth-green","♻","绿搭管理"],
  ["booth-raw.html","booth-raw","◇","光地管理"],
  ["notice.html","notice","▧","报到通知书"],
  ["progress.html","progress","◉","进度中心"],
  ["message.html","message","✉","消息中心"]
];

const adminNav = [
  ["admin-dashboard.html","admin-dashboard","◫","管理总览"],
  ["admin-exhibition.html","admin-exhibition","▦","展会管理"],
  ["admin-enterprise.html","admin-enterprise","♙","企业管理"],
  ["admin-review-green.html","admin-review-green","♻","绿搭审核"],
  ["admin-review-raw.html","admin-review-raw","◇","光地审核"],
  ["admin-notice.html","admin-notice","▧","通知书管理"],
  ["admin-message.html","admin-message","✉","消息系统"],
  ["admin-cert.html","admin-cert","♧","证件管理"]
];

const meta = {
  "dashboard": ["企业工作台","欢迎回来，集中查看参展进度与重要待办"],
  "basic-info": ["基础信息确认","确认企业联络信息与展位楣板内容"],
  "product-info": ["企业及展品信息","维护产品品类并提交经营资质材料"],
  "brand-info": ["企业宣传资料","完善 LOGO、会刊资料与企业简介"],
  "booth-standard": ["标展服务","查看标准展位信息与现场服务入口"],
  "booth-green": ["绿搭画面管理","上传制作画面，跟踪单图审核与效果图确认"],
  "booth-raw": ["光地搭建管理","提交搭建商、图纸及安全承诺材料"],
  "notice": ["报到通知书","查看参展报到信息并下载电子通知书"],
  "progress": ["进度中心","跟踪从资料确认到证件注册的完整进度"],
  "message": ["消息中心","集中接收审核、修改与截止日期提醒"],
  "admin-dashboard": ["展会管理总览","掌握企业报名、审核与异常处理数据"],
  "admin-exhibition": ["展会管理","创建展会并配置展位类型与业务截止时间"],
  "admin-enterprise": ["企业管理","管理参展企业、展位分配与楣板信息"],
  "admin-review-green": ["绿搭审核","逐图审核企业画面并反馈修改意见"],
  "admin-review-raw": ["光地审核","审核搭建商资质、工程图纸与安全文件"],
  "admin-notice": ["通知书管理","编辑通知书模板并管理 PDF 生成记录"],
  "admin-message": ["消息系统","管理短信、站内信与自动通知记录"],
  "admin-cert": ["证件管理","查看人员注册状态并导出制证名单"]
};

const badge = (text, type="default") => `<span class="badge ${type}">${text}</span>`;
const button = (text, cls="primary", extra="") => {
  const customClass = extra.match(/\bclass="([^"]*)"/);
  const className = customClass ? customClass[1] : `btn ${cls}`;
  const attrs = customClass ? extra.replace(customClass[0], "") : extra;
  return `<button class="${className}" ${attrs}>${text}</button>`;
};
const progress = (name, value, status="") => `
  <div class="progress-row">
    <div class="progress-meta"><span>${name}</span><strong>${value}%</strong></div>
    <div class="progress ${status}"><span style="width:${value}%"></span></div>
  </div>`;
const fileRow = (name, state="已上传", type="success") => `
  <div class="file-row">
    <div class="file-meta"><span>📄</span><span class="file-name">${name}</span></div>
    <div>${badge(state,type)} <span class="link js-confirm" data-message="已打开文件预览">预览</span></div>
  </div>`;
const uploadZone = (label="点击或拖拽文件到此处") => `
  <div class="upload-zone js-upload">
    <div><div class="upload-icon">☁</div><div>${label}</div><div class="help">支持 JPG、PNG、PDF，单个文件不超过 20MB</div></div>
  </div>`;

function navHTML(items) {
  return items.map(([href,key,icon,label]) =>
    `<a href="${href}" class="nav-item ${page===key?"active":""}"><span class="nav-icon">${icon}</span><span>${label}</span></a>`
  ).join("");
}

window.__setupSystemHub = function () {
// System Hub: unified entry layer and cross-system logout.
// Appended as a non-invasive override; existing business pages remain independent.
pages["system-hub"] = () => `
  <div class="system-hub-page">
    <header class="system-hub-hero">
      <div>
        <span class="system-hub-kicker">EXHIBITION SERVICE PLATFORM</span>
        <h1>展务系统统一入口</h1>
        <p>请选择要进入的业务系统。四个系统保持独立运行，本页面仅作为统一选择与跳转中心。</p>
      </div>
      <span class="badge info">System Hub</span>
    </header>
    <main class="system-hub-grid">
      <a class="system-entry-card admin" href="admin-login.html">
        <span class="system-entry-icon">管</span>
        <div>
          <h2>管理后台</h2>
          <p>面向系统管理员，进行展务配置、展商管理、审核规则与消息通知管理。</p>
        </div>
        <em>进入登录页 →</em>
      </a>
      <a class="system-entry-card exhibitor" href="exhibitor-login.html">
        <span class="system-entry-icon">展</span>
        <div>
          <h2>展商端</h2>
          <p>面向参展企业，维护企业信息、提交展位资料、查看审核反馈与报到通知。</p>
        </div>
        <em>进入登录页 →</em>
      </a>
      <a class="system-entry-card supplier" href="supplier-login.html">
        <span class="system-entry-icon">审</span>
        <div>
          <h2>供应商端</h2>
          <p>面向审核人员，处理标展、绿搭、光地资料审核与效果图回传。</p>
        </div>
        <em>进入登录页 →</em>
      </a>
      <a class="system-entry-card mini" href="mini-home.html">
        <span class="system-entry-icon">小</span>
        <div>
          <h2>小程序端</h2>
          <p>移动端辅助入口，用于进度查看、展位详情、效果图确认与消息查看。</p>
        </div>
        <em>进入首页 →</em>
      </a>
    </main>
  </div>`;

if (page === "system-hub") {
  document.getElementById("app").innerHTML = pages["system-hub"]();
}

const systemHubLoginPages = ["admin-login","supplier-login","exhibitor-login","system-hub"];
const systemHubAppPages = [
  "admin-dashboard","admin-exhibition","admin-supplier","admin-enterprise","admin-enterprise-detail","admin-enterprise-review","admin-review-green","admin-review-raw","admin-green-detail","admin-raw-detail","admin-notice","admin-message","admin-cert","admin-settings",
  "dashboard","basic-info","product-info","brand-info","booth-standard","booth-standard-detail","booth-standard-edit","booth-green","booth-green-detail","booth-green-edit","booth-raw","booth-raw-detail","booth-raw-edit","notice","progress","message",
  "supplier-standard","supplier-standard-detail","supplier-green","supplier-green-detail","supplier-raw","supplier-raw-detail","supplier-message",
  "mini-home","mini-booth","mini-booth-detail","mini-progress","mini-progress-detail","mini-notice","mini-message","mini-cert"
];

function addSystemLogoutButton() {
  if (systemHubLoginPages.includes(page) || !systemHubAppPages.includes(page)) return;
  if (document.querySelector(".js-system-logout")) return;

  const pcActions = document.querySelector(".topbar .top-actions");
  if (pcActions) {
    const logout = document.createElement("button");
    logout.type = "button";
    logout.className = "btn system-logout-btn js-system-logout";
    logout.textContent = "退出系统";
    pcActions.prepend(logout);
  }

  const phoneHead = document.querySelector(".phone-head");
  if (phoneHead) {
    const logout = document.createElement("button");
    logout.type = "button";
    logout.className = "mini-logout-btn js-system-logout";
    logout.textContent = "退出";
    phoneHead.appendChild(logout);
  }
}

addSystemLogoutButton();

document.addEventListener("click", (e) => {
  if (!e.target.closest(".js-system-logout")) return;
  try {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
    });
  } catch (err) {}
  location.href = "system-hub.html";
});
};

function shell(content, admin=false) {
  const m = meta[page] || ["展务系统",""];
  const items = admin ? adminNav : enterpriseNav;
  return `
  <div class="shell">
    <aside class="sidebar">
      <div class="brand"><div class="brand-mark">${admin?"管":"展"}</div><div><strong>${admin?"展务管理平台":"企业展务中心"}</strong><small>EXHIBITION SERVICE</small></div></div>
      <div class="nav-label">${admin?"后台管理":"企业服务"}</div>
      ${navHTML(items)}
    </aside>
    <main class="main">
      <header class="topbar">
        <div class="crumb">2026 中国国际农业科技展 / ${m[0]}</div>
        <div class="top-actions"><a href="${admin?"admin-message.html":"message.html"}" class="bell">🔔</a><div class="user"><div class="avatar">${admin?"管":"华"}</div><div><strong>${admin?"展务管理员":"华丰农业科技"}</strong><div class="card-sub">${admin?"超级管理员":"A3-218"}</div></div></div></div>
      </header>
      <div class="content">
        <div class="page-head"><div><h1>${m[0]}</h1><p>${m[1]}</p></div><div class="head-actions">${admin?badge("展会进行中","success"):badge("距资料截止 8 天","warning")}</div></div>
        ${content}
      </div>
    </main>
  </div>${globalUI()}`;
}

function mobileShell(content, active="home", title="展务服务") {
  const links = [
    ["mini-home.html","home","⌂","首页"],
    ["mini-progress.html","progress","◉","进度"],
    ["mini-message.html","message","✉","消息"],
    ["mini-cert.html","cert","♧","证件"]
  ];
  return `<div class="mobile-page"><div class="phone">
    <div class="phone-top"><div class="phone-status"><span>09:41</span><span>● ● ▰</span></div><div class="phone-head"><h1>${title}</h1><span>•••</span></div></div>
    <div class="phone-content">${content}</div>
    <nav class="bottom-nav">${links.map(x=>`<a href="${x[0]}" class="${active===x[1]?"active":""}"><span>${x[2]}</span><span>${x[3]}</span></a>`).join("")}</nav>
  </div></div>${globalUI()}`;
}

function globalUI() {
  return `<style>.guide-hero{display:flex;justify-content:space-between;gap:24px;align-items:center;padding:28px;border-radius:18px;color:#fff;background:linear-gradient(135deg,#1677ff,#0f3f9f);box-shadow:0 18px 45px rgba(22,119,255,.22);margin-bottom:16px}.guide-hero h2{margin:7px 0 8px;font-size:28px}.guide-hero p{margin:0;color:rgba(255,255,255,.82)}.guide-actions{display:flex;gap:10px;flex-shrink:0}.guide-actions .btn:not(.primary){background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.30)}.process-card{padding:20px}.process-steps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}.process-step{min-height:116px;padding:16px;border:1px solid var(--line);border-radius:14px;background:#fff}.process-step span{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#edf3ff;color:var(--primary);font-weight:800;margin-bottom:12px}.process-step p{margin:0;color:var(--muted);font-size:13px;line-height:1.5}.process-step.done{background:#f3fbf6;border-color:#ccefd8}.process-step.done span{background:var(--success);color:#fff}.process-step.current{border-color:#91caff;box-shadow:0 0 0 3px rgba(22,119,255,.08)}.booth-list-card{padding:22px}.list-page-head{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:16px}.list-page-head h3{margin:0 0 5px;font-size:18px}.list-page-head p{margin:0;color:var(--muted)}.booth-list{display:grid;gap:12px}.booth-list-item{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px;border:1px solid var(--line);border-radius:14px;background:#fff}.booth-list-main{display:flex;align-items:center;gap:14px}.booth-icon{width:44px;height:44px;border-radius:13px;display:grid;place-items:center;color:#fff;font-weight:800;background:linear-gradient(135deg,#1677ff,#13c2c2);flex-shrink:0}.booth-list-main h3{margin:0 0 5px;font-size:16px}.booth-list-main p{margin:0;color:var(--muted)}.booth-list-meta{display:flex;align-items:center;gap:10px;flex-shrink:0}.submit-bar{position:sticky;bottom:18px;display:flex;justify-content:flex-end;padding:14px 16px;background:rgba(255,255,255,.92);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);backdrop-filter:blur(8px)}@media(max-width:1100px){.guide-hero,.booth-list-item{align-items:flex-start;flex-direction:column}.process-steps{grid-template-columns:repeat(2,minmax(0,1fr))}.booth-list-meta{width:100%;justify-content:flex-end}}</style><div class="modal" id="actionModal"><div class="modal-mask modal-close"></div><div class="modal-box">
    <div class="modal-head"><strong id="modalTitle">操作确认</strong><button class="icon-btn modal-close">×</button></div>
    <div class="modal-body" id="modalBody">请确认本次操作。</div>
    <div class="modal-foot"><button class="btn modal-close">取消</button><button class="btn primary modal-submit">确认提交</button></div>
  </div></div><div class="toast" id="toast">操作成功</div>`;
}

const pages = {};

pages.dashboard = () => shell(`
  <div class="hero">
    <div><span class="hero-kicker">2026.09.18 — 09.20 · 上海国家会展中心</span><h2>2026 中国国际农业科技展</h2><p>展位 A3-218 · 绿搭展位 · 36㎡。请于 7 月 30 日前完成画面资料与参展人员证件注册。</p>
    <div class="head-actions">${button("查看参展进度","primary",'onclick="location.href=\'progress.html\'"')}${button("报到通知书","",'onclick="location.href=\'notice.html\'"')}</div></div>
  </div>
  <div class="grid grid-4" style="margin-top:16px">
    <div class="card stat-card"><span class="stat-icon">✓</span><div class="stat-label">企业信息完成度</div><div class="stat-value">78%</div><div class="stat-foot">还需完成 2 项资料</div></div>
    <div class="card stat-card"><span class="stat-icon">⌛</span><div class="stat-label">当前审核状态</div><div class="stat-value" style="font-size:22px">绿搭审核中</div><div class="stat-foot">预计 2 个工作日内完成</div></div>
    <div class="card stat-card"><span class="stat-icon">▧</span><div class="stat-label">展位信息</div><div class="stat-value">A3-218</div><div class="stat-foot">绿搭 · 36㎡</div></div>
    <div class="card stat-card"><span class="stat-icon">✉</span><div class="stat-label">未读消息</div><div class="stat-value">3</div><div class="stat-foot"><a class="link" href="message.html">进入消息中心 →</a></div></div>
  </div>
  <div class="grid grid-2" style="margin-top:16px">
    <div class="card"><div class="card-head"><div class="card-title">待办事项</div><a class="link" href="progress.html">查看全部</a></div>
      <ul class="list">
        <li class="list-item"><div class="list-main"><span class="dot-icon">🖼</span><div><div class="list-title">修改 2-反画面文件</div><div class="list-desc">图片存在安全区外文字，请于 7 月 26 日前重新提交</div></div></div>${badge("紧急","danger")}</li>
        <li class="list-item"><div class="list-main"><span class="dot-icon">♧</span><div><div class="list-title">完成参展人员证件注册</div><div class="list-desc">当前已注册 3/6 人</div></div></div>${badge("进行中","warning")}</li>
        <li class="list-item"><div class="list-main"><span class="dot-icon">✦</span><div><div class="list-title">补充会刊宣传资料</div><div class="list-desc">建议上传 300dpi 印刷版企业 LOGO</div></div></div>${badge("待完善","info")}</li>
      </ul>
    </div>
    <div class="card"><div class="card-head"><div class="card-title">资料审核概览</div><span class="text-muted">6 项</span></div>
      ${progress("基础信息",100,"success")}${progress("企业资质",100,"success")}${progress("宣传资料",75)}${progress("绿搭画面",63)}${progress("人员证件",50)}
    </div>
  </div>`);

pages["basic-info"] = () => shell(`
  <div class="card">
    <div class="card-head"><div><div class="card-title">企业基础信息</div><div class="card-sub">信息将用于会刊、楣板及通知书生成，请准确填写</div></div>${badge("已驳回","danger")}</div>
    <div class="alert danger">驳回原因：联系人手机号无法接通，请核对后重新提交。</div>
    <div class="form-grid">
      <div class="field"><label><span class="required">*</span>企业名称</label><input class="input" value="山东华丰农业科技有限公司"></div>
      <div class="field"><label><span class="required">*</span>联系人</label><input class="input" value="张敏"></div>
      <div class="field"><label><span class="required">*</span>联系电话</label><input class="input" value="138 6608 2219"></div>
      <div class="field"><label><span class="required">*</span>楣板信息</label><input class="input" value="山东华丰农业科技有限公司"><div class="help">默认使用企业名称，限 20 个汉字</div></div>
    </div>
    <div class="form-actions">${button("保存草稿","")}${button("重新提交","primary",'class="btn primary js-confirm" data-message="基础信息已重新提交审核"')}</div>
  </div>
  <div class="card"><div class="card-title">状态说明</div><div class="list-item"><span>资料尚未提交审核</span>${badge("未确认","default")}</div><div class="list-item"><span>企业已确认，等待展务使用</span>${badge("已确认","success")}</div><div class="list-item"><span>信息存在问题，需修改后重提</span>${badge("已驳回","danger")}</div></div>`);

pages["product-info"] = () => shell(`
  <div class="card">
    <div class="card-head"><div><div class="card-title">产品品类</div><div class="card-sub">可多选，用于展区与会刊分类</div></div>${badge("审核中","warning")}</div>
    <div class="check-row"><label class="check"><input type="checkbox" checked> 农药制剂</label><label class="check"><input type="checkbox" checked> 新型肥料</label><label class="check"><input type="checkbox"> 农业机械</label><label class="check"><input type="checkbox"> 种子种苗</label><label class="check"><input type="checkbox" checked> 生物技术</label></div>
  </div>
  <div class="card"><div class="card-head"><div><div class="card-title">企业及产品资质</div><div class="card-sub">请上传清晰、完整且在有效期内的扫描件</div></div><span class="text-muted">4 / 5 已上传</span></div>
    <div class="grid grid-3">
      <div class="upload-card"><div class="upload-name"><span>农药登记证</span>${badge("已通过","success")}</div>${fileRow("农药登记证_PD20260188.pdf")}</div>
      <div class="upload-card"><div class="upload-name"><span>肥料登记证</span>${badge("审核中","warning")}</div>${fileRow("肥料登记证_鲁农肥.pdf","审核中","warning")}</div>
      <div class="upload-card"><div class="upload-name"><span>生产许可证</span>${badge("已通过","success")}</div>${fileRow("生产许可证_2026.pdf")}</div>
      <div class="upload-card"><div class="upload-name"><span>检测报告</span>${badge("已驳回","danger")}</div>${uploadZone("重新上传检测报告")}<div class="reject-tip">检测报告缺少 CMA 章，请上传加盖有效印章的完整版本。</div></div>
      <div class="upload-card"><div class="upload-name"><span>营业执照</span>${badge("已通过","success")}</div>${fileRow("营业执照_副本.pdf")}</div>
    </div>
    <div class="form-actions">${button("保存草稿","")}${button("提交审核","primary",'class="btn primary js-confirm" data-message="资质材料已提交审核"')}</div>
  </div>`);

pages["brand-info"] = () => shell(`
  <div class="grid grid-2">
    <div class="card"><div class="card-head"><div><div class="card-title">企业 LOGO</div><div class="card-sub">建议透明底 PNG，尺寸不低于 1000×1000px</div></div>${badge("已上传","success")}</div>
      ${uploadZone("点击替换企业 LOGO")}${fileRow("huafeng-logo-print.png")}
    </div>
    <div class="card"><div class="card-head"><div><div class="card-title">会刊宣传资料</div><div class="card-sub">支持 PDF / AI 文件，大小不超过 50MB</div></div>${badge("待完善","warning")}</div>
      ${uploadZone("上传会刊广告或宣传页")}
    </div>
  </div>
  <div class="card"><div class="card-head"><div><div class="card-title">企业简介</div><div class="card-sub">将展示在电子会刊及小程序企业名片中</div></div><span class="text-muted">168 / 500</span></div>
    <textarea class="textarea">山东华丰农业科技有限公司专注于绿色农业投入品研发与生产，拥有生物农药、新型肥料及智慧植保三大产品线。公司坚持科技创新与可持续发展，为现代农业提供高效、安全、环保的综合解决方案。</textarea>
    <div class="form-actions">${button("保存资料","primary",'class="btn primary js-confirm" data-message="宣传资料已保存"')}</div>
  </div>`);

pages["booth-standard"] = () => shell(`
  <div class="grid grid-3">
    <div class="card span-2"><div class="card-head"><div><div class="card-title">标准展位信息</div><div class="card-sub">本届展会标准展位配置</div></div>${badge("已确认","success")}</div>
      <div class="grid grid-3"><div><div class="text-muted">展位号</div><h2>A3-218</h2></div><div><div class="text-muted">展位规格</div><h2>3m × 3m</h2></div><div><div class="text-muted">展位类型</div><h2>标准展位</h2></div></div>
      <div class="alert info">标准配置：咨询桌 1 张、折椅 2 把、射灯 2 盏、500W 插座 1 个、纸篓 1 个。</div>
    </div>
    <div class="card"><div class="card-title">现场服务</div><p class="text-muted">展位服务开放时间：8 月 1 日至 9 月 15 日</p>${button("下载报到通知书","primary block",'class="btn primary block js-download"')}${button("进入证件注册","block",'style="margin-top:10px" onclick="location.href=\'mini-cert.html\'"')}</div>
  </div>
  <div class="card"><div class="card-head"><div class="card-title">楣板信息确认</div>${badge("已确认","success")}</div>
    <div class="form-grid"><div class="field"><label>中文楣板</label><input class="input" value="山东华丰农业科技有限公司"></div><div class="field"><label>英文楣板</label><input class="input" value="SHANDONG HUAFENG AGRITECH CO., LTD."></div></div>
    <div class="form-actions">${button("申请修改","",'class="btn js-modal" data-title="申请修改楣板" data-body="楣板信息已进入制作流程。请填写修改原因，提交后由组委会确认是否可变更。"')}</div>
  </div>`);

const greenUploads = [
  ["1-正","green-front-v3.pdf","已通过","success",""],
  ["1-反","green-back-v2.pdf","已通过","success",""],
  ["2-正","panel-2-front.pdf","审核中","warning",""],
  ["2-反","panel-2-back.pdf","已驳回","danger","文字“全国第一”属于绝对化宣传用语，请修改后重新上传。"],
  ["1-1","detail-1-1.jpg","已通过","success",""],
  ["1-2","detail-1-2.jpg","审核中","warning",""],
  ["1-3","detail-1-3.jpg","未提交","default",""],
  ["1-4","detail-1-4.jpg","已通过","success",""]
];
pages["booth-green"] = () => shell(`
  <div class="alert warning">整体审核状态：${badge("需修改","danger")} 当前 8 个画面中，4 个已通过、2 个审核中、1 个被驳回、1 个未提交。</div>
  <div class="card">
    <div class="tabs"><button class="tab-btn active" data-tab="artwork">画面文件</button><button class="tab-btn" data-tab="effect">效果图确认</button><button class="tab-btn" data-tab="history">修改记录</button></div>
    <div class="tab-panel active" id="tab-artwork">
      <div class="grid grid-4">${greenUploads.map(([name,file,state,type,reason])=>`
        <div class="upload-card"><div class="upload-name"><span>画面 ${name}</span>${badge(state,type)}</div>
        ${state==="未提交"?uploadZone("上传画面 "+name):fileRow(file,state,type)}
        ${reason?`<div class="reject-tip">${reason}</div><button class="btn danger small js-modal" style="margin-top:10px" data-title="提交修改申请" data-body="请说明本次画面修改内容，审核通过后可上传替换文件。">申请修改</button>`:""}</div>`).join("")}
      </div>
      <div class="form-actions">${button("保存草稿","")}${button("提交全部画面","primary",'class="btn primary js-confirm" data-message="画面文件已提交审核"')}</div>
    </div>
    <div class="tab-panel" id="tab-effect">
      <div class="alert info">以下为搭建商根据已审核画面制作的展位效果图，请确认文字、图片和整体布局。</div>
      <div class="image-grid">${[1,2,3].map(i=>`<div class="effect-card"><img src="assets/green-booth.png" alt="效果图 ${i}"><div class="effect-info"><strong>效果图 ${i}</strong>${badge("待确认","warning")}</div></div>`).join("")}</div>
      <div class="form-actions">${button("反馈错误","danger",'class="btn danger js-modal" data-title="反馈效果图错误" data-body="请描述错误位置及正确内容，可由设计人员根据反馈重新出图。"')}${button("确认正确","success",'class="btn success js-confirm" data-message="3 张效果图已确认正确"')}</div>
    </div>
    <div class="tab-panel" id="tab-history">
      <div class="timeline"><div class="timeline-item fail"><span class="timeline-dot"></span><div class="timeline-title">画面 2-反审核驳回</div><div class="timeline-time">2026-07-21 14:32</div><div class="timeline-text">存在绝对化宣传用语，需重新修改。</div></div><div class="timeline-item done"><span class="timeline-dot"></span><div class="timeline-title">第一批画面提交审核</div><div class="timeline-time">2026-07-20 09:18</div></div></div>
    </div>
  </div>`);

pages["booth-raw"] = () => shell(`
  <div class="grid grid-4">
    <div class="card stat-card"><div class="stat-label">总体审核状态</div><div class="stat-value" style="font-size:22px">资料补正中</div><div class="stat-foot">${badge("已驳回","danger")}</div></div>
    <div class="card stat-card"><div class="stat-label">搭建商资质</div><div class="stat-value">2/2</div><div class="stat-foot">全部通过</div></div>
    <div class="card stat-card"><div class="stat-label">工程图纸</div><div class="stat-value">1/2</div><div class="stat-foot">电路图需修改</div></div>
    <div class="card stat-card"><div class="stat-label">安全文件</div><div class="stat-value">1/1</div><div class="stat-foot">审核通过</div></div>
  </div>
  <div class="card"><div class="card-title">搭建申报资料</div>
    <div class="grid grid-2" style="margin-top:16px">
      <div class="upload-card"><div class="upload-name"><span>搭建商营业执照及资质</span>${badge("已通过","success")}</div>${fileRow("远景会展搭建商资质.pdf")}</div>
      <div class="upload-card"><div class="upload-name"><span>展位平面图</span>${badge("已通过","success")}</div>${fileRow("A3-218_平面图_v2.pdf")}</div>
      <div class="upload-card"><div class="upload-name"><span>电路图</span>${badge("已驳回","danger")}</div>${uploadZone("重新上传电路图")}<div class="reject-tip">总功率标注与用电申请不一致，请补充配电箱位置和回路编号。</div></div>
      <div class="upload-card"><div class="upload-name"><span>安全搭建承诺书</span>${badge("已通过","success")}</div>${fileRow("安全搭建承诺书_盖章.pdf")}</div>
    </div>
    <div class="form-actions">${button("提交补充资料","primary",'class="btn primary js-confirm" data-message="补充资料已提交审核"')}</div>
  </div>`);

pages.notice = () => shell(`
  <div class="toolbar"><div></div><div class="toolbar-right">${button("下载 PDF","primary",'class="btn primary js-download"')}${button("打印","",'class="btn js-confirm" data-message="已调起模拟打印任务"')}</div></div>
  <div class="notice-paper"><h2>2026 中国国际农业科技展<br>参展商报到通知书</h2><div class="notice-no">通知书编号：CAATE-2026-A3-0218</div>
    <div class="notice-row"><strong>参展企业</strong><span>山东华丰农业科技有限公司</span></div>
    <div class="notice-row"><strong>展位信息</strong><span>A3-218 · 绿搭展位 · 36㎡</span></div>
    <div class="notice-row"><strong>报到时间</strong><span>2026 年 9 月 16 日 09:00—17:00</span></div>
    <div class="notice-row"><strong>报到地点</strong><span>上海国家会展中心 3H 馆参展商服务台</span></div>
    <div class="notice-row"><strong>布展时间</strong><span>2026 年 9 月 16—17 日</span></div>
    <div class="notice-body"><strong>报到流程</strong><ol><li>携带本通知书及企业有效证件至参展商服务台核验。</li><li>领取展商证、布展证及现场服务资料。</li><li>核对展位位置与基础设施，办理用电、网络等增值服务。</li><li>完成安全检查后方可进馆布展。</li></ol><p class="text-muted">请妥善保管本通知书。如有疑问，请联系组委会：021-8888 6600。</p></div>
  </div>`);

pages.progress = () => shell(`
  <div class="card"><div class="card-head"><div><div class="card-title">整体参展进度</div><div class="card-sub">预计完成时间：2026 年 8 月 15 日</div></div><strong class="text-success">72%</strong></div>
    <div class="steps">${[["基础信息","done","✓"],["资质审核","done","✓"],["绿搭/光地","current","3"],["通知书","","4"],["证件","","5"]].map(x=>`<div class="step ${x[1]}"><div class="step-icon">${x[2]}</div><div class="step-name">${x[0]}</div></div>`).join("")}</div>
  </div>
  <div class="card"><div class="card-title">事项明细</div>
    <div class="table-wrap"><table><thead><tr><th>流程事项</th><th>完成度</th><th>当前状态</th><th>更新时间</th><th>操作</th></tr></thead><tbody>
      <tr><td>基础信息确认</td><td>${progress("","100","success")}</td><td>${badge("已确认","success")}</td><td>07-12 10:20</td><td><a href="basic-info.html" class="link">查看</a></td></tr>
      <tr><td>企业及展品资质</td><td>${progress("","100","success")}</td><td>${badge("已通过","success")}</td><td>07-18 16:42</td><td><a href="product-info.html" class="link">查看</a></td></tr>
      <tr><td>绿搭画面审核</td><td>${progress("","63")}</td><td>${badge("需修改","danger")}</td><td>07-21 14:32</td><td><a href="booth-green.html" class="link">去修改</a></td></tr>
      <tr><td>报到通知书</td><td>${progress("","100","success")}</td><td>${badge("已生成","success")}</td><td>07-22 09:00</td><td><a href="notice.html" class="link">下载</a></td></tr>
      <tr><td>人员证件注册</td><td>${progress("","50")}</td><td>${badge("进行中","warning")}</td><td>07-22 11:10</td><td><a href="mini-cert.html" class="link">继续注册</a></td></tr>
    </tbody></table></div>
  </div>`);

pages.message = () => shell(`
  <div class="card"><div class="tabs"><button class="tab-btn active" data-tab="allmsg">全部消息</button><button class="tab-btn" data-tab="reviewmsg">审核通知</button><button class="tab-btn" data-tab="deadlinemsg">截止提醒</button></div>
    <div class="tab-panel active" id="tab-allmsg"><ul class="list">
      <li class="list-item"><div class="list-main"><span class="dot-icon" style="background:#ffebec;color:#e5484d">!</span><div><div class="list-title">绿搭画面“2-反”审核未通过</div><div class="list-desc">存在绝对化宣传用语，请修改后于 7 月 26 日前重新提交。</div><div class="card-sub">今天 14:32</div></div></div>${badge("审核失败","danger")}</li>
      <li class="list-item"><div class="list-main"><span class="dot-icon">✎</span><div><div class="list-title">基础信息修改提醒</div><div class="list-desc">联系人电话已由管理员退回，请核对后重新确认。</div><div class="card-sub">昨天 09:21</div></div></div>${badge("修改提醒","warning")}</li>
      <li class="list-item"><div class="list-main"><span class="dot-icon" style="background:#fff4dd;color:#b86e00">⌛</span><div><div class="list-title">证件注册截止提醒</div><div class="list-desc">距人员证件注册截止还有 8 天，当前完成 3/6 人。</div><div class="card-sub">07-20 10:00</div></div></div>${badge("截止提醒","warning")}</li>
      <li class="list-item"><div class="list-main"><span class="dot-icon" style="background:#e8f7ef;color:#18a058">✓</span><div><div class="list-title">报到通知书已生成</div><div class="list-desc">可前往通知书页面查看和下载 PDF 文件。</div><div class="card-sub">07-19 16:08</div></div></div>${badge("系统通知","info")}</li>
    </ul></div>
    <div class="tab-panel" id="tab-reviewmsg"><div class="empty"><div class="empty-icon">✉</div>已展示全部审核通知</div></div>
    <div class="tab-panel" id="tab-deadlinemsg"><div class="alert warning">人员证件注册将于 2026 年 7 月 30 日 18:00 截止。</div></div>
  </div>`);

pages["admin-dashboard"] = () => shell(`
  <div class="grid grid-4">
    <div class="card stat-card"><span class="stat-icon">♙</span><div class="stat-label">参展企业</div><div class="stat-value">386</div><div class="stat-foot text-success">↑ 12.4% 较上届</div></div>
    <div class="card stat-card"><span class="stat-icon">✓</span><div class="stat-label">综合审核通过率</div><div class="stat-value">82.6%</div><div class="stat-foot">1,248 项已完成</div></div>
    <div class="card stat-card"><span class="stat-icon">⌛</span><div class="stat-label">待审核事项</div><div class="stat-value">126</div><div class="stat-foot">绿搭画面占 58%</div></div>
    <div class="card stat-card"><span class="stat-icon" style="color:#e5484d;background:#ffebec">!</span><div class="stat-label">异常数据</div><div class="stat-value">17</div><div class="stat-foot text-danger">5 项临近截止</div></div>
  </div>
  <div class="grid grid-2" style="margin-top:16px">
    <div class="card"><div class="card-head"><div class="card-title">各流程完成情况</div><span class="text-muted">实时统计</span></div>${progress("基础信息确认",94,"success")}${progress("企业资质审核",83)}${progress("绿搭 / 光地审核",68)}${progress("通知书生成",72)}${progress("人员证件注册",55)}</div>
    <div class="card"><div class="card-head"><div class="card-title">今日待处理</div><a class="link" href="admin-review-green.html">进入审核台</a></div>
      <ul class="list"><li class="list-item"><span>绿搭画面待审核</span><strong>73</strong></li><li class="list-item"><span>光地图纸待审核</span><strong>21</strong></li><li class="list-item"><span>企业资料待审核</span><strong>18</strong></li><li class="list-item"><span>楣板修改申请</span><strong>14</strong></li></ul>
    </div>
  </div>
  <div class="card"><div class="card-head"><div class="card-title">异常企业预警</div>${badge("需关注","danger")}</div>
    <div class="table-wrap"><table><thead><tr><th>企业</th><th>展位</th><th>异常事项</th><th>距离截止</th><th>负责人</th><th>操作</th></tr></thead><tbody>
      <tr><td>华丰农业科技</td><td>A3-218</td><td>绿搭画面被驳回</td><td class="text-danger">2 天</td><td>李悦</td><td><a class="link" href="admin-review-green.html">处理</a></td></tr>
      <tr><td>中科肥业</td><td>B1-066</td><td>证件注册 0%</td><td class="text-danger">3 天</td><td>王晨</td><td><span class="link js-confirm" data-message="已发送催办通知">催办</span></td></tr>
    </tbody></table></div>
  </div>`,true);

pages["admin-exhibition"] = () => shell(`
  <div class="toolbar"><div class="toolbar-left"><select class="select"><option>2026 中国国际农业科技展</option><option>2025 农业科技创新展</option></select>${badge("进行中","success")}</div>${button("+ 创建展会","primary",'class="btn primary js-modal" data-title="创建新展会" data-body="填写展会名称、举办时间及场馆信息后即可创建新的展务项目。"')}</div>
  <div class="card"><div class="tabs"><button class="tab-btn active" data-tab="basecfg">基础配置</button><button class="tab-btn" data-tab="boothcfg">展位类型</button><button class="tab-btn" data-tab="deadlinecfg">截止时间</button></div>
    <div class="tab-panel active" id="tab-basecfg"><div class="form-grid"><div class="field"><label>展会名称</label><input class="input" value="2026 中国国际农业科技展"></div><div class="field"><label>展会地点</label><input class="input" value="上海国家会展中心"></div><div class="field"><label>开展日期</label><input class="input" type="date" value="2026-09-18"></div><div class="field"><label>结束日期</label><input class="input" type="date" value="2026-09-20"></div></div></div>
    <div class="tab-panel" id="tab-boothcfg"><div class="table-wrap"><table><thead><tr><th>类型</th><th>规格</th><th>企业数</th><th>资料流程</th><th>状态</th></tr></thead><tbody><tr><td>标准展位</td><td>3m × 3m</td><td>196</td><td>楣板 + 证件</td><td>${badge("启用","success")}</td></tr><tr><td>绿搭展位</td><td>18—72㎡</td><td>132</td><td>画面 + 效果图</td><td>${badge("启用","success")}</td></tr><tr><td>光地展位</td><td>36㎡起</td><td>58</td><td>搭建商 + 图纸 + 安全</td><td>${badge("启用","success")}</td></tr></tbody></table></div></div>
    <div class="tab-panel" id="tab-deadlinecfg"><div class="form-grid"><div class="field"><label>基础信息截止</label><input class="input" type="datetime-local" value="2026-07-15T18:00"></div><div class="field"><label>资质资料截止</label><input class="input" type="datetime-local" value="2026-07-22T18:00"></div><div class="field"><label>绿搭 / 光地截止</label><input class="input" type="datetime-local" value="2026-07-30T18:00"></div><div class="field"><label>证件注册截止</label><input class="input" type="datetime-local" value="2026-08-15T18:00"></div></div></div>
    <div class="form-actions">${button("保存配置","primary",'class="btn primary js-confirm" data-message="展会配置已保存"')}</div>
  </div>`,true);

pages["admin-enterprise"] = () => shell(`
  <div class="card"><div class="toolbar"><div class="toolbar-left"><input class="input search" placeholder="搜索企业名称 / 展位号"><select class="select"><option>全部展位类型</option><option>标准展位</option><option>绿搭</option><option>光地</option></select><select class="select"><option>全部状态</option><option>资料齐全</option><option>待完善</option></select></div><div class="toolbar-right">${button("导入企业","")}${button("+ 新增企业","primary",'class="btn primary js-modal" data-title="新增参展企业" data-body="录入企业基本信息后，可继续分配展位并发送账号邀请。"')}</div></div>
    <div class="table-wrap"><table><thead><tr><th><input type="checkbox"></th><th>企业名称</th><th>联系人</th><th>展位号</th><th>展位类型</th><th>楣板信息</th><th>资料状态</th><th>操作</th></tr></thead><tbody>
      <tr><td><input type="checkbox"></td><td>山东华丰农业科技有限公司</td><td>张敏<br><span class="text-muted">138****2219</span></td><td><strong>A3-218</strong></td><td>绿搭</td><td>山东华丰农业科技有限公司</td><td>${badge("待修改","danger")}</td><td class="table-actions"><span class="link js-modal" data-title="分配展位" data-body="当前展位 A3-218，可选择其他空闲展位重新分配。">分配展位</span><span class="link">编辑</span></td></tr>
      <tr><td><input type="checkbox"></td><td>中科新型肥业有限公司</td><td>刘浩</td><td>B1-066</td><td>标准展位</td><td>中科新型肥业</td><td>${badge("资料齐全","success")}</td><td class="table-actions"><span class="link">详情</span><span class="link">编辑楣板</span></td></tr>
      <tr><td><input type="checkbox"></td><td>禾润生物技术有限公司</td><td>孙晴</td><td>C2-106</td><td>光地</td><td>禾润生物科技</td><td>${badge("审核中","warning")}</td><td class="table-actions"><span class="link">详情</span><span class="link">编辑</span></td></tr>
      <tr><td><input type="checkbox"></td><td>丰源智慧农业股份有限公司</td><td>周宁</td><td>A2-088</td><td>绿搭</td><td>丰源智慧农业</td><td>${badge("资料齐全","success")}</td><td class="table-actions"><span class="link">详情</span><span class="link">编辑</span></td></tr>
    </tbody></table></div>
  </div>`,true);

pages["admin-review-green"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">待审核图片</div><div class="stat-value">73</div></div><div class="card stat-card"><div class="stat-label">今日已审核</div><div class="stat-value">48</div></div><div class="card stat-card"><div class="stat-label">驳回图片</div><div class="stat-value">9</div></div><div class="card stat-card"><div class="stat-label">平均耗时</div><div class="stat-value">3.2h</div></div></div>
  <div class="card"><div class="toolbar"><div class="toolbar-left"><input class="input search" placeholder="企业 / 展位号"><select class="select"><option>待审核</option><option>已通过</option><option>已驳回</option></select></div><span class="text-muted">共 73 条</span></div>
    <div class="table-wrap"><table><thead><tr><th>预览</th><th>企业 / 展位</th><th>画面编号</th><th>文件信息</th><th>智能检查</th><th>提交时间</th><th>操作</th></tr></thead><tbody>
      <tr><td><img class="review-thumb" src="assets/green-booth.png"></td><td>华丰农业科技<br><span class="text-muted">A3-218</span></td><td><strong>2-反</strong></td><td>panel-2-back.pdf<br><span class="text-muted">18.6MB · 300dpi</span></td><td>${badge("疑似违禁词","danger")}<br><span class="word-flag">全国第一</span></td><td>07-21 13:48</td><td class="table-actions"><button class="btn success small js-status">通过</button><button class="btn danger small js-modal" data-title="驳回画面 2-反" data-body="请选择驳回原因并填写修改要求，系统将自动通知企业联系人。">驳回</button></td></tr>
      <tr><td><img class="review-thumb" src="assets/green-booth.png"></td><td>丰源智慧农业<br><span class="text-muted">A2-088</span></td><td><strong>1-正</strong></td><td>front-final.jpg<br><span class="text-muted">12.2MB · 300dpi</span></td><td>${badge("检查通过","success")}</td><td>07-21 13:30</td><td class="table-actions"><button class="btn success small js-status">通过</button><button class="btn danger small js-modal" data-title="驳回画面" data-body="填写驳回原因后将通知企业修改。">驳回</button></td></tr>
      <tr><td><img class="review-thumb" src="assets/green-booth.png"></td><td>绿野植保<br><span class="text-muted">B2-109</span></td><td><strong>1-2</strong></td><td>detail-1-2.png<br><span class="text-muted">8.4MB · 150dpi</span></td><td>${badge("分辨率偏低","warning")}</td><td>07-21 12:51</td><td class="table-actions"><button class="btn success small js-status">通过</button><button class="btn danger small js-modal" data-title="驳回画面 1-2" data-body="建议上传不低于 300dpi 的印刷文件。">驳回</button></td></tr>
    </tbody></table></div>
  </div>`,true);

pages["admin-review-raw"] = () => shell(`
  <div class="card"><div class="tabs"><button class="tab-btn active" data-tab="rawall">全部待审</button><button class="tab-btn" data-tab="rawdrawing">工程图纸</button><button class="tab-btn" data-tab="rawsafe">安全文件</button></div>
    <div class="tab-panel active" id="tab-rawall"><div class="table-wrap"><table><thead><tr><th>企业 / 展位</th><th>资料类型</th><th>文件</th><th>搭建商</th><th>风险提示</th><th>状态</th><th>操作</th></tr></thead><tbody>
      <tr><td>禾润生物技术<br><span class="text-muted">C2-106 · 54㎡</span></td><td>展位平面图</td><td><span class="link">C2-106_平面图.pdf</span></td><td>远景会展工程</td><td>${badge("无异常","success")}</td><td>${badge("待审核","warning")}</td><td class="table-actions"><button class="btn success small js-status">通过</button><button class="btn danger small js-modal" data-title="驳回图纸" data-body="请填写图纸不符合搭建规范的具体位置。">驳回</button></td></tr>
      <tr><td>农科智造<br><span class="text-muted">D1-016 · 72㎡</span></td><td>电路图</td><td><span class="link">D1-016_电路_v1.pdf</span></td><td>创展空间</td><td>${badge("功率不一致","danger")}</td><td>${badge("待审核","warning")}</td><td class="table-actions"><button class="btn success small js-status">通过</button><button class="btn danger small js-modal" data-title="驳回电路图" data-body="用电申请为 12kW，图纸标注为 18kW，请企业核实。">驳回</button></td></tr>
      <tr><td>丰登种业<br><span class="text-muted">A1-028 · 36㎡</span></td><td>安全承诺书</td><td><span class="link">安全承诺书.pdf</span></td><td>嘉合展览</td><td>${badge("缺少骑缝章","warning")}</td><td>${badge("待审核","warning")}</td><td class="table-actions"><button class="btn success small js-status">通过</button><button class="btn danger small js-modal" data-title="驳回安全文件" data-body="文件缺少骑缝章，请补盖后重新扫描上传。">驳回</button></td></tr>
    </tbody></table></div></div>
    <div class="tab-panel" id="tab-rawdrawing"><div class="empty"><div class="empty-icon">◇</div>工程图纸筛选视图</div></div><div class="tab-panel" id="tab-rawsafe"><div class="empty"><div class="empty-icon">✓</div>安全文件筛选视图</div></div>
  </div>`,true);

pages["admin-notice"] = () => shell(`
  <div class="grid grid-2">
    <div class="card"><div class="card-head"><div><div class="card-title">通知书模板编辑</div><div class="card-sub">变量将在生成时自动替换</div></div>${badge("当前模板","success")}</div>
      <div class="field"><label>模板标题</label><input class="input" value="{{展会名称}}参展商报到通知书"></div>
      <div class="field" style="margin-top:15px"><label>正文内容</label><textarea class="textarea" style="min-height:300px">尊敬的 {{企业名称}}：

感谢参加 {{展会名称}}。贵司展位号为 {{展位号}}，请于 {{报到时间}} 前往 {{报到地点}} 办理报到手续。

请携带本通知书及企业有效证件，完成证件领取与展位核验。</textarea></div>
      <div class="form-actions">${button("预览模板","")}${button("保存模板","primary",'class="btn primary js-confirm" data-message="通知书模板已保存"')}</div>
    </div>
    <div class="card"><div class="card-head"><div class="card-title">批量生成</div>${badge("386 家企业","info")}</div><div class="alert info">当前有 278 家企业已满足通知书生成条件，108 家仍缺少必要信息。</div>
      <div class="field"><label>生成范围</label><select class="select"><option>全部符合条件企业（278）</option><option>选中的企业</option><option>指定展馆</option></select></div>
      <button class="btn primary block js-modal" style="margin-top:16px" data-title="批量生成 PDF" data-body="即将为 278 家企业生成报到通知书，预计需要 1—2 分钟。">生成 PDF</button>
      <div class="card-title" style="margin-top:28px">最近下载记录</div><ul class="list"><li class="list-item"><div><div class="list-title">华丰农业科技</div><div class="list-desc">CAATE-2026-A3-0218.pdf</div></div><span class="text-muted">07-22 10:31</span></li><li class="list-item"><div><div class="list-title">中科新型肥业</div><div class="list-desc">CAATE-2026-B1-0066.pdf</div></div><span class="text-muted">07-22 09:46</span></li></ul>
    </div>
  </div>`,true);

pages["admin-message"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">今日发送</div><div class="stat-value">1,286</div></div><div class="card stat-card"><div class="stat-label">短信送达率</div><div class="stat-value">98.7%</div></div><div class="card stat-card"><div class="stat-label">站内信已读率</div><div class="stat-value">76.4%</div></div><div class="card stat-card"><div class="stat-label">发送失败</div><div class="stat-value">12</div></div></div>
  <div class="card"><div class="toolbar"><div class="tabs" style="margin:0"><button class="tab-btn active" data-tab="sms">短信 / 站内信</button><button class="tab-btn" data-tab="auto">自动通知记录</button></div>${button("+ 新建消息","primary",'class="btn primary js-modal" data-title="新建消息" data-body="选择短信或站内信渠道、接收企业及消息模板后即可发送。"')}</div>
    <div class="tab-panel active" id="tab-sms"><div class="table-wrap"><table><thead><tr><th>消息标题</th><th>渠道</th><th>接收对象</th><th>发送时间</th><th>送达 / 已读</th><th>状态</th></tr></thead><tbody><tr><td>绿搭资料截止提醒</td><td>短信 + 站内信</td><td>132 家绿搭企业</td><td>07-22 10:00</td><td>130 / 98</td><td>${badge("发送完成","success")}</td></tr><tr><td>证件注册开放通知</td><td>站内信</td><td>全部企业</td><td>07-20 09:00</td><td>386 / 296</td><td>${badge("发送完成","success")}</td></tr></tbody></table></div></div>
    <div class="tab-panel" id="tab-auto"><div class="table-wrap"><table><thead><tr><th>触发规则</th><th>渠道</th><th>最近执行</th><th>通知数量</th><th>状态</th></tr></thead><tbody><tr><td>资料被驳回时即时通知</td><td>短信 + 站内信</td><td>今天 14:32</td><td>9</td><td>${badge("运行中","success")}</td></tr><tr><td>截止前 3 天提醒</td><td>短信</td><td>今天 10:00</td><td>132</td><td>${badge("运行中","success")}</td></tr></tbody></table></div></div>
  </div>`,true);

pages["admin-cert"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">应注册人数</div><div class="stat-value">2,316</div></div><div class="card stat-card"><div class="stat-label">已提交</div><div class="stat-value">1,748</div></div><div class="card stat-card"><div class="stat-label">审核通过</div><div class="stat-value">1,596</div></div><div class="card stat-card"><div class="stat-label">待补充</div><div class="stat-value">152</div></div></div>
  <div class="card"><div class="toolbar"><div class="toolbar-left"><input class="input search" placeholder="姓名 / 企业 / 手机号"><select class="select"><option>全部注册状态</option><option>已通过</option><option>审核中</option><option>需补充</option></select></div>${button("导出制证名单","primary",'class="btn primary js-download"')}</div>
    <div class="table-wrap"><table><thead><tr><th>姓名</th><th>企业</th><th>证件类型</th><th>手机号</th><th>身份证明</th><th>注册状态</th><th>提交时间</th><th>操作</th></tr></thead><tbody>
      <tr><td>张敏</td><td>华丰农业科技</td><td>参展商证</td><td>138****2219</td><td>${badge("已上传","success")}</td><td>${badge("已通过","success")}</td><td>07-21 10:18</td><td><span class="link">查看</span></td></tr>
      <tr><td>王成</td><td>华丰农业科技</td><td>参展商证</td><td>186****0832</td><td>${badge("已上传","success")}</td><td>${badge("审核中","warning")}</td><td>07-21 10:22</td><td><span class="link">审核</span></td></tr>
      <tr><td>刘浩</td><td>中科新型肥业</td><td>布展证</td><td>139****5206</td><td>${badge("照片模糊","danger")}</td><td>${badge("需补充","danger")}</td><td>07-20 16:44</td><td><span class="link js-confirm" data-message="已发送补充提醒">提醒</span></td></tr>
    </tbody></table></div>
  </div>`,true);

pages["mini-home"] = () => mobileShell(`
  <div class="mini-hero"><p>我的展会</p><h2>2026 中国国际农业科技展</h2><p>2026.09.18—09.20 · 上海</p><div class="mini-data"><div>展位号<strong>A3-218</strong></div><div>展位类型<strong>绿搭</strong></div></div></div>
  <div class="card"><div class="card-head"><div class="card-title">当前进度</div><strong class="text-success">72%</strong></div><div class="progress"><span style="width:72%"></span></div><div class="list-item"><span class="text-muted">当前事项</span>${badge("绿搭画面需修改","danger")}</div><a href="mini-progress.html" class="btn soft block">查看完整进度</a></div>
  <div class="card"><div class="card-title" style="margin-bottom:15px">快捷服务</div><div class="quick-grid"><a href="mini-progress.html"><div class="quick-icon">◉</div>参展进度</a><a href="mini-cert.html"><div class="quick-icon">♧</div>证件注册</a><a href="mini-notice.html"><div class="quick-icon">▧</div>通知书</a><a href="mini-message.html"><div class="quick-icon">✉</div>消息中心</a></div></div>
  <div class="card"><div class="card-head"><div class="card-title">重要提醒</div>${badge("1 条待处理","danger")}</div><div class="mini-message"><div class="mini-message-icon">!</div><div><strong>画面 2-反审核未通过</strong><div class="list-desc" style="margin-top:5px">存在绝对化宣传用语，请修改后重新提交。</div><div class="mini-message-time">今天 14:32</div></div></div></div>
`,"home","展务服务");

pages["mini-progress"] = () => mobileShell(`
  <div class="card"><div class="card-head"><div><div class="card-title">参展总进度</div><div class="card-sub">5 个流程 · 已完成 2 项</div></div><strong class="text-success">72%</strong></div><div class="progress"><span style="width:72%"></span></div></div>
  <div class="card"><div class="card-title" style="margin-bottom:18px">流程状态</div><div class="timeline">
    <div class="timeline-item done"><span class="timeline-dot"></span><div class="timeline-title">基础信息 ${badge("已确认","success")}</div><div class="timeline-time">2026-07-12 10:20</div><div class="timeline-text">企业及楣板信息已确认。</div></div>
    <div class="timeline-item done"><span class="timeline-dot"></span><div class="timeline-title">资质审核 ${badge("已通过","success")}</div><div class="timeline-time">2026-07-18 16:42</div></div>
    <div class="timeline-item fail"><span class="timeline-dot"></span><div class="timeline-title">绿搭画面 ${badge("已驳回","danger")}</div><div class="timeline-time">2026-07-21 14:32</div><div class="reject-tip">驳回原因：画面 2-反含“全国第一”绝对化宣传用语。</div><button class="btn danger small" style="margin-top:10px">去修改</button></div>
    <div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-title">报到通知书 ${badge("已生成","info")}</div><div class="timeline-time">2026-07-22 09:00</div></div>
    <div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-title">人员证件 ${badge("进行中","warning")}</div><div class="timeline-time">已注册 3 / 6 人</div></div>
  </div></div>
`,"progress","参展进度");

pages["mini-message"] = () => mobileShell(`
  <div class="tabs"><button class="tab-btn active" data-tab="miniall">全部</button><button class="tab-btn" data-tab="minireview">审核</button><button class="tab-btn" data-tab="minisys">系统</button></div>
  <div class="tab-panel active" id="tab-miniall">
    <div class="card"><div class="mini-message"><div class="mini-message-icon">!</div><div><strong>绿搭画面审核未通过</strong><div class="list-desc" style="margin-top:6px">画面 2-反存在绝对化宣传用语，请修改后重新提交。</div><div class="mini-message-time">今天 14:32</div></div></div></div>
    <div class="card"><div class="mini-message"><div class="mini-message-icon" style="background:#fff4dd;color:#b86e00">⌛</div><div><strong>证件注册截止提醒</strong><div class="list-desc" style="margin-top:6px">距截止还有 8 天，当前完成 3/6 人。</div><div class="mini-message-time">昨天 10:00</div></div></div></div>
    <div class="card"><div class="mini-message"><div class="mini-message-icon" style="background:#e8f7ef;color:#18a058">✓</div><div><strong>通知书已生成</strong><div class="list-desc" style="margin-top:6px">您的参展报到通知书已生成，可在线查看。</div><div class="mini-message-time">07-19 16:08</div></div></div></div>
  </div>
  <div class="tab-panel" id="tab-minireview"><div class="card empty">暂无更多审核消息</div></div><div class="tab-panel" id="tab-minisys"><div class="card empty">暂无更多系统消息</div></div>
`,"message","消息中心");

pages["mini-cert"] = () => mobileShell(`
  <div class="card"><div class="card-head"><div><div class="card-title">人员证件注册</div><div class="card-sub">已注册 3 / 6 人</div></div>${badge("进行中","warning")}</div><div class="progress"><span style="width:50%"></span></div></div>
  <div class="card mini-form"><div class="card-title" style="margin-bottom:16px">新增人员</div>
    <div class="field"><label>姓名</label><input class="input" placeholder="请输入真实姓名"></div>
    <div class="field"><label>手机号码</label><input class="input" placeholder="请输入手机号码"></div>
    <div class="field"><label>证件类型</label><select class="select"><option>参展商证</option><option>布展证</option><option>撤展证</option></select></div>
    <div class="field"><label>身份证明</label>${uploadZone("上传身份证正面")}</div>
    <button class="btn primary block js-confirm" data-message="人员信息已提交审核">提交注册</button>
  </div>
  <div class="card"><div class="card-title">已注册人员</div><div class="list-item"><div><strong>张敏</strong><div class="list-desc">参展商证 · 138****2219</div></div>${badge("已通过","success")}</div><div class="list-item"><div><strong>王成</strong><div class="list-desc">参展商证 · 186****0832</div></div>${badge("审核中","warning")}</div></div>
`,"cert","证件注册");

pages["mini-notice"] = () => mobileShell(`
  <div class="card" style="text-align:center"><div style="font-size:38px;margin-bottom:8px">▧</div><div class="card-title">参展商报到通知书</div><div class="card-sub">CAATE-2026-A3-0218</div>${badge("已生成","success")}</div>
  <div class="card"><div class="list-item"><span class="text-muted">展会名称</span><strong style="text-align:right">2026 中国国际<br>农业科技展</strong></div><div class="list-item"><span class="text-muted">参展企业</span><strong style="text-align:right">山东华丰农业<br>科技有限公司</strong></div><div class="list-item"><span class="text-muted">展位号</span><strong>A3-218</strong></div><div class="list-item"><span class="text-muted">报到时间</span><strong style="text-align:right">09月16日<br>09:00—17:00</strong></div><div class="list-item"><span class="text-muted">报到地点</span><strong style="text-align:right">3H 馆参展商服务台</strong></div></div>
  <div class="card"><div class="card-title">报到流程</div><ol style="padding-left:20px;line-height:2;color:#667085"><li>出示电子通知书及企业证件</li><li>核验信息并领取参展证件</li><li>确认展位并办理现场服务</li><li>完成安全检查后进馆布展</li></ol></div>
  <button class="btn primary block js-download">下载 PDF 通知书</button>
`,"","报到通知书");

/* 2026-06 information architecture revision */
enterpriseNav.splice(1, 3,
  ["basic-info.html","basic-info","▤","参展资料"]
);
enterpriseNav.splice(enterpriseNav.findIndex(item => item[1] === "notice"), 1);
adminNav.splice(2, 1,
  ["admin-enterprise.html","admin-enterprise","♙","展商管理"]
);
adminNav.push(["admin-settings.html","admin-settings","⚙","系统设置"]);

meta["basic-info"] = ["参展资料","集中维护企业基础信息、资质档案与宣传物料"];
meta["product-info"] = meta["basic-info"];
meta["brand-info"] = meta["basic-info"];
meta["booth-green"] = ["绿搭管理","在线选择方案规格，按模板提交设计图并处理改稿"];
meta["booth-raw"] = ["光地管理","确认企业名片并提交搭建申报资料"];
meta["admin-enterprise"] = ["展商管理","同步展商数据并维护资料、展位和楣板信息"];
meta["admin-green-detail"] = ["绿搭业务详情","查看单个展商的方案确认、设计稿审核和通知书状态"];
meta["admin-raw-detail"] = ["光地业务详情","查看单个展商的名片确认、搭建材料和通知书状态"];
meta["admin-settings"] = ["系统设置","配置角色权限、违规极限词与业务审核流"];

const combinedInfoPage = () => shell(`
  <div class="card">
    <div class="card-head"><div><div class="card-title">参展资料完整度</div><div class="card-sub">三个资料分类统一提交、统一跟踪审核</div></div><strong class="text-success">86%</strong></div>
    <div class="progress"><span style="width:86%"></span></div>
  </div>
  <div class="card">
    <div class="tabs"><button class="tab-btn active" data-tab="companybase">企业基础信息</button><button class="tab-btn" data-tab="qualification">企业及展品</button><button class="tab-btn" data-tab="promotion">宣传资料</button></div>
    <div class="tab-panel active" id="tab-companybase">
      <div class="card-head"><div><div class="card-title">企业基础信息</div><div class="card-sub">用于会刊、展位名片及通知书生成</div></div>${badge("已确认","success")}</div>
      <div class="form-grid">
        <div class="field"><label>企业名称</label><input class="input" value="山东华丰农业科技有限公司"></div>
        <div class="field"><label>联系人</label><input class="input" value="张敏"></div>
        <div class="field"><label>联系电话</label><input class="input" value="138 6608 2219"></div>
        <div class="field"><label>楣板 / 企业名片名称</label><input class="input" value="山东华丰农业科技有限公司"></div>
      </div>
    </div>
    <div class="tab-panel" id="tab-qualification">
      <div class="field"><label>产品品类</label><div class="check-row"><label class="check"><input type="checkbox" checked> 农药制剂</label><label class="check"><input type="checkbox" checked> 新型肥料</label><label class="check"><input type="checkbox" checked> 生物技术</label><label class="check"><input type="checkbox"> 农业机械</label></div></div>
      <div class="grid grid-3" style="margin-top:18px">
        <div class="upload-card"><div class="upload-name"><span>营业执照</span>${badge("已通过","success")}</div>${fileRow("营业执照_副本.pdf")}</div>
        <div class="upload-card"><div class="upload-name"><span>农药登记证</span>${badge("已通过","success")}</div>${fileRow("农药登记证_PD20260188.pdf")}</div>
        <div class="upload-card"><div class="upload-name"><span>肥料登记证</span>${badge("审核中","warning")}</div>${fileRow("肥料登记证_鲁农肥.pdf","审核中","warning")}</div>
        <div class="upload-card"><div class="upload-name"><span>生产许可证</span>${badge("已通过","success")}</div>${fileRow("生产许可证_2026.pdf")}</div>
        <div class="upload-card"><div class="upload-name"><span>检测报告</span>${badge("需补充","danger")}</div>${uploadZone("重新上传检测报告")}<div class="reject-tip">请上传带 CMA 章的完整报告。</div></div>
      </div>
    </div>
    <div class="tab-panel" id="tab-promotion">
      <div class="grid grid-2">
        <div><div class="card-title" style="margin-bottom:12px">企业 LOGO</div>${uploadZone("替换企业 LOGO")}${fileRow("huafeng-logo-print.png")}</div>
        <div><div class="card-title" style="margin-bottom:12px">会刊资料</div>${uploadZone("上传会刊宣传页")}${fileRow("企业会刊宣传页.pdf","审核中","warning")}</div>
      </div>
      <div class="field" style="margin-top:18px"><label>企业简介</label><textarea class="textarea">山东华丰农业科技有限公司专注于绿色农业投入品研发与生产，为现代农业提供高效、安全、环保的综合解决方案。</textarea></div>
    </div>
    <div class="form-actions">${button("保存草稿","")}${button("统一提交审核","primary",'class="btn primary js-confirm" data-message="参展资料已统一提交审核"')}</div>
  </div>`);
pages["basic-info"] = combinedInfoPage;
pages["product-info"] = combinedInfoPage;
pages["brand-info"] = combinedInfoPage;

pages["booth-green"] = () => shell(`
  <div class="card">
    <div class="tabs"><button class="tab-btn active" data-tab="greenscheme">在线确认方案</button><button class="tab-btn" data-tab="greenrevision">改稿申请</button><button class="tab-btn" data-tab="greennotice">参展报到通知书</button></div>
    <div class="tab-panel active" id="tab-greenscheme">
      <div class="card-head"><div><div class="card-title">第一步：选择绿搭规格</div><div class="card-sub">方案模板由主办方在系统设置中统一配置</div></div>${badge("待企业确认","warning")}</div>
      <div class="choice-grid">
        <div class="choice-card"><h3>标准绿搭 18㎡</h3><div class="text-muted">6m × 3m · 双开口</div><div class="choice-price">18㎡</div><div class="help">适合基础品牌展示</div></div>
        <div class="choice-card selected"><h3>升级绿搭 36㎡</h3><div class="text-muted">6m × 6m · 三开口</div><div class="choice-price">36㎡</div><div class="help">当前已选择 · 模板 G-36-A</div></div>
        <div class="choice-card"><h3>旗舰绿搭 54㎡</h3><div class="text-muted">9m × 6m · 岛型</div><div class="choice-price">54㎡</div><div class="help">适合多产品线展示</div></div>
      </div>
      <div class="card-title" style="margin:24px 0 14px">第二步：下载模板并上传设计图</div>
      <div class="grid grid-2">
        <div class="upload-card"><div class="template-preview"></div><div class="upload-name"><span>G-36-A 设计模板</span>${badge("系统模板","info")}</div><p class="text-muted">包含尺寸、安全区、出血位和画面编号说明。</p><button class="btn block js-download">下载设计模板</button></div>
        <div class="upload-card"><div class="upload-name"><span>企业设计图</span>${badge("审核中","warning")}</div>${uploadZone("上传按模板制作的设计稿")}${fileRow("华丰农业_G-36-A_v3.pdf","审核中","warning")}</div>
      </div>
      <div class="form-actions">${button("保存选择","")}${button("确认方案并提交","primary",'class="btn primary js-confirm" data-message="绿搭规格与设计方案已确认"')}</div>
    </div>
    <div class="tab-panel" id="tab-greenrevision">
      <div class="alert warning">当前设计稿已进入制作确认阶段。如需变更，请先提交改稿申请。</div>
      <div class="table-wrap"><table><thead><tr><th>申请编号</th><th>改稿内容</th><th>申请时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
        <tr><td>GX-20260722-08</td><td>更换主画面产品图及联系电话</td><td>07-22 11:20</td><td>${badge("审核中","warning")}</td><td><span class="link js-detail" data-detail="revision">查看</span></td></tr>
        <tr><td>GX-20260718-03</td><td>调整企业 LOGO 位置</td><td>07-18 09:12</td><td>${badge("已完成","success")}</td><td><span class="link js-confirm" data-message="已打开改稿结果">结果</span></td></tr>
      </tbody></table></div>
      <div class="form-actions">${button("+ 发起改稿申请","primary",'class="btn primary js-modal" data-title="发起改稿申请" data-body="请描述需要修改的画面编号、位置和正确内容，提交后由主办方评估制作影响。"')}</div>
    </div>
    <div class="tab-panel" id="tab-greennotice">
      <div class="notice-paper" style="padding:30px"><h2>绿搭展商参展报到通知书</h2><div class="notice-no">CAATE-GREEN-A3-0218</div><div class="notice-row"><strong>企业</strong><span>山东华丰农业科技有限公司</span></div><div class="notice-row"><strong>展位</strong><span>A3-218 · 36㎡绿搭</span></div><div class="notice-row"><strong>报到时间</strong><span>2026年9月16日 09:00—17:00</span></div><div class="notice-row"><strong>报到地点</strong><span>3H馆绿搭展商服务台</span></div><button class="btn primary block js-download" style="margin-top:22px">下载 PDF 通知书</button></div>
    </div>
  </div>`);

pages["booth-raw"] = () => shell(`
  <div class="card">
    <div class="tabs"><button class="tab-btn active" data-tab="rawcard">企业名片确认</button><button class="tab-btn" data-tab="rawdocs">搭建资料</button><button class="tab-btn" data-tab="rawnotice">参展报到通知书</button></div>
    <div class="tab-panel active" id="tab-rawcard">
      <div class="grid grid-2">
        <div class="business-card"><div class="business-card-logo">HF</div><h2 style="margin:0 0 8px">山东华丰农业科技有限公司</h2><p class="text-muted">SHANDONG HUAFENG AGRITECH CO., LTD.</p><div class="list-item"><span>展位号</span><strong>C2-106</strong></div><div class="list-item"><span>联系人</span><strong>张敏 · 138****2219</strong></div></div>
        <div><div class="card-head"><div><div class="card-title">确认企业名片</div><div class="card-sub">名片用于现场导视、会刊和报到材料</div></div>${badge("待确认","warning")}</div><div class="field"><label>中文企业名</label><input class="input" value="山东华丰农业科技有限公司"></div><div class="field" style="margin-top:15px"><label>英文企业名</label><input class="input" value="SHANDONG HUAFENG AGRITECH CO., LTD."></div><button class="btn primary block js-confirm" data-message="企业名片已确认" style="margin-top:18px">确认企业名片</button></div>
      </div>
    </div>
    <div class="tab-panel" id="tab-rawdocs">
      <div class="grid grid-2">
        <div class="upload-card"><div class="upload-name"><span>搭建商资料</span>${badge("已通过","success")}</div>${fileRow("远景会展搭建商资质.pdf")}</div>
        <div class="upload-card"><div class="upload-name"><span>展位平面图</span>${badge("已通过","success")}</div>${fileRow("C2-106_平面图.pdf")}</div>
        <div class="upload-card"><div class="upload-name"><span>电路图</span>${badge("需修改","danger")}</div>${uploadZone("重新上传电路图")}<div class="reject-tip">请补充配电箱位置和回路编号。</div></div>
        <div class="upload-card"><div class="upload-name"><span>安全承诺书</span>${badge("已通过","success")}</div>${fileRow("安全搭建承诺书.pdf")}</div>
      </div>
      <div class="form-actions">${button("提交搭建资料","primary",'class="btn primary js-confirm" data-message="光地搭建资料已提交"')}</div>
    </div>
    <div class="tab-panel" id="tab-rawnotice">
      <div class="notice-paper" style="padding:30px"><h2>光地展商参展报到通知书</h2><div class="notice-no">CAATE-RAW-C2-0106</div><div class="notice-row"><strong>企业</strong><span>山东华丰农业科技有限公司</span></div><div class="notice-row"><strong>展位</strong><span>C2-106 · 54㎡光地</span></div><div class="notice-row"><strong>搭建商报到</strong><span>2026年9月15日 13:00—17:00</span></div><div class="notice-row"><strong>企业报到</strong><span>2026年9月16日 09:00—17:00</span></div><button class="btn primary block js-download" style="margin-top:22px">下载 PDF 通知书</button></div>
    </div>
  </div>`);

pages["admin-enterprise"] = () => shell(`
  <div class="card"><div class="toolbar"><div class="toolbar-left"><input class="input search" placeholder="搜索展商名称 / 展位号"><select class="select"><option>全部展位类型</option><option>标准展位</option><option>绿搭</option><option>光地</option></select></div><div class="toolbar-right">${button("↻ 同步数据","",'class="btn js-confirm" data-message="已同步 386 条展商数据"')}${button("+ 新增展商","primary",'class="btn primary js-modal" data-title="新增展商" data-body="录入展商基础信息后，可继续分配展位并发送账号邀请。"')}</div></div>
    <div class="table-wrap"><table><thead><tr><th>展商名称</th><th>联系人</th><th>展位号</th><th>展位类型</th><th>楣板 / 名片</th><th>资料状态</th><th>操作</th></tr></thead><tbody>
      <tr><td>山东华丰农业科技有限公司</td><td>张敏<br><span class="text-muted">138****2219</span></td><td><strong>A3-218</strong></td><td>绿搭</td><td>山东华丰农业科技有限公司</td><td>${badge("待修改","danger")}</td><td class="table-actions"><span class="link js-detail" data-detail="enterprise">详情</span><span class="link js-detail" data-detail="edit">编辑</span><span class="link js-detail" data-detail="booth">分配展位</span><span class="link js-detail" data-detail="nameplate">编辑楣板</span></td></tr>
      <tr><td>中科新型肥业有限公司</td><td>刘浩<br><span class="text-muted">139****5206</span></td><td>B1-066</td><td>标准展位</td><td>中科新型肥业</td><td>${badge("资料齐全","success")}</td><td class="table-actions"><span class="link js-detail" data-detail="enterprise">详情</span><span class="link js-detail" data-detail="edit">编辑</span><span class="link js-detail" data-detail="booth">分配展位</span><span class="link js-detail" data-detail="nameplate">编辑楣板</span></td></tr>
      <tr><td>禾润生物技术有限公司</td><td>孙晴</td><td>C2-106</td><td>光地</td><td>禾润生物科技</td><td>${badge("审核中","warning")}</td><td class="table-actions"><span class="link js-detail" data-detail="enterprise">详情</span><span class="link js-detail" data-detail="edit">编辑</span><span class="link js-detail" data-detail="booth">分配展位</span><span class="link js-detail" data-detail="nameplate">编辑名片</span></td></tr>
    </tbody></table></div>
  </div>`,true);

pages["admin-review-green"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">待审核方案</div><div class="stat-value">73</div></div><div class="card stat-card"><div class="stat-label">规格已确认</div><div class="stat-value">109</div></div><div class="card stat-card"><div class="stat-label">改稿申请</div><div class="stat-value">12</div></div><div class="card stat-card"><div class="stat-label">通知书已生成</div><div class="stat-value">96</div></div></div>
  <div class="card"><div class="toolbar"><div class="toolbar-left"><input class="input search" placeholder="展商 / 展位号"><select class="select"><option>全部业务状态</option><option>方案待审</option><option>需改稿</option><option>已完成</option></select></div><span class="text-muted">共 132 家绿搭展商</span></div>
    <div class="table-wrap"><table><thead><tr><th>展商 / 展位</th><th>选择规格</th><th>设计稿</th><th>改稿申请</th><th>通知书</th><th>状态</th><th>操作</th></tr></thead><tbody>
      <tr><td>华丰农业科技<br><span class="text-muted">A3-218</span></td><td>36㎡ · G-36-A</td><td>${badge("审核中","warning")}</td><td>1 条处理中</td><td>${badge("已生成","success")}</td><td>${badge("需关注","danger")}</td><td><a class="btn small primary" href="admin-green-detail.html">查看详情</a></td></tr>
      <tr><td>丰源智慧农业<br><span class="text-muted">A2-088</span></td><td>54㎡ · G-54-B</td><td>${badge("已通过","success")}</td><td>无</td><td>${badge("已生成","success")}</td><td>${badge("已完成","success")}</td><td><a class="btn small" href="admin-green-detail.html">查看详情</a></td></tr>
      <tr><td>绿野植保<br><span class="text-muted">B2-109</span></td><td>18㎡ · G-18-A</td><td>${badge("待审核","warning")}</td><td>无</td><td>${badge("待生成","default")}</td><td>${badge("审核中","warning")}</td><td><a class="btn small" href="admin-green-detail.html">查看详情</a></td></tr>
    </tbody></table></div>
  </div>`,true);

pages["admin-review-raw"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">光地展商</div><div class="stat-value">58</div></div><div class="card stat-card"><div class="stat-label">名片已确认</div><div class="stat-value">51</div></div><div class="card stat-card"><div class="stat-label">资料待审核</div><div class="stat-value">21</div></div><div class="card stat-card"><div class="stat-label">通知书已生成</div><div class="stat-value">43</div></div></div>
  <div class="card"><div class="table-wrap"><table><thead><tr><th>展商 / 展位</th><th>企业名片</th><th>搭建商资料</th><th>工程图纸</th><th>安全文件</th><th>通知书</th><th>操作</th></tr></thead><tbody>
    <tr><td>禾润生物技术<br><span class="text-muted">C2-106 · 54㎡</span></td><td>${badge("已确认","success")}</td><td>${badge("已通过","success")}</td><td>${badge("需修改","danger")}</td><td>${badge("已通过","success")}</td><td>${badge("已生成","success")}</td><td><a class="btn small primary" href="admin-raw-detail.html">查看详情</a></td></tr>
    <tr><td>农科智造<br><span class="text-muted">D1-016 · 72㎡</span></td><td>${badge("待确认","warning")}</td><td>${badge("审核中","warning")}</td><td>${badge("待审核","warning")}</td><td>${badge("待审核","warning")}</td><td>${badge("待生成","default")}</td><td><a class="btn small" href="admin-raw-detail.html">查看详情</a></td></tr>
  </tbody></table></div></div>`,true);

pages["admin-green-detail"] = () => shell(`
  <div class="toolbar"><a class="btn" href="admin-review-green.html">← 返回绿搭列表</a><div class="toolbar-right">${button("生成参展报到通知书","primary",'class="btn primary js-download"')}</div></div>
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">展商</div><div class="stat-value" style="font-size:18px">华丰农业科技</div><div class="stat-foot">A3-218</div></div><div class="card stat-card"><div class="stat-label">方案规格</div><div class="stat-value">36㎡</div><div class="stat-foot">G-36-A</div></div><div class="card stat-card"><div class="stat-label">设计稿</div><div class="stat-value" style="font-size:20px">审核中</div></div><div class="card stat-card"><div class="stat-label">通知书</div><div class="stat-value" style="font-size:20px">已生成</div></div></div>
  <div class="card"><div class="tabs"><button class="tab-btn active" data-tab="gdplan">方案与设计稿</button><button class="tab-btn" data-tab="gdrevision">改稿记录</button><button class="tab-btn" data-tab="gdnotice">报到通知书</button></div>
    <div class="tab-panel active" id="tab-gdplan"><div class="grid grid-2"><div class="effect-card"><img src="assets/green-booth.png"><div class="effect-info"><strong>G-36-A 效果预览</strong>${badge("企业已确认","success")}</div></div><div><div class="info-section"><div class="info-title">规格信息</div><div class="info-pairs"><div class="info-pair"><span>面积</span><strong>36㎡</strong></div><div class="info-pair"><span>开口</span><strong>三开口</strong></div><div class="info-pair"><span>模板</span><strong>G-36-A</strong></div><div class="info-pair"><span>确认时间</span><strong>07-20 10:18</strong></div></div></div><div class="info-section"><div class="info-title">设计文件</div>${fileRow("华丰农业_G-36-A_v3.pdf","审核中","warning")}<div class="form-actions">${button("审核通过","success",'class="btn success js-confirm" data-message="设计稿已审核通过"')}${button("驳回修改","danger",'class="btn danger js-modal" data-title="驳回设计稿" data-body="填写具体画面编号与修改意见，提交后自动通知展商。"')}</div></div></div></div></div>
    <div class="tab-panel" id="tab-gdrevision"><div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-title">改稿申请 GX-20260722-08 ${badge("审核中","warning")}</div><div class="timeline-time">07-22 11:20</div><div class="timeline-text">更换主画面产品图及联系电话。</div></div><div class="timeline-item done"><span class="timeline-dot"></span><div class="timeline-title">LOGO 位置调整完成</div><div class="timeline-time">07-18 16:30</div></div></div></div>
    <div class="tab-panel" id="tab-gdnotice"><div class="alert info">报到通知书 CAATE-GREEN-A3-0218 已于 07-22 09:00 生成并推送企业。</div>${button("重新生成 PDF","",'class="btn js-download"')}${button("发送通知","primary",'class="btn primary js-confirm" data-message="通知书已推送给展商"')}</div>
  </div>`,true);

pages["admin-raw-detail"] = () => shell(`
  <div class="toolbar"><a class="btn" href="admin-review-raw.html">← 返回光地列表</a><div class="toolbar-right">${button("生成参展报到通知书","primary",'class="btn primary js-download"')}</div></div>
  <div class="grid grid-3"><div class="card stat-card"><div class="stat-label">展商 / 展位</div><div class="stat-value" style="font-size:18px">禾润生物技术</div><div class="stat-foot">C2-106 · 54㎡</div></div><div class="card stat-card"><div class="stat-label">企业名片</div><div class="stat-value" style="font-size:20px">已确认</div></div><div class="card stat-card"><div class="stat-label">总体审核</div><div class="stat-value" style="font-size:20px">需补正</div></div></div>
  <div class="card"><div class="tabs"><button class="tab-btn active" data-tab="rdcard">企业名片</button><button class="tab-btn" data-tab="rddocs">搭建资料审核</button><button class="tab-btn" data-tab="rdnotice">报到通知书</button></div>
    <div class="tab-panel active" id="tab-rdcard"><div class="business-card"><div class="business-card-logo">HR</div><h2>禾润生物技术有限公司</h2><p class="text-muted">HERUN BIOTECHNOLOGY CO., LTD.</p><div class="info-pairs"><div class="info-pair"><span>联系人</span><strong>孙晴</strong></div><div class="info-pair"><span>联系电话</span><strong>137****6108</strong></div></div></div></div>
    <div class="tab-panel" id="tab-rddocs"><div class="table-wrap"><table><thead><tr><th>资料</th><th>文件</th><th>风险提示</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>搭建商资质</td><td>远景会展资质.pdf</td><td>无异常</td><td>${badge("已通过","success")}</td><td><span class="link">预览</span></td></tr><tr><td>平面图</td><td>C2-106_平面图.pdf</td><td>无异常</td><td>${badge("已通过","success")}</td><td><span class="link">预览</span></td></tr><tr><td>电路图</td><td>C2-106_电路图.pdf</td><td class="text-danger">功率标注不一致</td><td>${badge("需修改","danger")}</td><td><span class="link js-modal" data-title="审核电路图" data-body="请填写需修改的功率、回路或配电位置。">处理</span></td></tr><tr><td>安全承诺书</td><td>安全承诺书.pdf</td><td>无异常</td><td>${badge("已通过","success")}</td><td><span class="link">预览</span></td></tr></tbody></table></div></div>
    <div class="tab-panel" id="tab-rdnotice"><div class="alert info">光地展商及搭建商报到时间已写入通知书。</div>${button("下载通知书","primary",'class="btn primary js-download"')}${button("推送展商","",'class="btn js-confirm" data-message="通知书已推送"')}</div>
  </div>`,true);

pages["admin-settings"] = () => shell(`
  <div class="card"><div class="tabs"><button class="tab-btn active" data-tab="roles">角色权限</button><button class="tab-btn" data-tab="words">违规极限词配置</button><button class="tab-btn" data-tab="flows">审核流配置</button><button class="tab-btn" data-tab="templates">绿搭模板配置</button></div>
    <div class="tab-panel active" id="tab-roles"><div class="permission-grid"><div class="role-list"><div class="role-item active">超级管理员</div><div class="role-item">展商管理员</div><div class="role-item">绿搭审核员</div><div class="role-item">光地审核员</div><div class="role-item">证件管理员</div><button class="btn block js-modal" data-title="新增角色" data-body="设置角色名称和数据权限范围。" style="margin-top:12px">+ 新增角色</button></div><div class="permission-main"><div class="card-head"><div><div class="card-title">超级管理员权限</div><div class="card-sub">拥有系统全部数据和功能权限</div></div>${badge("已启用","success")}</div><div class="permission-group"><strong>展商与展位</strong><div class="check-row"><label class="check"><input type="checkbox" checked> 查看</label><label class="check"><input type="checkbox" checked> 新增编辑</label><label class="check"><input type="checkbox" checked> 分配展位</label><label class="check"><input type="checkbox" checked> 导出</label></div></div><div class="permission-group"><strong>业务审核</strong><div class="check-row"><label class="check"><input type="checkbox" checked> 绿搭审核</label><label class="check"><input type="checkbox" checked> 光地审核</label><label class="check"><input type="checkbox" checked> 证件审核</label><label class="check"><input type="checkbox" checked> 通知书管理</label></div></div><div class="form-actions">${button("保存权限","primary",'class="btn primary js-confirm" data-message="角色权限已保存"')}</div></div></div></div>
    <div class="tab-panel" id="tab-words"><div class="toolbar"><div class="toolbar-left"><input class="input search" placeholder="搜索极限词"></div>${button("+ 新增词条","primary",'class="btn primary js-modal" data-title="新增违规极限词" data-body="配置词语、风险等级及命中后的审核策略。"')}</div><div class="table-wrap"><table><thead><tr><th>词语</th><th>分类</th><th>风险等级</th><th>命中策略</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td><span class="word-flag">全国第一</span></td><td>绝对化用语</td><td>${badge("高风险","danger")}</td><td>阻止自动通过</td><td>${badge("启用","success")}</td><td><span class="link js-detail" data-detail="word">编辑</span></td></tr><tr><td><span class="word-flag">国家级</span></td><td>资质表述</td><td>${badge("中风险","warning")}</td><td>人工复核</td><td>${badge("启用","success")}</td><td><span class="link js-detail" data-detail="word">编辑</span></td></tr><tr><td>百分百有效</td><td>功效承诺</td><td>${badge("高风险","danger")}</td><td>阻止提交</td><td>${badge("启用","success")}</td><td><span class="link js-detail" data-detail="word">编辑</span></td></tr></tbody></table></div></div>
    <div class="tab-panel" id="tab-flows"><div class="grid grid-2"><div class="upload-card"><div class="upload-name"><span>绿搭设计稿审核流</span>${badge("运行中","success")}</div><div class="flow-line"><span class="flow-node">企业提交</span><span class="flow-arrow">→</span><span class="flow-node">系统词检</span><span class="flow-arrow">→</span><span class="flow-node">审核员</span><span class="flow-arrow">→</span><span class="flow-node">企业确认</span></div><button class="btn small js-detail" data-detail="flow" style="margin-top:15px">编辑审核流</button></div><div class="upload-card"><div class="upload-name"><span>光地材料审核流</span>${badge("运行中","success")}</div><div class="flow-line"><span class="flow-node">企业提交</span><span class="flow-arrow">→</span><span class="flow-node">图纸审核</span><span class="flow-arrow">→</span><span class="flow-node">安全审核</span></div><button class="btn small js-detail" data-detail="flow" style="margin-top:15px">编辑审核流</button></div></div></div>
    <div class="tab-panel" id="tab-templates"><div class="toolbar"><span class="text-muted">企业端可选择以下启用模板</span>${button("+ 新增模板","primary",'class="btn primary js-modal" data-title="新增绿搭模板" data-body="设置模板名称、适用规格、尺寸文件与预览效果图。"')}</div><div class="choice-grid"><div class="choice-card selected"><div class="template-preview"></div><h3>G-36-A</h3><div class="text-muted">36㎡ · 三开口</div></div><div class="choice-card"><div class="template-preview"></div><h3>G-18-A</h3><div class="text-muted">18㎡ · 双开口</div></div><div class="choice-card"><div class="template-preview"></div><h3>G-54-B</h3><div class="text-muted">54㎡ · 岛型</div></div></div></div>
  </div>`,true);

mobileShell = function(content, active="home", title="展务服务") {
  const links = [
    ["mini-home.html","home","⌂","首页"],
    ["mini-booth.html","booth","▣","展位业务"],
    ["mini-progress.html","progress","◉","进度"],
    ["mini-cert.html","cert","♧","证件"]
  ];
  return `<div class="mobile-page"><div class="phone">
    <div class="phone-top"><div class="phone-status"><span>09:41</span><span>● ● ▰</span></div><div class="phone-head"><h1>${title}</h1><span>•••</span></div></div>
    <div class="phone-content">${content}</div>
    <nav class="bottom-nav">${links.map(x=>`<a href="${x[0]}" class="${active===x[1]?"active":""}"><span>${x[2]}</span><span>${x[3]}</span></a>`).join("")}</nav>
  </div></div>${globalUI()}`;
};

pages["mini-home"] = () => mobileShell(`
  <div class="mini-hero"><p>我的展会</p><h2>2026 中国国际农业科技展</h2><p>2026.09.18—09.20 · 上海</p><div class="mini-data"><div>展位号<strong>A3-218</strong></div><div>展位类型<strong>绿搭</strong></div></div></div>
  <div class="card"><div class="card-head"><div class="card-title">当前进度</div><strong class="text-success">72%</strong></div><div class="progress"><span style="width:72%"></span></div><div class="list-item"><span class="text-muted">当前事项</span>${badge("设计稿审核中","warning")}</div><a href="mini-progress.html" class="btn soft block">查看完整进度</a></div>
  <div class="card"><div class="card-head"><div class="card-title">展位动态</div>${badge("1 条待处理","danger")}</div><div class="mini-message"><div class="mini-message-icon">!</div><div><strong>改稿申请正在审核</strong><div class="list-desc" style="margin-top:5px">申请编号 GX-20260722-08，预计 1 个工作日内反馈。</div><div class="mini-message-time">今天 14:32</div></div></div></div>
  <div class="card"><div class="card-head"><div class="card-title">报到通知书</div>${badge("已生成","success")}</div><p class="text-muted">绿搭展商报到：2026年9月16日 09:00</p><a href="mini-notice.html" class="btn block">查看通知书</a></div>
`,"home","展务服务");

pages["mini-booth"] = () => mobileShell(`
  <div class="card"><div class="card-head"><div><div class="card-title">我的展位</div><div class="card-sub">A3-218 · 36㎡绿搭</div></div>${badge("业务进行中","warning")}</div><div class="progress"><span style="width:68%"></span></div></div>
  <a class="card booth-menu-card" href="#"><h3>方案与规格确认</h3><p>已选择 36㎡升级绿搭，模板 G-36-A。</p><div style="margin-top:10px">${badge("已确认","success")}</div></a>
  <a class="card booth-menu-card js-upload" href="#"><h3>上传设计图</h3><p>按系统模板上传 PDF / AI 设计文件。</p><div style="margin-top:10px">${badge("审核中","warning")}</div></a>
  <a class="card booth-menu-card js-modal" href="#" data-title="发起改稿申请" data-body="说明需要修改的画面、位置和正确内容。"><h3>改稿申请</h3><p>当前有 1 条申请正在审核。</p><div style="margin-top:10px">${badge("处理中","warning")}</div></a>
  <a class="card booth-menu-card" href="mini-notice.html"><h3>参展报到通知书</h3><p>查看报到时间、地点与展位信息。</p><div style="margin-top:10px">${badge("已生成","success")}</div></a>
`,"booth","展位业务");

const reportNoticeHTML = (boothType="绿搭", boothNo="A3-218") => `
  <div class="notice-paper" style="padding:30px">
    <h2>${boothType}展商参展报到通知书</h2>
    <div class="notice-no">CAATE-2026-${boothNo.replace("-","")}</div>
    <div class="notice-row"><strong>报到时间</strong><span>2026年9月16日 09:00—17:00</span></div>
    <div class="notice-row"><strong>报到地点</strong><span>上海国家会展中心 3H 馆参展商服务台</span></div>
    <div class="notice-row"><strong>展位号</strong><span>${boothNo} · ${boothType}展位</span></div>
    <div class="section-block">
      <div class="info-title">报到流程</div>
      <div class="report-flow"><div class="report-step"><strong>① 签到并领取证件</strong><div class="help">出示通知书及企业有效证件</div></div><span class="flow-arrow">→</span><div class="report-step"><strong>② 办理入场手续</strong><div class="help">核对展位并完成安全登记</div></div></div>
    </div>
    <div class="section-block"><div class="info-title">注意事项</div><ul class="notice-list"><li><strong>展品运输：</strong>车辆须按指定物流通道和预约时段进场，大件展品请提前申报。</li><li><strong>进场资料：</strong>请携带本通知书、营业执照复印件、参展人员身份证明及相关运输单据。</li></ul></div>
    <div class="section-block"><div class="info-title">现场对接人</div><div class="info-pairs"><div class="info-pair"><span>对接人</span><strong>李悦</strong></div><div class="info-pair"><span>联系电话</span><strong>138 0013 8000</strong></div><div class="info-pair"><span>服务电话</span><strong>021-8888 6600</strong></div><div class="info-pair"><span>服务时间</span><strong>09:00—18:00</strong></div></div></div>
    <button class="btn primary block js-download" style="margin-top:22px">下载 PDF 通知书</button>
  </div>`;

const enterpriseInfoPage = () => shell(`
  <div class="card">
    <div class="card-head"><div><div class="card-title">参展资料完整度</div><div class="card-sub">资料默认以查看状态展示，点击页面底部“编辑资料”后方可修改</div></div><strong class="text-success">86%</strong></div>
    <div class="progress"><span style="width:86%"></span></div>
    <div class="section-block">
      <div class="section-heading"><div><h3>企业基础资料</h3><div class="card-sub">用于会刊、展位名片及通知书生成</div></div>${badge("已确认","success")}</div>
      <div class="form-grid"><div class="field"><label>企业名称</label><input class="input" value="山东华丰农业科技有限公司"></div><div class="field"><label>联系人</label><input class="input" value="张敏"></div><div class="field"><label>联系电话</label><input class="input" value="138 6608 2219"></div><div class="field"><label>楣板 / 企业名片名称</label><input class="input" value="山东华丰农业科技有限公司"></div></div>
    </div>
    <div class="section-block">
      <div class="section-heading"><div><h3>企业及展品</h3><div class="card-sub">产品分类及企业资质档案</div></div>${badge("检测报告需补充","danger")}</div>
      <div class="field"><label>产品品类</label><div class="check-row"><label class="check"><input type="checkbox" checked> 农药制剂</label><label class="check"><input type="checkbox" checked> 新型肥料</label><label class="check"><input type="checkbox" checked> 生物技术</label><label class="check"><input type="checkbox"> 农业机械</label></div></div>
      <div class="grid grid-3" style="margin-top:16px"><div class="upload-card"><div class="upload-name"><span>营业执照</span>${badge("已通过","success")}</div>${fileRow("营业执照_副本.pdf")}</div><div class="upload-card"><div class="upload-name"><span>登记证</span>${badge("已通过","success")}</div>${fileRow("农药登记证_PD20260188.pdf")}</div><div class="upload-card"><div class="upload-name"><span>检测报告</span>${badge("需补充","danger")}</div>${uploadZone("重新上传检测报告")}<div class="reject-tip">请上传带 CMA 章的完整报告。</div></div></div>
    </div>
    <div class="section-block">
      <div class="section-heading"><div><h3>宣传资料</h3><div class="card-sub">LOGO、会刊宣传页及企业简介</div></div>${badge("审核中","warning")}</div>
      <div class="grid grid-2"><div class="upload-card"><div class="upload-name"><span>企业 LOGO</span>${badge("已上传","success")}</div>${fileRow("huafeng-logo-print.png")}${uploadZone("替换企业 LOGO")}</div><div class="upload-card"><div class="upload-name"><span>会刊资料</span>${badge("审核中","warning")}</div>${fileRow("企业会刊宣传页.pdf","审核中","warning")}${uploadZone("替换会刊宣传页")}</div></div>
      <div class="field" style="margin-top:16px"><label>企业简介</label><textarea class="textarea">山东华丰农业科技有限公司专注于绿色农业投入品研发与生产，为现代农业提供高效、安全、环保的综合解决方案。</textarea></div>
    </div>
  </div>`);
pages["basic-info"] = enterpriseInfoPage;
pages["product-info"] = enterpriseInfoPage;
pages["brand-info"] = enterpriseInfoPage;

pages.notice = () => shell(`<div class="toolbar"><div></div><div>${button("下载 PDF","primary",'class="btn primary js-download"')}</div></div>${reportNoticeHTML("绿搭","A3-218")}`);

pages["admin-exhibition"] = () => shell(`
  <div class="toolbar"><div class="toolbar-left"><select class="select"><option>2026 中国国际农业科技展</option><option>2025 农业科技创新展</option></select>${badge("进行中","success")}</div>${button("+ 创建展会","primary",'class="btn primary js-modal" data-title="创建新展会" data-body="填写展会名称、举办时间及场馆信息后即可创建展会。"')}</div>
  <div class="card">
    <div class="section-block"><div class="section-heading"><div><h3>基础配置</h3><div class="card-sub">展会名称、举办场馆和开展时间</div></div>${badge("已配置","success")}</div><div class="form-grid"><div class="field"><label>展会名称</label><input class="input" value="2026 中国国际农业科技展"></div><div class="field"><label>展会地点</label><input class="input" value="上海国家会展中心"></div><div class="field"><label>开展日期</label><input class="input" type="date" value="2026-09-18"></div><div class="field"><label>结束日期</label><input class="input" type="date" value="2026-09-20"></div></div></div>
    <div class="section-block"><div class="section-heading"><div><h3>展位类型配置</h3><div class="card-sub">配置不同展位适用的资料流程</div></div>${button("+ 新增类型","small",'class="btn small js-modal" data-title="新增展位类型" data-body="配置展位名称、面积范围和适用业务流程。"')}</div><div class="table-wrap"><table><thead><tr><th>类型</th><th>规格</th><th>企业数</th><th>资料流程</th><th>状态</th></tr></thead><tbody><tr><td>标准展位</td><td>3m × 3m</td><td>196</td><td>名片确认 + 证件</td><td>${badge("启用","success")}</td></tr><tr><td>绿搭展位</td><td>18—72㎡</td><td>132</td><td>规格方案 + 设计稿 + 通知书</td><td>${badge("启用","success")}</td></tr><tr><td>光地展位</td><td>36㎡起</td><td>58</td><td>名片 + 搭建资料 + 通知书</td><td>${badge("启用","success")}</td></tr></tbody></table></div></div>
    <div class="section-block"><div class="section-heading"><div><h3>截止时间配置</h3><div class="card-sub">到期前系统自动发送短信和站内信提醒</div></div>${badge("自动提醒已开启","info")}</div><div class="form-grid"><div class="field"><label>基础资料截止</label><input class="input" type="datetime-local" value="2026-07-15T18:00"></div><div class="field"><label>企业资质截止</label><input class="input" type="datetime-local" value="2026-07-22T18:00"></div><div class="field"><label>绿搭 / 光地截止</label><input class="input" type="datetime-local" value="2026-07-30T18:00"></div><div class="field"><label>证件注册截止</label><input class="input" type="datetime-local" value="2026-08-15T18:00"></div></div></div>
    <div class="form-actions">${button("保存全部配置","primary",'class="btn primary js-confirm" data-message="展会全部配置已保存"')}</div>
  </div>`,true);

pages["admin-enterprise"] = () => shell(`
  <div class="card"><div class="toolbar"><div class="toolbar-left"><input class="input search" placeholder="搜索展商名称 / 展位号"><select class="select"><option>全部展位类型</option><option>标准展位</option><option>绿搭</option><option>光地</option></select></div><div class="toolbar-right">${button("↻ 同步数据","",'class="btn js-confirm" data-message="已同步 386 条展商数据"')}${button("+ 新增展商","primary",'class="btn primary js-modal" data-title="新增展商" data-body="录入展商基础信息后发送账号邀请。"')}</div></div>
  <div class="table-wrap"><table><thead><tr><th>展商名称</th><th>联系人</th><th>展位号</th><th>展位类型</th><th>楣板 / 名片</th><th>资料状态</th><th>操作</th></tr></thead><tbody><tr><td>山东华丰农业科技有限公司</td><td>张敏<br><span class="text-muted">138****2219</span></td><td><strong>A3-218</strong></td><td>绿搭</td><td>山东华丰农业科技有限公司</td><td>${badge("待修改","danger")}</td><td class="table-actions"><span class="link js-detail" data-detail="enterprise">详情</span><span class="link js-detail" data-detail="edit">编辑</span></td></tr><tr><td>中科新型肥业有限公司</td><td>刘浩</td><td>B1-066</td><td>标准展位</td><td>中科新型肥业</td><td>${badge("资料齐全","success")}</td><td class="table-actions"><span class="link js-detail" data-detail="enterprise">详情</span><span class="link js-detail" data-detail="edit">编辑</span></td></tr><tr><td>禾润生物技术有限公司</td><td>孙晴</td><td>C2-106</td><td>光地</td><td>禾润生物科技</td><td>${badge("审核中","warning")}</td><td class="table-actions"><span class="link js-detail" data-detail="enterprise">详情</span><span class="link js-detail" data-detail="edit">编辑</span></td></tr></tbody></table></div></div>`,true);

pages["admin-message"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">今日短信</div><div class="stat-value">1,286</div></div><div class="card stat-card"><div class="stat-label">短信送达率</div><div class="stat-value">98.7%</div></div><div class="card stat-card"><div class="stat-label">启用模板</div><div class="stat-value">8</div></div><div class="card stat-card"><div class="stat-label">发送失败</div><div class="stat-value">12</div></div></div>
  <div class="grid grid-2" style="margin-top:16px">
    <div class="card"><div class="card-head"><div><div class="card-title">推送短信</div><div class="card-sub">选择模板并向指定展商发送</div></div>${badge("短信通道正常","success")}</div><div class="field"><label>接收对象</label><select class="select"><option>全部绿搭展商（132）</option><option>全部光地展商（58）</option><option>资料未完成展商（46）</option><option>手动选择展商</option></select></div><div class="field" style="margin-top:15px"><label>短信模板</label><select class="select"><option>资料截止提醒</option><option>审核驳回通知</option><option>报到通知书生成提醒</option></select></div><div class="field" style="margin-top:15px"><label>短信预览</label><textarea class="textarea">【农业科技展】尊敬的${"${企业名称}"}，您的参展资料将于${"${截止时间}"}截止，请及时登录展务系统完成提交。</textarea><div class="help">预计发送 132 条，变量将在发送时自动替换。</div></div><button class="btn primary block js-modal" data-title="确认推送短信" data-body="即将向 132 家绿搭展商发送资料截止提醒，是否继续？">推送短信</button></div>
    <div class="card"><div class="card-head"><div><div class="card-title">短信模板配置</div><div class="card-sub">配置可复用的短信内容和变量</div></div>${button("+ 新增模板","primary small",'class="btn primary small js-modal" data-title="新增短信模板" data-body="填写模板名称、适用场景和短信正文，可使用企业名称、截止时间等变量。"')}</div><ul class="list"><li class="list-item"><div><div class="list-title">资料截止提醒</div><div class="list-desc">变量：企业名称、截止时间</div></div><div>${badge("已启用","success")} <span class="link js-detail" data-detail="sms">编辑</span></div></li><li class="list-item"><div><div class="list-title">审核驳回通知</div><div class="list-desc">变量：企业名称、审核事项、驳回原因</div></div><div>${badge("已启用","success")} <span class="link js-detail" data-detail="sms">编辑</span></div></li><li class="list-item"><div><div class="list-title">报到通知书生成提醒</div><div class="list-desc">变量：企业名称、展位号、报到时间</div></div><div>${badge("已启用","success")} <span class="link js-detail" data-detail="sms">编辑</span></div></li></ul></div>
  </div>
  <div class="card"><div class="card-head"><div class="card-title">短信推送记录</div><span class="text-muted">最近 30 天</span></div><div class="table-wrap"><table><thead><tr><th>模板</th><th>接收对象</th><th>发送时间</th><th>发送数量</th><th>送达率</th><th>状态</th></tr></thead><tbody><tr><td>绿搭资料截止提醒</td><td>132 家绿搭展商</td><td>07-22 10:00</td><td>132</td><td>98.5%</td><td>${badge("发送完成","success")}</td></tr><tr><td>报到通知书生成提醒</td><td>278 家已生成企业</td><td>07-20 09:00</td><td>278</td><td>99.1%</td><td>${badge("发送完成","success")}</td></tr></tbody></table></div></div>`,true);

pages["admin-settings"] = () => shell(`
  <div class="card"><div class="tabs"><button class="tab-btn active" data-tab="roles">角色权限</button><button class="tab-btn" data-tab="words">违规极限词配置</button><button class="tab-btn" data-tab="flows">审核流配置</button><button class="tab-btn" data-tab="templates">绿搭模板配置</button></div>
    <div class="tab-panel active" id="tab-roles"><div class="permission-grid"><div class="role-list"><div class="role-item active">超级管理员</div><div class="role-item">展商管理员</div><div class="role-item">绿搭审核员</div><div class="role-item">光地审核员</div></div><div class="permission-main"><div class="card-title">超级管理员权限</div><div class="permission-group"><strong>展商与业务</strong><div class="check-row"><label class="check"><input type="checkbox" checked> 展商管理</label><label class="check"><input type="checkbox" checked> 绿搭审核</label><label class="check"><input type="checkbox" checked> 光地审核</label><label class="check"><input type="checkbox" checked> 消息通知</label></div></div><div class="form-actions">${button("保存权限","primary",'class="btn primary js-confirm" data-message="角色权限已保存"')}</div></div></div></div>
    <div class="tab-panel" id="tab-words"><div class="toolbar"><span class="text-muted">系统在设计稿提交时自动检查</span>${button("+ 新增词条","primary",'class="btn primary js-modal" data-title="新增违规极限词" data-body="配置词语、风险等级及命中策略。"')}</div><div class="table-wrap"><table><thead><tr><th>词语</th><th>分类</th><th>风险等级</th><th>命中策略</th><th>操作</th></tr></thead><tbody><tr><td><span class="word-flag">全国第一</span></td><td>绝对化用语</td><td>${badge("高风险","danger")}</td><td>阻止自动通过</td><td><span class="link js-detail" data-detail="word">编辑</span></td></tr><tr><td>百分百有效</td><td>功效承诺</td><td>${badge("高风险","danger")}</td><td>阻止提交</td><td><span class="link js-detail" data-detail="word">编辑</span></td></tr></tbody></table></div></div>
    <div class="tab-panel" id="tab-flows"><div class="grid grid-2"><div class="upload-card"><div class="upload-name"><span>绿搭设计稿审核流</span>${badge("运行中","success")}</div><div class="flow-line"><span class="flow-node">企业提交</span><span>→</span><span class="flow-node">系统词检</span><span>→</span><span class="flow-node">人工审核</span></div></div><div class="upload-card"><div class="upload-name"><span>光地材料审核流</span>${badge("运行中","success")}</div><div class="flow-line"><span class="flow-node">企业提交</span><span>→</span><span class="flow-node">图纸审核</span><span>→</span><span class="flow-node">安全审核</span></div></div></div></div>
    <div class="tab-panel" id="tab-templates">
      <div class="toolbar"><div><div class="card-title">绿搭模板及上传画面配置</div><div class="card-sub">配置每个面积规格要求企业上传的画面数量及画面名称</div></div>${button("+ 新增模板","primary",'class="btn primary js-detail" data-detail="template"')}</div>
      <div class="template-config-row"><strong>模板 / 规格</strong><strong>面积</strong><strong>画面数量</strong><strong>画面名称</strong><strong>操作</strong></div>
      <div class="template-config-row"><div><strong>G-30-A</strong><div class="help">标准三开口绿搭</div></div><div>30㎡</div><div><input class="input" type="number" value="4"></div><div><div class="template-face-list"><span class="face-tag">1-1</span><span class="face-tag">1-2</span><span class="face-tag">1-3</span><span class="face-tag">1-4</span></div></div><div><span class="link js-detail" data-detail="template">编辑</span></div></div>
      <div class="template-config-row"><div><strong>G-36-A</strong><div class="help">升级三开口绿搭</div></div><div>36㎡</div><div><input class="input" type="number" value="6"></div><div><div class="template-face-list"><span class="face-tag">1-正</span><span class="face-tag">1-反</span><span class="face-tag">2-正</span><span class="face-tag">2-反</span><span class="face-tag">3-1</span><span class="face-tag">3-2</span></div></div><div><span class="link js-detail" data-detail="template">编辑</span></div></div>
      <div class="template-config-row"><div><strong>G-54-B</strong><div class="help">旗舰岛型绿搭</div></div><div>54㎡</div><div><input class="input" type="number" value="8"></div><div><div class="template-face-list"><span class="face-tag">A-1</span><span class="face-tag">A-2</span><span class="face-tag">B-1</span><span class="face-tag">B-2</span><span class="face-tag">C-1</span><span class="face-tag">C-2</span><span class="face-tag">D-1</span><span class="face-tag">D-2</span></div></div><div><span class="link js-detail" data-detail="template">编辑</span></div></div>
      <div class="form-actions">${button("保存模板配置","primary",'class="btn primary js-confirm" data-message="绿搭模板及画面配置已保存"')}</div>
    </div>
  </div>`,true);

pages["mini-notice"] = () => mobileShell(`
  <div class="card" style="text-align:center"><div style="font-size:38px;margin-bottom:8px">▧</div><div class="card-title">参展报到通知书</div><div class="card-sub">CAATE-2026-A3-0218</div>${badge("已生成","success")}</div>
  <div class="card"><div class="list-item"><span class="text-muted">报到时间</span><strong style="text-align:right">09月16日<br>09:00—17:00</strong></div><div class="list-item"><span class="text-muted">报到地点</span><strong style="text-align:right">3H 馆展商服务台</strong></div><div class="list-item"><span class="text-muted">展位号</span><strong>A3-218</strong></div></div>
  <div class="card"><div class="card-title">报到流程</div><div class="report-flow"><div class="report-step">① 签到领证件</div><span class="flow-arrow">→</span><div class="report-step">② 办理入场手续</div></div></div>
  <div class="card"><div class="card-title">注意事项</div><ul class="notice-list"><li>展品运输须预约进场时段，大件展品提前申报。</li><li>携带通知书、营业执照复印件及身份证明。</li></ul></div>
  <div class="card"><div class="card-title">现场对接人</div><div class="list-item"><span>李悦</span><strong>138 0013 8000</strong></div><a class="btn primary block" href="tel:13800138000">联系对接人</a></div>
  <button class="btn primary block js-download">下载 PDF 通知书</button>
`,"","报到通知书");

/* ===== 0624 根据功能梳理图重整：新增运营商端 / 供应商协同端 ===== */
enterpriseNav.length = 0;
enterpriseNav.push(
  ["dashboard.html","dashboard","◇","企业工作台"],
  ["basic-info.html","basic-info","▣","参展资料"],
  ["booth-standard.html","booth-standard","□","标展管理"],
  ["booth-green.html","booth-green","◆","绿搭管理"],
  ["booth-raw.html","booth-raw","■","光地管理"],
  ["progress.html","progress","◎","进度中心"],
  ["message.html","message","✉","消息中心"]
);

adminNav.length = 0;
adminNav.push(
  ["admin-dashboard.html","admin-dashboard","◇","管理总览"],
  ["admin-exhibition.html","admin-exhibition","▣","展会管理"],
  ["admin-enterprise.html","admin-enterprise","◆","展商管理"],
  ["admin-review-green.html","admin-review-green","◆","绿搭审核"],
  ["admin-review-raw.html","admin-review-raw","■","光地审核"],
  ["admin-notice.html","admin-notice","□","通知书管理"],
  ["admin-message.html","admin-message","✉","消息通知"],
  ["admin-cert.html","admin-cert","▦","证件管理"],
  ["admin-settings.html","admin-settings","⚙","系统设置"]
);

const operatorNav = [
  ["operator-dashboard.html","operator-dashboard","◇","运营工作台"],
  ["operator-exhibition.html","operator-exhibition","▣","展会数据"],
  ["operator-booth.html","operator-booth","□","展位业务"],
  ["operator-green.html","operator-green","◆","绿搭模板"],
  ["operator-notice.html","operator-notice","▤","报到通知"],
  ["operator-cert.html","operator-cert","▦","证件协同"],
  ["operator-message.html","operator-message","✉","消息协同"]
];

Object.assign(meta, {
  "dashboard": ["企业工作台","查看参展状态、待办事项、展位业务和消息提醒"],
  "basic-info": ["参展资料","企业基础资料、企业及展品、宣传资料集中展示，进入编辑状态后修改并提交审核"],
  "booth-standard": ["标展管理","确认企业名片/楣板信息，查看参展报到通知书和证件入口"],
  "booth-green": ["绿搭管理","选择规格模板，上传设计画面，提交改稿申请并确认效果图"],
  "booth-raw": ["光地管理","确认企业名片，提交搭建商资料、图纸与安全文件"],
  "progress": ["进度中心","按业务节点查看审核状态、驳回原因和完成进度"],
  "message": ["消息中心","集中接收审核、改稿、截止提醒和系统通知"],
  "admin-dashboard": ["管理总览","展会、展商、审核、消息与异常数据总览"],
  "admin-exhibition": ["展会管理","配置展会基础信息、展位类型、业务截止时间和供应商协同规则"],
  "admin-enterprise": ["展商管理","同步展商数据，查看企业资料、资质档案、宣传物料和展位业务"],
  "admin-review-green": ["绿搭审核","审核企业设计画面、效果图、改稿申请和参展报到通知书"],
  "admin-review-raw": ["光地审核","审核搭建商资质、平面图、电路图、安全承诺书和报到通知书"],
  "admin-notice": ["通知书管理","维护报到通知书模板，生成并下载 PDF 记录"],
  "admin-message": ["消息通知","配置短信模板、站内信模板并推送通知"],
  "admin-cert": ["证件管理","管理参展人员注册、审核状态和导出名单"],
  "admin-settings": ["系统设置","角色权限、违规极限词、审核流和绿搭模板规则配置"],
  "operator-dashboard": ["运营工作台","运营商查看展位服务、模板、通知、证件与消息协同进度"],
  "operator-exhibition": ["展会数据","同步展会、展区、展位、展商和订单等基础数据"],
  "operator-booth": ["展位业务","维护标展、绿搭、光地业务配置与服务节点"],
  "operator-green": ["绿搭模板","配置规格模板、上传画面数量、画面名称和效果图"],
  "operator-notice": ["报到通知","协同生成参展报到通知书并维护现场信息"],
  "operator-cert": ["证件协同","查看人员注册、制证进度和异常名单"],
  "operator-message": ["消息协同","维护运营通知模板、推送记录和失败重试"]
});

function kvRows(rows) {
  return rows.map(([k,v]) => `<div class="kv"><span>${k}</span><strong>${v}</strong></div>`).join("");
}

function simpleTable(headers, rows) {
  return `<div class="table-wrap"><table class="data-table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function operatorShell(content) {
  const m = meta[page] || ["运营商端",""];
  return `
  <div class="shell">
    <aside class="sidebar operator-side">
      <div class="brand"><div class="brand-mark">运</div><div><strong>展务运营商端</strong><small>OPERATOR SERVICE</small></div></div>
      <div class="nav-label">运营协同</div>
      ${navHTML(operatorNav)}
    </aside>
    <main class="main">
      <header class="topbar">
        <div class="crumb">2026 中国国际农业科技展 / ${m[0]}</div>
        <div class="top-actions"><a href="operator-message.html" class="bell">✉</a><div class="user"><div class="avatar">运</div><div><strong>运营服务商</strong><div class="card-sub">展务协同角色</div></div></div></div>
      </header>
      <div class="content">
        <div class="page-head"><div><h1>${m[0]}</h1><p>${m[1]}</p></div><div class="head-actions">${badge("运营中","success")}</div></div>
        ${content}
      </div>
    </main>
  </div>${globalUI()}`;
}

const reportNoticeBlock = (boothNo="A3-218") => `
  <div class="notice-paper">
    <div class="notice-title">参展报到通知书</div>
    <div class="grid grid-2">
      <div>${kvRows([["展会名称","2026 中国国际农业科技展"],["报到时间","2026-09-17 09:00 - 18:00"],["报到地点","上海国家会展中心 北登录厅 2 号服务台"]])}</div>
      <div>${kvRows([["展位号",boothNo],["报到流程","签到领证件 → 办理入场手续"],["对接人联系方式","张经理 138-0000-2026"]])}</div>
    </div>
    <div class="notice-list"><strong>注意事项</strong><p>请提前安排展品运输；进场时携带营业执照复印件、展品清单、施工/布展资料及人员身份证件。</p></div>
    <div class="form-actions">${button("下载通知书 PDF","primary",'class="btn primary js-download"')}${button("发送到企业联系人","",'class="btn js-modal" data-title="发送通知书" data-body="系统将以短信和站内信方式发送报到通知书链接。"')}</div>
  </div>`;

pages.dashboard = () => shell(`
  <div class="hero"><div><span class="hero-kicker">2026.09.18 - 09.20 · 上海国家会展中心</span><h2>华丰农业科技参展工作台</h2><p>展位 A3-218 · 绿搭 36㎡。请按“参展资料 → 展位业务 → 证件/通知书”的流程完成线上确认。</p><div class="head-actions">${button("进入参展资料","primary",'onclick="location.href=\'basic-info.html\'"')}${button("查看绿搭管理","",'onclick="location.href=\'booth-green.html\'"')}</div></div></div>
  <div class="grid grid-4" style="margin-top:16px">
    <div class="card stat-card"><div class="stat-label">参展资料</div><div class="stat-value">86%</div><div class="stat-foot">基础资料已确认，资质审核中</div></div>
    <div class="card stat-card"><div class="stat-label">展位业务</div><div class="stat-value" style="font-size:22px">绿搭改稿</div><div class="stat-foot">2-反画面需重新上传</div></div>
    <div class="card stat-card"><div class="stat-label">通知书</div><div class="stat-value" style="font-size:22px">待生成</div><div class="stat-foot">审核通过后自动开放下载</div></div>
    <div class="card stat-card"><div class="stat-label">未读消息</div><div class="stat-value">4</div><div class="stat-foot"><a class="link" href="message.html">进入消息中心 →</a></div></div>
  </div>
  <div class="grid grid-2" style="margin-top:16px">
    <div class="card"><div class="card-title">当前待办</div><ul class="list">
      <li class="list-item"><div><div class="list-title">绿搭画面 2-反 被驳回</div><div class="list-desc">含极限词“行业第一”，请提交改稿申请后重新上传。</div></div>${badge("紧急","danger")}</li>
      <li class="list-item"><div><div class="list-title">确认企业名片/楣板信息</div><div class="list-desc">用于标展、光地报到及现场服务台核验。</div></div>${badge("待确认","warning")}</li>
      <li class="list-item"><div><div class="list-title">补充参展人员证件</div><div class="list-desc">当前 3/6 人完成注册。</div></div>${badge("进行中","warning")}</li>
    </ul></div>
    <div class="card"><div class="card-title">审核状态概览</div>
      ${progress("参展资料",86,"success")}${progress("绿搭设计图",55,"warning")}${progress("参展报到通知书",20,"")}${progress("证件注册",50,"warning")}
    </div>
  </div>`);

pages["basic-info"] = pages["product-info"] = pages["brand-info"] = () => shell(`
  <div class="card section-block">
    <div class="card-head"><div><div class="card-title">企业基础资料</div><div class="card-sub">默认展示只读信息，点击“编辑”后可修改</div></div>${badge("已确认","success")}</div>
    <div class="grid grid-3">${kvRows([["企业名称","华丰农业科技有限公司"],["联系人","李明"],["电话","138-0000-8888"],["企业名片/楣板","华丰农业科技"],["统一社会信用代码","91310000MA1X2026"],["展位号","A3-218"]])}</div>
    <div class="form-grid edit-fields"><div class="field"><label>企业名称</label><input value="华丰农业科技有限公司"></div><div class="field"><label>联系人</label><input value="李明"></div><div class="field"><label>电话</label><input value="138-0000-8888"></div><div class="field"><label>企业名片/楣板</label><input value="华丰农业科技"></div></div>
  </div>
  <div class="card section-block">
    <div class="card-head"><div><div class="card-title">企业及展品信息</div><div class="card-sub">产品品类、参展品、资质档案</div></div>${badge("审核中","warning")}</div>
    <div class="grid grid-2"><div>${kvRows([["产品品类","肥料 / 生物农药 / 智慧农业设备"],["参展品","高效水溶肥、土壤改良剂、植保无人机"],["审核意见","营业执照已通过，检测报告待复核"]])}</div><div>${fileRow("营业执照.pdf","已通过","success")}${fileRow("农药登记证.pdf","审核中","warning")}${fileRow("检测报告.pdf","待复核","warning")}</div></div>
    <div class="edit-fields">${uploadZone("上传/替换营业执照、登记证、检测报告")}</div>
  </div>
  <div class="card section-block">
    <div class="card-head"><div><div class="card-title">宣传物料</div><div class="card-sub">LOGO、会刊资料、企业简介</div></div>${badge("待完善","warning")}</div>
    <div class="grid grid-2"><div>${kvRows([["LOGO","hf-logo-final.png"],["会刊资料","2026会刊资料.docx"],["企业简介","专注绿色农业投入品研发与应用服务。"]])}</div><div class="edit-fields"><div class="field"><label>企业简介</label><textarea class="textarea">专注绿色农业投入品研发与应用服务。</textarea></div>${uploadZone("上传 LOGO / 会刊资料")}</div></div>
  </div>`);

pages["booth-standard"] = () => shell(`
  <div class="grid grid-2">
    <div class="card"><div class="card-title">企业名片/楣板确认</div>${kvRows([["展位类型","标准展位"],["展位号","B1-086"],["企业名片","华丰农业科技"],["联系人","李明 138-0000-8888"]])}<div class="form-actions">${button("编辑","",'class="btn js-enter-edit"')}${button("确认信息","primary",'class="btn primary js-confirm-info"')}</div></div>
    <div class="card"><div class="card-title">参展报道通知书</div>${reportNoticeBlock("B1-086")}</div>
  </div>
  <div class="card" style="margin-top:16px"><div class="card-title">证件注册入口</div><p class="text-muted">完成企业名片确认后，可进入人员证件注册。</p>${button("进入证件注册","primary",'onclick="location.href=\'mini-cert.html\'"')}</div>`);

pages["booth-green"] = () => shell(`
  <div class="tabs"><button class="tab-btn active" data-tab="tab-green-plan">在线确认方案</button><button class="tab-btn" data-tab="tab-green-upload">设计图上传</button><button class="tab-btn" data-tab="tab-green-revision">改稿申请</button><button class="tab-btn" data-tab="tab-greennotice">参展报道通知书</button></div>
  <div class="tab-panel active" id="tab-green-plan">
    <div class="grid grid-3 choice-grid"><div class="choice-card"><h3>18㎡ 标准绿搭</h3><div class="text-muted">需上传 2 个画面：1-正、1-反</div></div><div class="choice-card selected"><h3>30㎡ 升级绿搭</h3><div class="text-muted">需上传 4 个画面：1-1、1-2、1-3、1-4</div></div><div class="choice-card"><h3>54㎡ 旗舰绿搭</h3><div class="text-muted">需上传 6 个画面，含主视觉与侧面</div></div></div>
    <div class="card" style="margin-top:16px"><div class="card-title">模板说明</div>${kvRows([["当前模板","G-30-A"],["画面数量","4"],["画面名称","1-1 / 1-2 / 1-3 / 1-4"],["效果图确认","待企业确认"]])}<div class="form-actions">${button("确认方案","primary",'class="btn primary js-confirm" data-message="已确认绿搭方案"')}</div></div>
  </div>
  <div class="tab-panel" id="tab-green-upload"><div class="card"><div class="card-head"><div class="card-title">按模板上传设计图</div>${badge("审核中","warning")}</div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${uploadZone("上传 "+n+" 画面")}<div>${i===2?badge("已驳回","danger"):badge("待审核","warning")}</div>${i===2?`<div class="alert danger">驳回原因：含违规极限词“行业第一”。</div>`:""}</div>`).join("")}</div></div></div>
  <div class="tab-panel" id="tab-green-revision"><div class="grid grid-2"><div class="card"><div class="card-title">改稿申请</div><div class="field"><label>申请说明</label><textarea class="textarea" placeholder="说明需要修改的画面、原因与期望效果"></textarea></div>${button("提交改稿申请","primary",'class="btn primary js-modal" data-title="提交改稿申请" data-body="改稿申请提交后，运营商/后台可查看并处理。"')}</div><div class="card"><div class="card-title">效果图确认</div><div class="effect-grid"><div class="effect-card">效果图 1</div><div class="effect-card">效果图 2</div><div class="effect-card">效果图 3</div></div><div class="form-actions">${button("确认正确","primary",'class="btn primary js-confirm" data-message="已确认效果图"')}${button("反馈错误","danger",'class="btn danger js-modal" data-title="反馈效果图错误" data-body="请填写错误位置与修改建议。"')}</div></div></div></div>
  <div class="tab-panel" id="tab-greennotice">${reportNoticeBlock("A3-218")}</div>`);

pages["booth-raw"] = () => shell(`
  <div class="tabs"><button class="tab-btn active" data-tab="tab-raw-card">企业名片确认</button><button class="tab-btn" data-tab="tab-raw-files">搭建资料</button><button class="tab-btn" data-tab="tab-rawnotice">参展报道通知书</button></div>
  <div class="tab-panel active" id="tab-raw-card"><div class="card"><div class="card-title">企业名片确认</div>${kvRows([["展位类型","光地"],["展位号","C2-106"],["企业名片","华丰农业科技"],["现场联系人","王工 139-0000-6606"]])}<div class="form-actions">${button("编辑","",'class="btn js-enter-edit"')}${button("确认企业名片","primary",'class="btn primary js-confirm-info"')}</div></div></div>
  <div class="tab-panel" id="tab-raw-files"><div class="card"><div class="card-head"><div class="card-title">搭建商与安全资料</div>${badge("待审核","warning")}</div>${fileRow("搭建商营业执照.pdf","已上传","success")}${fileRow("平面图.pdf","审核中","warning")}${fileRow("电路图.pdf","待上传","info")}${fileRow("安全承诺书.pdf","已上传","success")}<div class="edit-fields">${uploadZone("上传搭建商资料 / 平面图 / 电路图 / 安全承诺书")}</div></div></div>
  <div class="tab-panel" id="tab-rawnotice">${reportNoticeBlock("C2-106")}</div>`);

pages["admin-dashboard"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">展商数量</div><div class="stat-value">328</div><div class="stat-foot">同步成功 326 家</div></div><div class="card stat-card"><div class="stat-label">供应商/运营商</div><div class="stat-value">12</div><div class="stat-foot">绿搭、证件、物流协同</div></div><div class="card stat-card"><div class="stat-label">审核通过率</div><div class="stat-value">82%</div><div class="stat-foot">较昨日 +3%</div></div><div class="card stat-card"><div class="stat-label">异常数据</div><div class="stat-value">19</div><div class="stat-foot">待人工处理</div></div></div>
  <div class="grid grid-2" style="margin-top:16px"><div class="card"><div class="card-title">业务总览</div>${progress("展会基础配置",100,"success")}${progress("展商资料审核",76,"warning")}${progress("绿搭/光地审核",62,"warning")}${progress("通知书生成",44,"")}</div><div class="card"><div class="card-title">异常提醒</div><ul class="list"><li class="list-item"><span>绿搭画面触发违规极限词</span>${badge("8 条","danger")}</li><li class="list-item"><span>光地电路图待补充</span>${badge("5 条","warning")}</li><li class="list-item"><span>短信推送失败</span>${badge("6 条","danger")}</li></ul></div></div>`, true);

pages["admin-exhibition"] = () => shell(`
  <div class="card section-block"><div class="card-title">基础配置</div><div class="form-grid"><div class="field"><label>展会名称</label><input value="2026 中国国际农业科技展"></div><div class="field"><label>展会时间</label><input value="2026-09-18 至 2026-09-20"></div><div class="field"><label>展馆地点</label><input value="上海国家会展中心"></div></div></div>
  <div class="card section-block"><div class="card-title">展位类型配置</div>${simpleTable(["类型","业务能力","是否启用"],[["标展","企业名片确认、报到通知书、证件入口",badge("启用","success")],["绿搭","模板选择、设计图上传、改稿申请、效果图确认",badge("启用","success")],["光地","企业名片确认、搭建资料、图纸、安全文件",badge("启用","success")]])}</div>
  <div class="card section-block"><div class="card-title">截止时间配置</div>${simpleTable(["节点","截止时间","通知策略"],[["参展资料提交","2026-07-20","提前 7/3/1 天提醒"],["绿搭画面上传","2026-07-30","驳回自动提醒"],["光地图纸提交","2026-08-05","逾期短信推送"],["证件注册","2026-08-18","每日汇总提醒"]])}</div>`, true);

pages["admin-enterprise"] = () => shell(`
  <div class="toolbar">${button("同步数据","primary",'class="btn primary js-confirm" data-message="已同步展商、展位、订单数据"')}${button("导出列表","",'class="btn js-download"')}<span class="text-muted">支持按展位类型、审核状态、供应商筛选</span></div>
  <div class="card">${simpleTable(["展商","展位","类型","资料状态","展位业务","操作"],[
    ["华丰农业科技","A3-218","绿搭",badge("审核中","warning"),badge("改稿中","danger"),`${button("详情","",'class="btn small js-modal" data-title="展商详情" data-body="企业基础信息、企业资质档案、宣传物料、展位业务记录。"')}${button("编辑","",'class="btn small js-modal" data-title="编辑展商" data-body="进入展商资料编辑状态，可保存草稿或提交审核。"')}`],
    ["绿田肥业","B1-086","标展",badge("已通过","success"),badge("待确认","warning"),`${button("详情","",'class="btn small js-modal" data-title="展商详情" data-body="查看企业基础信息、联系人、电话、营业执照、登记证、会刊资料。"')}`],
    ["丰农装备","C2-106","光地",badge("已确认","success"),badge("图纸审核中","warning"),`${button("详情","",'class="btn small js-modal" data-title="展商详情" data-body="查看光地搭建商资料、平面图、电路图、安全承诺书。"')}`]
  ])}</div>`, true);

pages["admin-review-green"] = () => shell(`
  <div class="toolbar">${button("批量通过","primary",'class="btn primary js-confirm" data-message="已批量通过选中画面"')}${button("违规词扫描","",'class="btn js-modal" data-title="违规极限词提示" data-body="检测到：行业第一、国家级、最高效。请审核人员重点复核。"')}</div>
  <div class="card">${simpleTable(["展商","规格模板","画面","单图状态","改稿","通知书","操作"],[
    ["华丰农业科技","G-30-A","1-1 / 1-2 / 1-3 / 1-4",badge("1 张驳回","danger"),badge("待处理","warning"),badge("待生成","warning"),`${button("详情","",'onclick="location.href=\'admin-green-detail.html\'"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回画面" data-body="填写单图驳回原因，并自动通知展商。"')}`],
    ["绿田肥业","G-18-A","1-正 / 1-反",badge("已通过","success"),badge("无","success"),badge("已生成","success"),`${button("详情","",'onclick="location.href=\'admin-green-detail.html\'"')}`]
  ])}</div>`, true);

pages["admin-green-detail"] = () => shell(`
  <div class="card section-block"><div class="card-head"><div><div class="card-title">绿搭详情：华丰农业科技</div><div class="card-sub">规格 G-30-A · 30㎡ · 4 个画面</div></div>${badge("改稿中","danger")}</div>${kvRows([["展位号","A3-218"],["画面名称","1-1 / 1-2 / 1-3 / 1-4"],["违规提示","1-3 含“行业第一”"],["改稿申请","已提交，待运营商处理"]])}</div>
  <div class="grid grid-4">${["1-1 已通过","1-2 待审核","1-3 已驳回","1-4 待审核"].map(x=>`<div class="card upload-card"><div class="upload-name">${x}</div><div class="template-preview"></div>${x.includes("驳回")?badge("已驳回","danger"):badge("待/已审","warning")}</div>`).join("")}</div>
  <div class="card section-block">${reportNoticeBlock("A3-218")}</div>`, true);

pages["admin-review-raw"] = () => shell(`
  <div class="card">${simpleTable(["展商","展位","搭建商资料","图纸审核","安全文件","通知书","操作"],[
    ["丰农装备","C2-106",badge("已上传","success"),badge("电路图待补","warning"),badge("已通过","success"),badge("待生成","warning"),`${button("详情","",'onclick="location.href=\'admin-raw-detail.html\'"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回光地资料" data-body="填写图纸或安全文件驳回原因。"')}`],
    ["华垦科技","C2-108",badge("待审核","warning"),badge("待审核","warning"),badge("待审核","warning"),badge("未生成","info"),`${button("详情","",'onclick="location.href=\'admin-raw-detail.html\'"')}`]
  ])}</div>`, true);

pages["admin-raw-detail"] = () => shell(`
  <div class="card section-block"><div class="card-title">光地详情：丰农装备</div>${kvRows([["展位号","C2-106"],["搭建商","上海会展搭建有限公司"],["现场负责人","赵工 139-1111-2222"],["审核状态","电路图待补充"]])}</div>
  <div class="card section-block"><div class="card-title">资料审核</div>${fileRow("搭建商营业执照.pdf","已通过","success")}${fileRow("平面图.pdf","已通过","success")}${fileRow("电路图.pdf","已驳回","danger")}${fileRow("安全承诺书.pdf","已通过","success")}</div>
  <div class="card section-block">${reportNoticeBlock("C2-106")}</div>`, true);

pages["admin-message"] = () => shell(`
  <div class="grid grid-2"><div class="card"><div class="card-title">短信模板配置</div><div class="field"><label>模板名称</label><input value="审核驳回提醒"></div><div class="field"><label>短信内容</label><textarea class="textarea">【展务系统】您的{业务类型}审核未通过，原因：{驳回原因}，请于{截止日期}前修改。</textarea></div>${button("保存模板","primary",'class="btn primary js-confirm" data-message="短信模板已保存"')}</div><div class="card"><div class="card-title">推送短信</div><div class="field"><label>接收对象</label><input value="绿搭审核驳回展商"></div><div class="field"><label>推送内容</label><textarea class="textarea">请及时处理绿搭画面改稿申请。</textarea></div>${button("推送短信","primary",'class="btn primary js-confirm" data-message="短信已加入发送队列"')}</div></div>
  <div class="card section-block"><div class="card-title">自动通知记录</div>${simpleTable(["时间","渠道","对象","场景","状态"],[["06-24 10:12","短信+站内信","华丰农业科技","绿搭驳回",badge("成功","success")],["06-24 09:40","短信","丰农装备","光地图纸待补",badge("失败","danger")],["06-23 18:00","站内信","全部展商","截止提醒",badge("成功","success")]])}</div>`, true);

pages["admin-settings"] = () => shell(`
  <div class="grid grid-2"><div class="card"><div class="card-title">角色权限</div>${simpleTable(["角色","权限范围","状态"],[["管理员","展会、展商、审核、消息、设置",badge("启用","success")],["审核员","绿搭审核、光地审核、通知书",badge("启用","success")],["运营商","展位业务、模板、通知、证件协同",badge("启用","success")]])}</div><div class="card"><div class="card-title">违规极限词配置</div><div class="tag-list"><span class="face-tag">行业第一</span><span class="face-tag">国家级</span><span class="face-tag">最高效</span><span class="face-tag">绝对安全</span></div>${button("新增词库","",'class="btn js-modal" data-title="新增违规词" data-body="录入词语、风险等级和提示说明。"')}</div></div>
  <div class="grid grid-2" style="margin-top:16px"><div class="card"><div class="card-title">审核流配置</div>${simpleTable(["业务","流程"],[["参展资料","展商提交 → 后台审核 → 通过/驳回"],["绿搭","上传设计图 → 单图审核 → 改稿/通过 → 效果图确认"],["光地","资料提交 → 图纸审核 → 安全文件审核 → 通知书"]])}</div><div class="card"><div class="card-title">绿搭模板配置</div>${simpleTable(["规格","上传画面数量","画面名称","状态"],[["18㎡","2","1-正、1-反",badge("启用","success")],["30㎡","4","1-1、1-2、1-3、1-4",badge("启用","success")],["54㎡","6","主画面、侧面1、侧面2、背面、入口、柱面",badge("启用","success")]])}${button("新增模板","primary",'class="btn primary js-modal" data-title="新增绿搭模板" data-body="配置规格、上传画面数量、画面名称、模板文件和效果图。"')}</div></div>`, true);

pages["operator-dashboard"] = () => operatorShell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">同步展商</div><div class="stat-value">326</div><div class="stat-foot">今日新增 12</div></div><div class="card stat-card"><div class="stat-label">绿搭模板</div><div class="stat-value">9</div><div class="stat-foot">启用 7 套</div></div><div class="card stat-card"><div class="stat-label">通知书待生成</div><div class="stat-value">42</div><div class="stat-foot">绿搭 28 / 光地 14</div></div><div class="card stat-card"><div class="stat-label">证件异常</div><div class="stat-value">11</div><div class="stat-foot">照片/身份证待补</div></div></div>
  <div class="grid grid-2" style="margin-top:16px"><div class="card"><div class="card-title">运营待办</div><ul class="list"><li class="list-item"><span>处理绿搭改稿申请</span>${badge("8","danger")}</li><li class="list-item"><span>复核报到通知书现场信息</span>${badge("42","warning")}</li><li class="list-item"><span>同步展位订单变更</span>${badge("3","warning")}</li></ul></div><div class="card"><div class="card-title">业务进度</div>${progress("展会数据同步",96,"success")}${progress("绿搭模板配置",80,"warning")}${progress("通知书协同",58,"warning")}${progress("证件协同",72,"warning")}</div></div>`);

pages["operator-exhibition"] = () => operatorShell(`
  <div class="toolbar">${button("同步展会数据","primary",'class="btn primary js-confirm" data-message="已同步展会、展区、展位、展商、订单数据"')}${button("查看同步日志","",'class="btn js-modal" data-title="同步日志" data-body="展示最近 20 条同步记录和异常原因。"')}</div>
  <div class="card">${simpleTable(["数据项","来源","数量","最近同步","状态"],[["展会信息","主办方系统","1","06-24 09:00",badge("成功","success")],["展位数据","票务/展位系统","420","06-24 09:05",badge("成功","success")],["展商数据","CRM","326","06-24 09:08",badge("部分异常","warning")],["订单数据","财务系统","318","06-24 09:10",badge("成功","success")]])}</div>`);

pages["operator-booth"] = () => operatorShell(`
  <div class="grid grid-3"><div class="card"><div class="card-title">标展业务</div><p class="text-muted">企业名片确认、楣板规则、报到通知书。</p>${button("配置规则","primary",'class="btn primary js-modal" data-title="标展规则" data-body="配置企业名片字段、确认截止时间和通知书生成条件。"')}</div><div class="card"><div class="card-title">绿搭业务</div><p class="text-muted">规格模板、画面上传、改稿申请、效果图确认。</p>${button("进入绿搭模板","primary",'onclick="location.href=\'operator-green.html\'"')}</div><div class="card"><div class="card-title">光地业务</div><p class="text-muted">企业名片、搭建商资料、平面/电路图、安全文件。</p>${button("配置资料项","primary",'class="btn primary js-modal" data-title="光地资料项" data-body="配置搭建商资质、图纸和安全文件的必填规则。"')}</div></div>
  <div class="card section-block"><div class="card-title">业务节点配置</div>${simpleTable(["业务","节点","截止时间","自动通知"],[["标展","企业名片确认","07-20","开启"],["绿搭","设计图上传","07-30","开启"],["绿搭","效果图确认","08-10","开启"],["光地","安全资料提交","08-05","开启"]])}</div>`);

pages["operator-green"] = () => operatorShell(`
  <div class="toolbar">${button("新增模板","primary",'class="btn primary js-modal" data-title="新增绿搭模板" data-body="配置规格、画面数量、画面名称、模板文件、示意图和启用状态。"')}${button("批量导入模板","",'class="btn js-upload"')}</div>
  <div class="card">${simpleTable(["模板编号","适用规格","上传画面数量","画面名称","企业端状态","操作"],[["G-18-A","18㎡","2","1-正、1-反",badge("可选择","success"),button("编辑","",'class="btn small js-modal" data-title="编辑模板" data-body="维护规格、数量、名称、模板图和效果图。"')],["G-30-A","30㎡","4","1-1、1-2、1-3、1-4",badge("可选择","success"),button("编辑","",'class="btn small js-modal" data-title="编辑模板" data-body="30 平米模板需上传 4 个面。"')],["G-54-B","54㎡","6","主画面、侧面1、侧面2、背面、入口、柱面",badge("停用","info"),button("启用","primary",'class="btn small primary js-confirm" data-message="模板已启用"')]])}</div>
  <div class="card section-block"><div class="card-title">模板上传结构示例</div><div class="template-face-list"><span class="face-tag">1-1</span><span class="face-tag">1-2</span><span class="face-tag">1-3</span><span class="face-tag">1-4</span></div>${uploadZone("上传模板源文件 / 预览图 / 效果图")}</div>`);

pages["operator-notice"] = () => operatorShell(`
  <div class="grid grid-2"><div class="card"><div class="card-title">通知书现场信息配置</div><div class="field"><label>报到时间</label><input value="2026-09-17 09:00 - 18:00"></div><div class="field"><label>地点</label><input value="上海国家会展中心 北登录厅 2 号服务台"></div><div class="field"><label>对接人联系方式</label><input value="张经理 138-0000-2026"></div><div class="field"><label>注意事项</label><textarea class="textarea">展品运输请提前预约货车路线；进场资料包含营业执照复印件、展品清单、施工/布展资料。</textarea></div>${button("保存配置","primary",'class="btn primary js-confirm" data-message="通知书现场信息已保存"')}</div><div class="card">${reportNoticeBlock("A3-218")}</div></div>
  <div class="card section-block"><div class="card-title">生成记录</div>${simpleTable(["展商","展位","业务","生成状态","下载"],[["华丰农业科技","A3-218","绿搭",badge("待生成","warning"),button("生成","primary",'class="btn small primary js-confirm" data-message="通知书已生成"')],["丰农装备","C2-106","光地",badge("已生成","success"),button("下载","",'class="btn small js-download"')]])}</div>`);

pages["operator-cert"] = () => operatorShell(`
  <div class="card">${simpleTable(["企业","已注册/额度","异常原因","状态","操作"],[["华丰农业科技","3/6","2 人照片不合规",badge("待补充","warning"),button("提醒","primary",'class="btn small primary js-confirm" data-message="已发送证件补充提醒"')],["绿田肥业","5/5","无",badge("完成","success"),button("导出","",'class="btn small js-download"')],["丰农装备","2/4","身份证信息缺失",badge("异常","danger"),button("查看","",'class="btn small js-modal" data-title="证件异常" data-body="查看人员名单、照片、身份证与审核记录。"')]])}</div>`);

pages["operator-message"] = () => operatorShell(`
  <div class="grid grid-2"><div class="card"><div class="card-title">运营通知模板</div><div class="field"><label>模板场景</label><input value="绿搭改稿提醒"></div><div class="field"><label>通知内容</label><textarea class="textarea">您的绿搭设计图需要修改，请按驳回原因重新上传。</textarea></div>${button("保存模板","primary",'class="btn primary js-confirm" data-message="模板已保存"')}</div><div class="card"><div class="card-title">推送记录</div>${simpleTable(["时间","对象","渠道","状态"],[["06-24 10:20","华丰农业科技","短信+站内信",badge("成功","success")],["06-24 09:40","丰农装备","短信",badge("失败","danger")]])}</div></div>`);

pages["mini-home"] = () => mobileShell(`
  <div class="mini-card primary-card"><div class="mini-kicker">我的展会</div><h2>2026 中国国际农业科技展</h2><p>展位 A3-218 · 绿搭 36㎡</p></div>
  <div class="mini-card"><div class="mini-title">当前进度</div>${progress("参展资料",86,"success")}${progress("展位业务",55,"warning")}${progress("证件注册",50,"warning")}</div>
  <div class="mini-card"><div class="mini-title">展位信息</div>${kvRows([["展位类型","绿搭"],["展位号","A3-218"],["企业名片","华丰农业科技"]])}</div>`, "home", "首页");

pages["mini-booth"] = () => mobileShell(`
  <div class="mini-card"><div class="mini-title">展位业务</div><div class="mobile-actions"><a href="mini-notice.html" class="mobile-action">参展报道通知书</a><a href="mini-progress.html" class="mobile-action">审核记录</a><a href="mini-cert.html" class="mobile-action">证件注册</a></div></div>
  <div class="mini-card"><div class="mini-title">绿搭画面</div><p>当前模板 G-30-A，需要上传 4 个画面。</p><div class="template-face-list"><span class="face-tag">1-1</span><span class="face-tag">1-2</span><span class="face-tag">1-3</span><span class="face-tag">1-4</span></div>${badge("1 张已驳回","danger")}</div>`, "booth", "展位业务");

pages["mini-notice"] = () => mobileShell(`<div class="mini-card">${reportNoticeBlock("A3-218")}</div>`, "booth", "报到通知书");

/* ===== 0624 最终角色版：管理后台 / 供应商PC / 展商PC / 展商小程序 ===== */
enterpriseNav.length = 0;
enterpriseNav.push(
  ["dashboard.html","dashboard","◇","首页"],
  ["booth-standard.html","booth-standard","□","标展管理"],
  ["booth-green.html","booth-green","◆","绿搭管理"],
  ["booth-raw.html","booth-raw","■","光地管理"],
  ["message.html","message","✉","消息管理"]
);

adminNav.length = 0;
adminNav.push(
  ["admin-dashboard.html","admin-dashboard","◇","总览"],
  ["admin-exhibition.html","admin-exhibition","▣","展务管理"],
  ["admin-supplier.html","admin-supplier","◎","供应商管理"],
  ["admin-enterprise.html","admin-enterprise","◆","展商管理"],
  ["admin-message.html","admin-message","✉","消息通知"],
  ["admin-settings.html","admin-settings","⚙","系统设置"]
);

const supplierNav = [
  ["supplier-green.html","supplier-green","◆","绿搭展位审核"],
  ["supplier-standard.html","supplier-standard","□","标展展位审核"],
  ["supplier-raw.html","supplier-raw","■","光地展位审核"],
  ["supplier-message.html","supplier-message","✉","消息通知"]
];

Object.assign(meta, {
  "dashboard": ["首页","面向参展企业，按流程维护企业信息并提交展位资料"],
  "booth-standard": ["标展管理","提交与查看标展相关设计图或材料"],
  "booth-green": ["绿搭管理","提交与查看绿搭展位相关设计图或材料，等待供应商回传效果图"],
  "booth-raw": ["光地管理","提交与查看光地展位报馆资料、搭建图纸与安全证明"],
  "message": ["消息管理","接收系统通知、审核反馈与效果图确认提醒"],
  "admin-dashboard": ["总览","面向系统管理员，展示关键数据统计看板"],
  "admin-exhibition": ["展务管理","展会列表、搜索、同步慕渊云数据和参数配置"],
  "admin-supplier": ["供应商管理","管理供应商账号，并将展商资源分配给指定供应商"],
  "admin-enterprise": ["展商管理","同步企业数据、筛选展商并审核展商修改后提交的资料"],
  "admin-enterprise-detail": ["展商详情","查看企业基础信息、资质档案和宣传物料"],
  "admin-message": ["消息通知","系统内部消息管理与推送"],
  "admin-settings": ["系统设置","极限词、资料模板、参展报道书模板等全局配置"],
  "supplier-green": ["绿搭展位审核","审核展商提交的绿搭设计图，审核通过后生成并回传效果图"],
  "supplier-green-detail": ["绿搭审核详情","逐张审核绿搭设计图，并生成效果图"],
  "supplier-standard": ["标展展位审核","查看并审核标展展位设计图或材料"],
  "supplier-standard-detail": ["标展审核详情","审核标展资料并回传处理结果"],
  "supplier-raw": ["光地展位审核","审核光地报馆资料、搭建图纸与安全证明"],
  "supplier-raw-detail": ["光地审核详情","查看光地资料清单并完成合规性审核"],
  "supplier-message": ["消息通知","供应商内部消息管理与推送"],
  "operator-dashboard": ["供应商PC端","面向审核人员，负责资料合规审核及效果图生成"],
  "operator-green": ["绿搭展位审核","审核展商提交的绿搭设计图，审核通过后生成并回传效果图"],
  "operator-booth": ["标展展位审核","查看并审核标展展位设计图或材料"],
  "operator-exhibition": ["光地展位审核","审核光地报馆资料、搭建图纸与安全证明"],
  "operator-message": ["消息通知","供应商内部消息管理与推送"]
});

function supplierShell(content) {
  const m = meta[page] || ["供应商PC端",""];
  return `
  <div class="shell">
    <aside class="sidebar supplier-side">
      <div class="brand"><div class="brand-mark">审</div><div><strong>供应商审核端</strong><small>SUPPLIER REVIEW</small></div></div>
      <div class="nav-label">展位资料审核</div>
      ${navHTML(supplierNav)}
    </aside>
    <main class="main">
      <header class="topbar">
        <div class="crumb">2026 中国国际农业科技展 / ${m[0]}</div>
        <div class="top-actions"><a href="supplier-message.html" class="bell">✉</a><div class="user"><div class="avatar">审</div><div><strong>审核人员</strong><div class="card-sub">供应商账号</div></div></div></div>
      </header>
      <div class="content">
        <div class="page-head"><div><h1>${m[0]}</h1><p>${m[1]}</p></div><div class="head-actions">${badge("审核中","warning")}</div></div>
        ${content}
      </div>
    </main>
  </div>${globalUI()}`;
}

const searchBar = (placeholder="请输入关键词搜索") => `<div class="toolbar"><input class="input" placeholder="${placeholder}" style="max-width:280px"><select class="input" style="max-width:160px"><option>全部状态</option><option>待审核</option><option>已通过</option><option>已驳回</option></select></div>`;

pages.dashboard = () => shell(`
  <div class="hero"><div><span class="hero-kicker">展商PC端 · 信息维护与展位资料提交</span><h2>请按流程完成资料确认与提交</h2><p>从企业信息确认开始，依次完成标展/绿搭/光地资料提交。大文件上传请在 PC 端完成，小程序仅用于进度查看和效果图确认。</p><div class="head-actions">${button("维护企业信息","primary",'onclick="location.href=\'basic-info.html\'"')}${button("查看消息反馈","",'onclick="location.href=\'message.html\'"')}</div></div></div>
  <div class="grid grid-4" style="margin-top:16px"><div class="card stat-card"><div class="stat-label">企业信息</div><div class="stat-value" style="font-size:22px">待确认</div><div class="stat-foot">修改后需后台审核</div></div><div class="card stat-card"><div class="stat-label">标展资料</div><div class="stat-value">2/3</div><div class="stat-foot">设计图待补充</div></div><div class="card stat-card"><div class="stat-label">绿搭效果图</div><div class="stat-value" style="font-size:22px">待确认</div><div class="stat-foot">供应商已回传 3 张</div></div><div class="card stat-card"><div class="stat-label">光地报馆</div><div class="stat-value" style="font-size:22px">审核中</div><div class="stat-foot">安全证明待复核</div></div></div>
  <div class="card section-block"><div class="card-title">操作指引</div><div class="steps"><div class="step done">1 企业信息确认</div><div class="step active">2 展位资料提交</div><div class="step">3 供应商审核</div><div class="step">4 效果图确认</div><div class="step">5 报到通知查看</div></div></div>`);

pages["booth-standard"] = () => shell(`
  <div class="card"><div class="card-head"><div><div class="card-title">标展资料提交</div><div class="card-sub">提交与查看标展相关设计图或材料</div></div>${badge("待补充","warning")}</div>${fileRow("楣板信息确认单.pdf","已提交","success")}${fileRow("标展设计图.pdf","待补充","warning")}${fileRow("用电需求表.pdf","已提交","success")}<div class="edit-fields">${uploadZone("上传标展设计图或补充材料")}</div><div class="form-actions">${button("保存草稿","")}${button("提交审核","primary",'class="btn primary js-confirm" data-message="标展资料已提交供应商审核"')}</div></div>
  <div class="card section-block"><div class="card-title">审核反馈</div><ul class="list"><li class="list-item"><span>设计图尺寸需按模板重新导出</span>${badge("待处理","warning")}</li></ul></div>`);

pages["booth-green"] = () => shell(`
  <div class="tabs"><button class="tab-btn active" data-tab="tab-green-file">资料提交</button><button class="tab-btn" data-tab="tab-green-render">效果图确认</button><button class="tab-btn" data-tab="tab-green-log">审核记录</button></div>
  <div class="tab-panel active" id="tab-green-file"><div class="card"><div class="card-head"><div><div class="card-title">绿搭设计图/材料</div><div class="card-sub">按资料模板提交，审核通过后供应商生成效果图</div></div>${badge("审核中","warning")}</div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${uploadZone("上传 "+n)}${i===2?badge("已驳回","danger"):badge("已提交","warning")}</div>`).join("")}</div><div class="form-actions">${button("保存草稿","")}${button("提交审核","primary",'class="btn primary js-confirm" data-message="绿搭资料已提交供应商审核"')}</div></div></div>
  <div class="tab-panel" id="tab-green-render"><div class="card"><div class="card-title">供应商回传效果图</div><div class="effect-grid"><div class="effect-card">效果图 A</div><div class="effect-card">效果图 B</div><div class="effect-card">效果图 C</div></div><div class="form-actions">${button("确认通过","primary",'class="btn primary js-confirm" data-message="已确认效果图"')}${button("反馈修改意见","danger",'class="btn danger js-modal" data-title="反馈修改意见" data-body="请描述需要调整的位置与原因。"')}</div></div></div>
  <div class="tab-panel" id="tab-green-log"><div class="card">${simpleTable(["时间","节点","处理人","结果"],[["06-24 10:20","供应商逐图审核","审核员王工",badge("1 张驳回","danger")],["06-23 16:00","展商提交资料","华丰农业科技",badge("已提交","warning")]])}</div></div>`);

pages["booth-raw"] = () => shell(`
  <div class="card"><div class="card-head"><div><div class="card-title">光地报馆资料</div><div class="card-sub">提交搭建图纸、安全证明等光地资料</div></div>${badge("审核中","warning")}</div>${fileRow("搭建商营业执照.pdf","已通过","success")}${fileRow("平面图.pdf","审核中","warning")}${fileRow("电路图.pdf","待补充","warning")}${fileRow("安全证明.pdf","已提交","success")}<div class="edit-fields">${uploadZone("上传光地报馆资料 / 搭建图纸 / 安全证明")}</div><div class="form-actions">${button("保存草稿","")}${button("提交审核","primary",'class="btn primary js-confirm" data-message="光地资料已提交供应商审核"')}</div></div>`);

pages["admin-dashboard"] = () => shell(`
  <div class="grid grid-4"><div class="card stat-card"><div class="stat-label">展会数量</div><div class="stat-value">12</div><div class="stat-foot">慕渊云同步 10 场</div></div><div class="card stat-card"><div class="stat-label">供应商账号</div><div class="stat-value">8</div><div class="stat-foot">已分配展商 286 家</div></div><div class="card stat-card"><div class="stat-label">展商资料待审</div><div class="stat-value">46</div><div class="stat-foot">修改后提交需审核</div></div><div class="card stat-card"><div class="stat-label">超时禁止提交</div><div class="stat-value">7</div><div class="stat-foot">按参数配置自动限制</div></div></div>
  <div class="grid grid-2" style="margin-top:16px"><div class="card"><div class="card-title">系统职责</div><p class="text-muted">管理后台面向系统管理员，承担全局配置、账号与资源分配、企业资料审核职责。</p>${progress("展务数据同步",92,"success")}${progress("供应商分配",76,"warning")}${progress("企业资料审核",68,"warning")}</div><div class="card"><div class="card-title">待处理事项</div><ul class="list"><li class="list-item"><span>新同步展商待分配供应商</span>${badge("18","warning")}</li><li class="list-item"><span>展商修改资料待后台审核</span>${badge("46","danger")}</li><li class="list-item"><span>资料上传截止参数待确认</span>${badge("3","warning")}</li></ul></div></div>`, true);

pages["admin-exhibition"] = () => shell(`
  ${searchBar("按展会名称搜索")}<div class="toolbar">${button("同步慕渊云数据","primary",'class="btn primary js-confirm" data-message="已同步外部系统展会数据"')}</div>
  <div class="card">${simpleTable(["展会名称","时间","地点","状态","资料截止时间","操作"],[["2026 中国国际农业科技展","2026-09-18 至 09-20","上海国家会展中心",badge("进行中","success"),"2026-07-30",button("参数配置","",'class="btn small js-modal" data-title="资料上传截止时间" data-body="超时后系统禁止展商继续提交资料。"')],["2026 西南农资订货会","2026-10-12 至 10-14","成都世纪城",badge("筹备中","warning"),"2026-08-20",button("参数配置","",'class="btn small js-modal" data-title="参数配置" data-body="按展会设置不同资料截止日期。"')]])}</div>`, true);

pages["admin-supplier"] = () => shell(`
  ${searchBar("按供应商名称搜索")}<div class="card">${simpleTable(["供应商","联系人","负责展会","已分配展商","状态","操作"],[["上海展装服务有限公司","王工 138-1111-2222","中国国际农业科技展","86",badge("启用","success"),button("分配展商","primary",'class="btn small primary js-modal" data-title="分配展商" data-body-html="<div class=\'field\'><label>选择展会</label><select class=\'select\'><option>2026 中国国际农业科技展</option><option>2026 西南农资订货会</option></select></div><div class=\'field\' style=\'margin-top:14px\'><label>从已有展商中选择（可多选）</label><div class=\'assign-list\'><label class=\'check-row-item\'><input type=\'checkbox\' checked> 华丰农业科技 · A3-218 · 绿搭</label><label class=\'check-row-item\'><input type=\'checkbox\'> 绿田肥业 · B1-086 · 标展</label><label class=\'check-row-item\'><input type=\'checkbox\'> 丰农装备 · C2-106 · 光地</label><label class=\'check-row-item\'><input type=\'checkbox\'> 华垦科技 · C2-108 · 光地</label></div><div class=\'help\'>分配后，该供应商可查看并审核所选展商提交的数据。</div></div>"')],["华东会展制作中心","陈经理 139-2222-3333","西南农资订货会","42",badge("启用","success"),button("分配展商","primary",'class="btn small primary js-modal" data-title="分配展商" data-body-html="<div class=\'field\'><label>选择展会</label><select class=\'select\'><option>2026 西南农资订货会</option><option>2026 中国国际农业科技展</option></select></div><div class=\'field\' style=\'margin-top:14px\'><label>从已有展商中选择（可多选）</label><div class=\'assign-list\'><label class=\'check-row-item\'><input type=\'checkbox\' checked> 云农生物 · D1-032 · 绿搭</label><label class=\'check-row-item\'><input type=\'checkbox\'> 川田农资 · B2-018 · 标展</label><label class=\'check-row-item\'><input type=\'checkbox\'> 金穗装备 · C1-066 · 光地</label></div><div class=\'help\'>支持按展会、展位类型筛选后批量勾选。</div></div>"')]])}</div>`, true);

pages["admin-enterprise"] = () => shell(`
  ${searchBar("按展商名称 / 展会搜索")}<div class="toolbar">${button("同步慕渊云数据","primary",'class="btn primary js-confirm" data-message="已同步外部系统企业数据，慕渊云同步数据默认免审"')}<select class="input" style="max-width:160px"><option>全部展会</option><option>农业科技展</option></select><select class="input" style="max-width:160px"><option>全部来源</option><option>慕渊云同步</option><option>展商修改提交</option></select></div>
  <div class="card">${simpleTable(["展商","展会","展位","来源","资料状态","审核规则","操作"],[["华丰农业科技","中国国际农业科技展","A3-218","展商修改提交",badge("待后台审核","warning"),"修改后需审核",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small js-modal" data-title="审核展商资料" data-body="确认企业基础信息、资质档案和宣传物料是否合规。可通过或驳回并填写原因。"')}`],["绿田肥业","中国国际农业科技展","B1-086","慕渊云同步",badge("免审","success"),"同步数据免审",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small js-modal" data-title="审核展商资料" data-body="该展商来自慕渊云同步，默认免审；仍可进入人工复核。"')}`]])}</div>`, true);

pages["admin-enterprise-detail"] = () => shell(`
  <div class="card section-block"><div class="card-head"><div><div class="card-title">企业基础信息</div><div class="card-sub">从慕渊云同步的数据免审；展商修改后提交需后台审核</div></div>${badge("待审核","warning")}</div>${kvRows([["企业名称","华丰农业科技有限公司"],["联系人","李明"],["电话","138-0000-8888"]])}<div class="form-actions">${button("审核通过","primary",'class="btn primary js-confirm" data-message="企业基础信息已审核通过"')}${button("驳回修改","danger",'class="btn danger js-modal" data-title="驳回企业信息" data-body="请填写驳回原因。"')}</div></div>
  <div class="card section-block"><div class="card-title">企业资质档案</div>${fileRow("营业执照.pdf","已上传","success")}${fileRow("登记证.pdf","待审核","warning")}${fileRow("检测报告.pdf","待审核","warning")}<div class="edit-fields">${uploadZone("后台补充上传 / 替换资质文件")}</div></div>
  <div class="card section-block"><div class="card-title">宣传物料页</div>${fileRow("LOGO.png","已上传","success")}${fileRow("会刊资料.docx","待审核","warning")}<div class="edit-fields">${uploadZone("上传 LOGO / 会刊资料")}</div></div>`, true);

pages["admin-message"] = () => shell(`
  <div class="grid grid-2"><div class="card"><div class="card-title">内部消息推送</div><div class="field"><label>接收对象</label><div class="recipient-box"><select class="select"><option>供应商</option><option>展商</option><option>系统管理员</option></select><select class="select"><option>全部供应商</option><option>上海展装服务有限公司</option><option>华东会展制作中心</option><option>手动多选</option></select></div><div class="assign-list compact"><label class="check-row-item"><input type="checkbox" checked> 上海展装服务有限公司</label><label class="check-row-item"><input type="checkbox"> 华东会展制作中心</label><label class="check-row-item"><input type="checkbox"> 指定展商：华丰农业科技</label></div><div class="help">先选择对象类型，再选择具体接收方；支持多选后统一推送。</div></div><div class="field"><label>消息内容</label><textarea class="textarea">请及时处理待审核资料。</textarea></div>${button("推送消息","primary",'class="btn primary js-confirm" data-message="消息已推送"')}</div><div class="card"><div class="card-title">通知记录</div>${simpleTable(["时间","对象","类型","状态"],[["06-24 10:30","上海展装服务有限公司","审核提醒",badge("成功","success")],["06-24 09:20","华丰农业科技","驳回反馈",badge("成功","success")]])}</div></div>`, true);

pages["admin-settings"] = () => shell(`
  <div class="grid grid-3"><div class="card"><div class="card-title">极限词管理</div><div class="tag-list"><span class="face-tag">行业第一</span><span class="face-tag">国家级</span><span class="face-tag">最高效</span></div>${button("维护词库","primary",'class="btn primary js-modal" data-title="极限词管理" data-body="维护敏感词库，用于内容校验。"')}</div><div class="card"><div class="card-title">资料模板配置</div>${simpleTable(["展位类型","需上传材料"],[["标展","楣板信息、设计图、用电需求"],["绿搭","1-1、1-2、1-3、1-4 设计图"],["特装/光地","搭建图纸、安全证明、报馆资料"]])}</div><div class="card"><div class="card-title">参展报道书模板</div>${kvRows([["适用展会","2026 中国国际农业科技展"],["报道时间","2026-09-17 09:00"],["报道地点","北登录厅 2 号服务台"]])}${button("配置模板","primary",'class="btn primary js-modal" data-title="参展报道书模板配置" data-body="支持按展会定制不同模板，灵活设置报道时间、地点等信息。"')}</div></div>`, true);

const supplierListPage = (type) => supplierShell(`
  ${searchBar("按展商名称 / 展位号搜索")}<div class="card">${simpleTable(["展商","展位","提交材料","审核状态","效果图","操作"],[
    ["华丰农业科技","A3-218",type==="green"?"4 张设计图":type==="standard"?"标展设计图、用电表":"搭建图纸、安全证明",badge("待审核","warning"),type==="green"?badge("待生成","warning"):badge("无需","info"),button("查看详情","primary",`class="btn small primary" onclick="location.href='${type==="green"?"supplier-green-detail.html":type==="standard"?"supplier-standard-detail.html":"supplier-raw-detail.html"}'"`)],
    ["绿田肥业","B1-086","资料齐全",badge("已通过","success"),type==="green"?badge("已回传","success"):badge("无需","info"),button("查看详情","primary",`class="btn small primary" onclick="location.href='${type==="green"?"supplier-green-detail.html":type==="standard"?"supplier-standard-detail.html":"supplier-raw-detail.html"}'"`)]
  ])}</div>`);

pages["supplier-green"] = () => supplierListPage("green");
pages["supplier-standard"] = () => supplierListPage("standard");
pages["supplier-raw"] = () => supplierListPage("raw");

pages["supplier-green-detail"] = () => supplierShell(`
  <div class="card section-block"><div class="card-head"><div><div class="card-title">华丰农业科技 · 绿搭设计图审核</div><div class="card-sub">支持逐张审核设计图，全部通过后生成效果图并回传</div></div>${badge("逐图审核","warning")}</div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div><div class="template-preview">设计图预览</div><div class="form-actions">${button("通过","primary",'class="btn small primary js-confirm" data-message="单图已通过"')}${button("驳回","danger",'class="btn small danger js-modal" data-title="驳回单图" data-body="填写该设计图不合规原因。"')}</div></div>`).join("")}</div></div>
  <div class="card section-block"><div class="card-title">效果图生成与回传</div><div class="effect-grid"><div class="effect-card">效果图 1</div><div class="effect-card">效果图 2</div><div class="effect-card">效果图 3</div></div><div class="form-actions">${button("生成效果图","primary",'class="btn primary js-confirm" data-message="效果图已生成"')}${button("回传给展商","",'class="btn js-confirm" data-message="效果图已回传展商小程序和PC端"')}</div></div>`);

pages["supplier-standard-detail"] = () => supplierShell(`<div class="card section-block"><div class="card-title">标展审核详情</div>${fileRow("楣板确认单.pdf","已提交","success")}${fileRow("标展设计图.pdf","待审核","warning")}${fileRow("用电需求表.pdf","已提交","success")}<div class="form-actions">${button("审核通过","primary",'class="btn primary js-confirm" data-message="标展资料已通过"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回标展资料" data-body="填写驳回原因。"')}</div></div>`);
pages["supplier-raw-detail"] = () => supplierShell(`<div class="card section-block"><div class="card-title">光地审核详情</div>${fileRow("搭建图纸.pdf","待审核","warning")}${fileRow("安全证明.pdf","待审核","warning")}${fileRow("报馆资料.zip","已上传","success")}<div class="form-actions">${button("审核通过","primary",'class="btn primary js-confirm" data-message="光地资料已通过"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回光地资料" data-body="填写图纸或证明材料问题。"')}</div></div>`);
pages["supplier-message"] = () => supplierShell(`<div class="grid grid-2"><div class="card"><div class="card-title">消息推送</div><div class="field"><label>对象</label><input value="华丰农业科技"></div><div class="field"><label>内容</label><textarea class="textarea">您的设计图已审核完成，请确认效果图。</textarea></div>${button("推送消息","primary",'class="btn primary js-confirm" data-message="消息已推送"')}</div><div class="card"><div class="card-title">消息记录</div>${simpleTable(["时间","对象","内容","状态"],[["06-24 11:00","华丰农业科技","效果图确认提醒",badge("成功","success")],["06-24 10:10","绿田肥业","资料驳回通知",badge("成功","success")]])}</div></div>`);

pages["operator-dashboard"] = () => supplierShell(`<div class="card"><div class="card-title">供应商PC端说明</div><p class="text-muted">当前旧入口已兼容为供应商审核端。请使用左侧菜单进入绿搭、标展、光地审核。</p></div><div class="grid grid-3"><div class="card stat-card"><div class="stat-label">绿搭待审</div><div class="stat-value">28</div></div><div class="card stat-card"><div class="stat-label">标展待审</div><div class="stat-value">16</div></div><div class="card stat-card"><div class="stat-label">光地待审</div><div class="stat-value">12</div></div></div>`);
pages["operator-green"] = pages["supplier-green"];
pages["operator-booth"] = pages["supplier-standard"];
pages["operator-exhibition"] = pages["supplier-raw"];
pages["operator-message"] = pages["supplier-message"];

mobileShell = function(content, active="home", title="展商助手") {
  const links = [["mini-home.html","home","◇","首页"],["mini-booth.html","booth","◆","展位管理"],["mini-message.html","message","✉","消息"]];
  return `<div class="mobile-page"><div class="phone"><div class="phone-top"><div class="phone-status"><span>09:41</span><span>●●●</span></div><div class="phone-head"><h1>${title}</h1><span>···</span></div></div><div class="phone-content">${content}</div><nav class="bottom-nav">${links.map(x=>`<a href="${x[0]}" class="${active===x[1]?"active":""}"><span>${x[2]}</span><span>${x[3]}</span></a>`).join("")}</nav></div></div>${globalUI()}`;
};
pages["mini-home"] = () => mobileShell(`
  <div class="mini-scan-card">
    <div class="scan-copy"><span>快捷登录</span><strong>扫一扫登录 PC 展商端</strong><p>扫描 PC 端展商登录页二维码，快速完成登录。</p></div>
    <button class="scan-btn js-modal" data-title="扫一扫快捷登录" data-body="模拟打开摄像头，扫描 PC 端展商登录页面二维码后完成快捷登录。">扫一扫</button>
  </div>
  <div class="mini-card mini-expo-card"><div class="mini-card-head"><div class="mini-title">我的展位</div>${badge("绿搭","success")}</div><div class="mini-info-list">${kvRows([["展会名称","2026 中国国际农业科技展"],["展会时间","2026-09-18 至 09-20"],["展会地点","上海国家会展中心"],["展位号","A3-218"],["展位类型","绿搭展位"]])}</div></div>
  <a class="mini-card mini-link-card mini-progress-card" href="mini-progress.html"><div class="mini-card-head"><div class="mini-title">当前进度</div><span class="mini-card-arrow">查看 ›</span></div><p>当前展务资料上传与审核进度</p>${progress("整体进度",76,"warning")}</a>
  <a class="mini-card mini-link-card mini-notice-card" href="mini-notice.html"><div><div class="mini-title">参展报道通知书</div><p>查看报道时间、地点、流程和注意事项。</p></div><span class="mini-card-arrow">查看 ›</span></a>
  <div class="mini-card"><div class="mini-title">待办提醒</div><div class="mini-task"><span>绿搭效果图待确认</span>${badge("待处理","warning")}</div><div class="mini-task"><span>光地电路图审核中</span>${badge("审核中","warning")}</div></div>
`, "home", "首页");
pages["mini-progress"] = () => mobileShell(`<div class="mini-card"><div class="mini-title">进度列表</div><a class="mini-stage-item" href="mini-progress-detail.html"><span>企业资料确认</span>${badge("已完成","success")}</a><a class="mini-stage-item" href="mini-progress-detail.html"><span>展位资料提交</span>${badge("审核中","warning")}</a><a class="mini-stage-item" href="mini-progress-detail.html"><span>供应商审核</span>${badge("进行中","warning")}</a><a class="mini-stage-item" href="mini-progress-detail.html"><span>效果图确认</span>${badge("待处理","danger")}</a><a class="mini-stage-item" href="mini-progress-detail.html"><span>报道书下载</span>${badge("待生成","warning")}</a></div><div class="mini-card"><div class="mini-title">上传限制说明</div><p class="text-muted">小程序不支持大文件上传，设计图、图纸、压缩包等请前往 PC 端完成。</p></div>`, "progress", "进度");
pages["mini-progress-detail"] = () => mobileShell(`<div class="mini-card"><div class="mini-title">详细进度</div><div class="mini-timeline"><div class="mini-time done"><strong>企业资料确认</strong><p>企业基础信息、联系人、电话已确认。</p></div><div class="mini-time done"><strong>展位资料提交</strong><p>绿搭 4 张设计图已提交，光地安全证明已上传。</p></div><div class="mini-time active"><strong>供应商审核</strong><p>1-3 画面需复核，电路图审核中。</p></div><div class="mini-time"><strong>效果图确认</strong><p>供应商回传后可在线确认或反馈。</p></div><div class="mini-time"><strong>报道书下载</strong><p>审核完成后开放下载。</p></div></div></div>`, "progress", "进度详情");
pages["mini-booth"] = () => mobileShell(`<div class="mini-card"><div class="mini-title">展位列表</div><a class="mini-booth-row" href="mini-booth-detail.html"><div><strong>绿搭 A3-218</strong><p>楣板：华丰农业科技 · 效果图待确认</p></div>${badge("待处理","warning")}</a><a class="mini-booth-row" href="mini-booth-detail.html"><div><strong>标展 A3-101</strong><p>报道书已生成，可预览下载</p></div>${badge("已生成","success")}</a><a class="mini-booth-row" href="mini-booth-detail.html"><div><strong>光地 C2-106</strong><p>报馆资料审核中</p></div>${badge("审核中","warning")}</a></div>`, "booth", "展位管理");
pages["mini-booth-detail"] = () => mobileShell(`<div class="mini-card"><div class="mini-title">展位详情</div>${kvRows([["展位号","A3-218"],["展位类型","绿搭展位"],["楣板信息","华丰农业科技"]])}</div><div class="mini-card"><div class="mini-title">已上传资料</div>${fileRow("1-1.png","已通过","success")}${fileRow("1-2.png","已通过","success")}${fileRow("1-3.png","待复核","warning")}${fileRow("营业执照.pdf","已通过","success")}</div><div class="mini-card"><div class="mini-title">效果图</div><div class="mini-render-grid"><button class="effect-card js-modal" data-title="效果图预览" data-body-html="<div class='preview-large'>效果图 1 放大预览</div>">效果图1</button><button class="effect-card js-modal" data-title="效果图预览" data-body-html="<div class='preview-large'>效果图 2 放大预览</div>">效果图2</button><button class="effect-card js-modal" data-title="效果图预览" data-body-html="<div class='preview-large'>效果图 3 放大预览</div>">效果图3</button></div><div class="form-actions">${button("确认通过","primary",'class="btn primary js-confirm" data-message="效果图已确认"')}${button("错误反馈","danger",'class="btn danger js-modal" data-title="错误反馈" data-body="请填写错误位置、问题描述和修改建议。"')}</div></div>`, "booth", "展位详情");
pages["mini-notice"] = () => mobileShell(`
  <div class="mini-card mini-notice-hero">
    <div class="mini-card-head"><div><div class="mini-title">参展报道通知书</div><p>CAATE-2026-A3-0218</p></div>${badge("已生成","success")}</div>
    <div class="mini-notice-booth">A3-218</div>
    <p>2026 中国国际农业科技展 · 绿搭展位</p>
  </div>
  <div class="mini-card mini-info-card">
    <div class="mini-title">报到信息</div>
    ${kvRows([["报到时间","2026-09-17 09:00 - 18:00"],["报到地点","上海国家会展中心 北登录厅 2 号服务台"],["展位号","A3-218"],["展位类型","绿搭展位"]])}
  </div>
  <div class="mini-card">
    <div class="mini-title">报到流程</div>
    <div class="mini-flow-line"><span>签到领证件</span><em>→</em><span>办理入场手续</span></div>
  </div>
  <div class="mini-card">
    <div class="mini-title">注意事项</div>
    <ul class="mini-notice-list">
      <li>展品运输请提前预约进场时段。</li>
      <li>进场时携带营业执照复印件、展品清单、施工/布展资料及人员身份证件。</li>
    </ul>
  </div>
  <div class="mini-card">
    <div class="mini-title">现场对接人</div>
    <div class="mini-contact-row"><div><strong>张经理</strong><p>现场报到与入场手续咨询</p></div><a href="tel:13800002026">138-0000-2026</a></div>
  </div>
  <button class="btn primary block js-download">下载通知书 PDF</button>
`, "home", "报道书预览");

/* ===== 0624 管理后台细节优化：展商管理 / 展商详情 ===== */
pages["admin-enterprise"] = () => shell(`
  <div class="card enterprise-list-card">
    <div class="admin-filterbar">
      <input class="input" placeholder="按展商名称 / 展会搜索">
      <select class="input"><option>全部状态</option><option>待后台审核</option><option>免审</option><option>已驳回</option></select>
      <select class="input"><option>全部展会</option><option>中国国际农业科技展</option><option>西南农资订货会</option></select>
      <select class="input"><option>全部来源</option><option>慕渊云同步</option><option>展商修改提交</option></select>
      <button class="btn primary js-confirm" data-message="已同步外部系统企业数据，慕渊云同步数据默认免审">同步慕渊云数据</button>
    </div>
    ${simpleTable(["展商","展会","展位","来源","资料状态","审核规则","操作"],[
      ["华丰农业科技","中国国际农业科技展","A3-218","展商修改提交",badge("待后台审核","warning"),"修改后需审核",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small js-modal" data-title="审核展商资料" data-body="确认企业基础信息、资质档案和宣传物料是否合规。可通过或驳回并填写原因。"')}`],
      ["绿田肥业","中国国际农业科技展","B1-086","慕渊云同步",badge("免审","success"),"同步数据免审",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small js-modal" data-title="审核展商资料" data-body="该展商来自慕渊云同步，默认免审；仍可进入人工复核。"')}`],
      ["丰农装备","西南农资订货会","C2-106","展商修改提交",badge("资料待补","danger"),"补充后复审",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small js-modal" data-title="审核展商资料" data-body="请核对企业资料、资质文件和宣传物料。"')}`]
    ])}
  </div>`, true);

pages["admin-enterprise-detail"] = () => shell(`
  <div class="detail-layout">
    <div class="card detail-summary-card">
      <div class="detail-company">
        <div class="company-logo">华</div>
        <div>
          <h2>华丰农业科技有限公司</h2>
          <p>中国国际农业科技展 · A3-218 · 绿搭展位</p>
        </div>
      </div>
      <div class="summary-status">${badge("待后台审核","warning")} ${badge("展商修改提交","info")}</div>
      <div class="info-grid">
        <div class="info-tile"><span>联系人</span><strong>李明</strong></div>
        <div class="info-tile"><span>联系电话</span><strong>138-0000-8888</strong></div>
        <div class="info-tile"><span>统一社会信用代码</span><strong>91310000MA1X2026</strong></div>
        <div class="info-tile"><span>资料来源</span><strong>展商修改提交</strong></div>
      </div>
    </div>

    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>企业基础信息</h3><p>仅展示企业核心信息，审核操作请在展商管理列表或审核流程中完成。</p></div></div>
      <div class="readonly-grid">
        <div><span>企业名称</span><strong>华丰农业科技有限公司</strong></div>
        <div><span>联系人</span><strong>李明</strong></div>
        <div><span>电话</span><strong>138-0000-8888</strong></div>
        <div><span>展位号</span><strong>A3-218</strong></div>
      </div>
    </div>

    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>企业资质档案</h3><p>营业执照、登记证、检测报告支持预览查看。</p></div>${badge("2 项待审核","warning")}</div>
      <div class="file-list-clean">
        ${fileRow("营业执照.pdf","已上传","success")}
        ${fileRow("登记证.pdf","待审核","warning")}
        ${fileRow("检测报告.pdf","待审核","warning")}
      </div>
    </div>

    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>宣传物料</h3><p>管理企业 LOGO 与会刊资料，支持上传与预览。</p></div>${badge("待完善","warning")}</div>
      <div class="promo-layout">
        <div class="promo-preview">
          <div class="promo-logo">LOGO</div>
          <div><strong>华丰农业科技</strong><p>专注绿色农业投入品研发与应用服务。</p></div>
        </div>
        <div class="promo-files">
          ${fileRow("LOGO.png","已上传","success")}
          ${fileRow("会刊资料.docx","待审核","warning")}
          ${uploadZone("上传 LOGO / 会刊资料")}
        </div>
      </div>
    </div>
  </div>`, true);

/* ===== 0624 企业端：列表 + 详情结构优化 ===== */
Object.assign(meta, {
  "dashboard": ["首页","操作指引、当前待办和展位业务概览"],
  "booth-standard": ["标展管理","查看标展业务列表，进入详情确认楣板并下载参展报道书"],
  "booth-standard-detail": ["标展详情","确认楣板信息，预览并下载参展报道书"],
  "booth-green": ["绿搭管理","查看绿搭业务列表，进入详情提交资料并确认效果图"],
  "booth-green-detail": ["绿搭详情","查看绿搭设计图、审核记录和效果图"],
  "booth-raw": ["光地管理","查看光地业务列表，进入详情提交报馆资料"],
  "booth-raw-detail": ["光地详情","查看光地报馆资料、图纸和安全证明"]
});

const boothStatusCard = (title, desc, href, status, type="warning") => `
  <div class="booth-list-item">
    <div class="booth-list-main">
      <div class="booth-icon">${title.slice(0,1)}</div>
      <div><h3>${title}</h3><p>${desc}</p></div>
    </div>
    <div class="booth-list-meta">${badge(status,type)}<button class="btn primary small" onclick="location.href='${href}'">查看详情</button></div>
  </div>`;

pages.dashboard = () => shell(`
  <div class="guide-hero">
    <div>
      <span class="hero-kicker">展商PC端 · 参展流程</span>
      <h2>请按流程完成资料确认与提交</h2>
      <p>优先确认企业信息和展位资料；供应商审核通过后，可在 PC 或小程序确认效果图。</p>
    </div>
    <div class="guide-actions">${button("进入标展管理","primary",'onclick="location.href=\'booth-standard.html\'"')}${button("查看消息反馈","",'onclick="location.href=\'message.html\'"')}</div>
  </div>
  <div class="card process-card">
    <div class="process-steps">
      <div class="process-step done"><span>1</span><strong>企业信息确认</strong><p>核对联系人、电话与企业名片</p></div>
      <div class="process-step current"><span>2</span><strong>展位资料提交</strong><p>标展/绿搭/光地按类型提交</p></div>
      <div class="process-step"><span>3</span><strong>供应商审核</strong><p>逐项审核资料与设计图</p></div>
      <div class="process-step"><span>4</span><strong>效果图确认</strong><p>确认或反馈修改意见</p></div>
      <div class="process-step"><span>5</span><strong>报道书下载</strong><p>查看报到流程与注意事项</p></div>
    </div>
  </div>
  <div class="grid grid-4" style="margin-top:16px">
    <div class="card stat-card"><div class="stat-label">企业信息</div><div class="stat-value" style="font-size:22px">已确认</div><div class="stat-foot">企业名片已同步</div></div>
    <div class="card stat-card"><div class="stat-label">标展资料</div><div class="stat-value">1</div><div class="stat-foot">待确认报道书</div></div>
    <div class="card stat-card"><div class="stat-label">绿搭效果图</div><div class="stat-value" style="font-size:22px">待确认</div><div class="stat-foot">供应商已回传 3 张</div></div>
    <div class="card stat-card"><div class="stat-label">光地资料</div><div class="stat-value" style="font-size:22px">审核中</div><div class="stat-foot">电路图待复核</div></div>
  </div>
  <div class="grid grid-2" style="margin-top:16px">
    <div class="card"><div class="card-title">展位业务</div><div class="booth-list compact-list">
      ${boothStatusCard("标展 A3-101","楣板信息待确认，参展报道书可预览下载","booth-standard-detail.html","待确认","warning")}
      ${boothStatusCard("绿搭 A3-218","4 张设计图已提交，效果图待确认","booth-green-detail.html","待确认","warning")}
      ${boothStatusCard("光地 C2-106","报馆资料审核中，安全证明已上传","booth-raw-detail.html","审核中","warning")}
    </div></div>
    <div class="card"><div class="card-title">最近消息</div><ul class="list"><li class="list-item"><span>绿搭效果图已回传，请确认</span>${badge("待处理","warning")}</li><li class="list-item"><span>标展参展报道书已生成</span>${badge("新","success")}</li><li class="list-item"><span>光地电路图进入复核</span>${badge("审核中","warning")}</li></ul></div>
  </div>`);

pages["booth-standard"] = () => shell(`
  <div class="card booth-list-card">
    <div class="list-page-head"><div><h3>标展业务列表</h3><p>逐条查看标展资料、楣板信息和参展报道书。</p></div>${badge("共 2 条","info")}</div>
    <div class="booth-list">
      ${boothStatusCard("标展 A3-101","楣板：华丰农业科技 · 报道书已生成","booth-standard-detail.html","待确认","warning")}
      ${boothStatusCard("标展 B1-086","楣板：绿田肥业 · 报道书已下载","booth-standard-detail.html","已确认","success")}
    </div>
  </div>`);

pages["booth-standard-detail"] = () => shell(`
  <div class="detail-layout">
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认现场楣板展示内容，确认后用于制作与现场核验。</p></div>${badge("待确认","warning")}</div>
      <div class="readonly-grid">
        <div><span>展位号</span><strong>A3-101</strong></div>
        <div><span>展位类型</span><strong>标准展位</strong></div>
        <div><span>楣板名称</span><strong>华丰农业科技</strong></div>
        <div><span>联系人</span><strong>李明 138-0000-8888</strong></div>
      </div>
      <div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>参展报道书</h3><p>预览报道时间、地点、流程和注意事项，可下载 PDF。</p></div>${badge("已生成","success")}</div>
      ${reportNoticeBlock("A3-101")}
    </div>
  </div>`);

pages["booth-green"] = () => shell(`
  <div class="card booth-list-card">
    <div class="list-page-head"><div><h3>绿搭业务列表</h3><p>先查看列表，再进入详情处理设计图、审核反馈和效果图确认。</p></div>${badge("共 2 条","info")}</div>
    <div class="booth-list">
      ${boothStatusCard("绿搭 A3-218","模板 G-30-A · 4 张设计图 · 供应商已回传效果图","booth-green-detail.html","待确认效果图","warning")}
      ${boothStatusCard("绿搭 A2-088","模板 G-18-A · 2 张设计图 · 单图审核中","booth-green-detail.html","审核中","warning")}
    </div>
  </div>`);

pages["booth-green-detail"] = () => shell(`
  <div class="tabs"><button class="tab-btn active" data-tab="green-detail-files">设计图资料</button><button class="tab-btn" data-tab="green-detail-render">效果图确认</button><button class="tab-btn" data-tab="green-detail-log">审核记录</button></div>
  <div class="tab-panel active" id="green-detail-files"><div class="card detail-panel"><div class="detail-section-head"><div><h3>绿搭设计图</h3><p>按模板 G-30-A 上传 4 个画面。</p></div>${badge("审核中","warning")}</div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${uploadZone("上传 "+n)}${i===2?badge("已驳回","danger"):badge("已提交","success")}</div>`).join("")}</div></div></div>
  <div class="tab-panel" id="green-detail-render"><div class="card detail-panel"><div class="detail-section-head"><div><h3>供应商回传效果图</h3><p>确认通过后进入报道书与现场搭建流程。</p></div>${badge("待确认","warning")}</div><div class="effect-grid"><div class="effect-card">效果图 1</div><div class="effect-card">效果图 2</div><div class="effect-card">效果图 3</div></div><div class="form-actions">${button("确认通过","primary",'class="btn primary js-confirm" data-message="效果图已确认"')}${button("反馈修改意见","danger",'class="btn danger js-modal" data-title="反馈修改意见" data-body="请填写需要修改的位置与原因。"')}</div></div></div>
  <div class="tab-panel" id="green-detail-log"><div class="card">${simpleTable(["时间","节点","结果"],[["06-24 10:20","供应商审核","1 张驳回"],["06-24 09:10","展商提交","已提交"],["06-23 16:30","选择模板","G-30-A"]])}</div></div>`);

pages["booth-raw"] = () => shell(`
  <div class="card booth-list-card">
    <div class="list-page-head"><div><h3>光地业务列表</h3><p>按展位逐条查看报馆资料、搭建图纸与安全证明。</p></div>${badge("共 2 条","info")}</div>
    <div class="booth-list">
      ${boothStatusCard("光地 C2-106","搭建图纸已提交，电路图审核中","booth-raw-detail.html","审核中","warning")}
      ${boothStatusCard("光地 C2-108","安全证明待补充，报馆资料未完成","booth-raw-detail.html","待补充","danger")}
    </div>
  </div>`);

pages["booth-raw-detail"] = () => shell(`
  <div class="detail-layout">
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>光地报馆资料</h3><p>提交搭建图纸、安全证明、报馆资料等文件。</p></div>${badge("审核中","warning")}</div>${fileRow("搭建商营业执照.pdf","已通过","success")}${fileRow("平面图.pdf","审核中","warning")}${fileRow("电路图.pdf","待补充","warning")}${fileRow("安全证明.pdf","已提交","success")}<div class="edit-fields">${uploadZone("上传光地报馆资料 / 搭建图纸 / 安全证明")}</div></div>
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>参展报道书</h3><p>审核完成后开放下载。</p></div>${badge("待生成","warning")}</div>${reportNoticeBlock("C2-106")}</div>
  </div>`);

/* ===== 0624 企业端标注修正：移除多余按钮/编辑条，详情页无 Tab ===== */
const reportNoticeDownloadOnly = (boothNo="A3-218") => `
  <div class="notice-paper">
    <div class="notice-title">参展报到通知书</div>
    <div class="grid grid-2">
      <div>${kvRows([["展会名称","2026 中国国际农业科技展"],["报到时间","2026-09-17 09:00 - 18:00"],["报到地点","上海国家会展中心 北登录厅 2 号服务台"]])}</div>
      <div>${kvRows([["展位号",boothNo],["报到流程","签到领证件 → 办理入场手续"],["对接人联系方式","张经理 138-0000-2026"]])}</div>
    </div>
    <div class="notice-list"><strong>注意事项</strong><p>请提前安排展品运输；进场时携带营业执照复印件、展品清单、施工/布展资料及人员身份证件。</p></div>
    <div class="form-actions">${button("下载通知书 PDF","primary",'class="btn primary js-download"')}</div>
  </div>`;

pages["booth-standard-detail"] = () => shell(`
  <div class="detail-layout">
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认现场楣板展示内容，确认后用于制作与现场核验。</p></div>${badge("待确认","warning")}</div>
      <div class="readonly-grid">
        <div><span>展位号</span><strong>A3-101</strong></div>
        <div><span>展位类型</span><strong>标准展位</strong></div>
        <div><span>楣板名称</span><strong>华丰农业科技</strong></div>
        <div><span>联系人</span><strong>李明 138-0000-8888</strong></div>
      </div>
      <div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>参展报道书</h3><p>预览报道时间、地点、流程和注意事项，可下载 PDF。</p></div>${badge("已生成","success")}</div>
      ${reportNoticeDownloadOnly("A3-101")}
    </div>
  </div>`);

pages["booth-green-detail"] = () => shell(`
  <div class="detail-layout">
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认绿搭展位现场楣板展示内容。</p></div>${badge("待确认","warning")}</div>
      <div class="readonly-grid">
        <div><span>展位号</span><strong>A3-218</strong></div>
        <div><span>展位类型</span><strong>绿搭展位</strong></div>
        <div><span>楣板名称</span><strong>华丰农业科技</strong></div>
        <div><span>联系人</span><strong>李明 138-0000-8888</strong></div>
      </div>
      <div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>上传设计图</h3><p>按模板 G-30-A 上传 4 个画面。</p></div>${badge("审核中","warning")}</div>
      <div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${uploadZone("上传 "+n)}${i===2?badge("已驳回","danger"):badge("已提交","success")}</div>`).join("")}</div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>效果图</h3><p>供应商回传效果图后，可确认或反馈修改意见。</p></div>${badge("待确认","warning")}</div>
      <div class="effect-grid"><div class="effect-card">效果图 1</div><div class="effect-card">效果图 2</div><div class="effect-card">效果图 3</div></div>
      <div class="form-actions">${button("确认通过","primary",'class="btn primary js-confirm" data-message="效果图已确认"')}${button("反馈修改意见","danger",'class="btn danger js-modal" data-title="反馈修改意见" data-body="请填写需要修改的位置与原因。"')}</div>
    </div>
  </div>`);

pages["booth-raw-detail"] = () => shell(`
  <div class="detail-layout">
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认光地展位现场企业名片/楣板展示内容。</p></div>${badge("待确认","warning")}</div>
      <div class="readonly-grid">
        <div><span>展位号</span><strong>C2-106</strong></div>
        <div><span>展位类型</span><strong>光地展位</strong></div>
        <div><span>企业名片</span><strong>华丰农业科技</strong></div>
        <div><span>现场联系人</span><strong>王工 139-0000-6606</strong></div>
      </div>
      <div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>光地报馆资料</h3><p>查看搭建图纸、安全证明、报馆资料等文件。</p></div>${badge("审核中","warning")}</div>
      ${fileRow("搭建商营业执照.pdf","已通过","success")}
      ${fileRow("平面图.pdf","审核中","warning")}
      ${fileRow("电路图.pdf","待补充","warning")}
      ${fileRow("安全证明.pdf","已提交","success")}
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>参展报道书</h3><p>审核完成后开放下载。</p></div>${badge("待生成","warning")}</div>
      ${reportNoticeDownloadOnly("C2-106")}
    </div>
  </div>`);

document.getElementById("app").innerHTML = (pages[page] || pages.dashboard)();

document.querySelectorAll(".head-actions .badge.warning").forEach(x => {
  if (x.textContent.includes("距资料截止")) x.remove();
});
document.querySelectorAll(".notice-paper .js-modal").forEach(x => {
  if (x.textContent.includes("发送到企业联系人")) x.remove();
});
if (["booth-standard","booth-green","booth-raw"].includes(page)) {
  document.querySelectorAll(".enterprise-edit-bar").forEach(x => x.remove());
}
if (["booth-standard-detail","booth-green-detail","booth-raw-detail"].includes(page)) {
  const headActions = document.querySelector(".page-head .head-actions");
  if (headActions) headActions.innerHTML = `${badge("距资料截止 7 天","warning")}`;
}
if (page === "dashboard") {
  document.querySelector(".guide-hero .hero-kicker")?.remove();
  document.querySelector(".guide-hero .guide-actions")?.remove();
}
const editHrefMap = {
  "booth-standard": "booth-standard-edit.html",
  "booth-green": "booth-green-edit.html",
  "booth-raw": "booth-raw-edit.html"
};
if (editHrefMap[page]) {
  document.querySelectorAll(".booth-list-card .list-page-head").forEach(x => x.remove());
  document.querySelectorAll(".booth-list-item").forEach(item => {
    const meta = item.querySelector(".booth-list-meta");
    if (meta && !meta.querySelector(".js-booth-edit")) {
      const detailBtn = meta.querySelector("button");
      const editBtn = document.createElement("button");
      editBtn.className = "btn small js-booth-edit";
      editBtn.textContent = "编辑";
      editBtn.onclick = () => location.href = editHrefMap[page];
      meta.insertBefore(editBtn, detailBtn);
    }
  });
}

/* ===== 0624 企业端列表增加修改入口 ===== */
Object.assign(meta, {
  "booth-standard-edit": ["标展修改","修改楣板信息和已上传资料，提交后进入审核"],
  "booth-green-edit": ["绿搭修改","修改楣板信息和已上传设计图，提交后进入审核"],
  "booth-raw-edit": ["光地修改","修改楣板信息和已上传报馆资料，提交后进入审核"]
});

const boothListRow = (title, desc, detailHref, editHref, status, type="warning") => `
  <div class="booth-list-item">
    <div class="booth-list-main"><div class="booth-icon">${title.slice(0,1)}</div><div><h3>${title}</h3><p>${desc}</p></div></div>
    <div class="booth-list-meta">${badge(status,type)}<button class="btn small" onclick="location.href='${editHref}'">编辑</button><button class="btn primary small" onclick="location.href='${detailHref}'">查看详情</button></div>
  </div>`;

pages["booth-standard"] = () => shell(`
  <div class="card booth-list-card">
    <div class="booth-list">
      ${boothListRow("标展 A3-101","楣板：华丰农业科技 · 报道书已生成","booth-standard-detail.html","booth-standard-edit.html","待确认","warning")}
      ${boothListRow("标展 B1-086","楣板：绿田肥业 · 报道书已下载","booth-standard-detail.html","booth-standard-edit.html","已确认","success")}
    </div>
  </div>`);

pages["booth-green"] = () => shell(`
  <div class="card booth-list-card">
    <div class="booth-list">
      ${boothListRow("绿搭 A3-218","模板 G-30-A · 4 张设计图 · 供应商已回传效果图","booth-green-detail.html","booth-green-edit.html","待确认效果图","warning")}
      ${boothListRow("绿搭 A2-088","模板 G-18-A · 2 张设计图 · 单图审核中","booth-green-detail.html","booth-green-edit.html","审核中","warning")}
    </div>
  </div>`);

pages["booth-raw"] = () => shell(`
  <div class="card booth-list-card">
    <div class="booth-list">
      ${boothListRow("光地 C2-106","搭建图纸已提交，电路图审核中","booth-raw-detail.html","booth-raw-edit.html","审核中","warning")}
      ${boothListRow("光地 C2-108","安全证明待补充，报馆资料未完成","booth-raw-detail.html","booth-raw-edit.html","待补充","danger")}
    </div>
  </div>`);

const editNameplateBlock = (type, boothNo) => `
  <div class="card detail-panel">
    <div class="detail-section-head"><div><h3>楣板信息</h3><p>可修改企业现场展示名称与联系人信息。</p></div>${badge("编辑中","warning")}</div>
    <div class="form-grid">
      <div class="field"><label>展位类型</label><input value="${type}"></div>
      <div class="field"><label>展位号</label><input value="${boothNo}"></div>
      <div class="field"><label>楣板/企业名片</label><input value="华丰农业科技"></div>
      <div class="field"><label>联系人</label><input value="李明 138-0000-8888"></div>
    </div>
  </div>`;

pages["booth-standard-edit"] = () => shell(`
  <div class="detail-layout">
    ${editNameplateBlock("标准展位","A3-101")}
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>修改已上传资料</h3><p>可替换已上传并审核过的标展资料，提交后重新进入审核。</p></div>${badge("可修改","info")}</div>${fileRow("楣板确认单.pdf","已通过","success")}${fileRow("标展设计图.pdf","已通过","success")}${uploadZone("替换标展设计图 / 材料")}</div>
    <div class="submit-bar">${button("提交审核","primary",'class="btn primary js-confirm" data-message="修改内容已提交审核"')}</div>
  </div>`);

pages["booth-green-edit"] = () => shell(`
  <div class="detail-layout">
    ${editNameplateBlock("绿搭展位","A3-218")}
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>修改上传图片</h3><p>可替换已上传并审核过的设计图，提交后由供应商重新审核。</p></div>${badge("可修改","info")}</div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${fileRow(n+".png",i===2?"已驳回":"已通过",i===2?"danger":"success")}${uploadZone("替换 "+n)}</div>`).join("")}</div></div>
    <div class="submit-bar">${button("提交审核","primary",'class="btn primary js-confirm" data-message="修改内容已提交审核"')}</div>
  </div>`);

pages["booth-raw-edit"] = () => shell(`
  <div class="detail-layout">
    ${editNameplateBlock("光地展位","C2-106")}
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>修改已上传资料</h3><p>可替换已上传并审核过的报馆资料、搭建图纸与安全证明。</p></div>${badge("可修改","info")}</div>${fileRow("搭建商营业执照.pdf","已通过","success")}${fileRow("平面图.pdf","审核中","warning")}${fileRow("电路图.pdf","待补充","warning")}${fileRow("安全证明.pdf","已提交","success")}${uploadZone("替换光地报馆资料 / 搭建图纸 / 安全证明")}</div>
    <div class="submit-bar">${button("提交审核","primary",'class="btn primary js-confirm" data-message="修改内容已提交审核"')}</div>
  </div>`);

const enterpriseBoothPagesFinal = ["booth-standard","booth-green","booth-raw","booth-standard-edit","booth-green-edit","booth-raw-edit"];
if (enterpriseBoothPagesFinal.includes(page)) {
  document.getElementById("app").innerHTML = (pages[page] || pages.dashboard)();
  const headActions = document.querySelector(".page-head .head-actions");
  if (["booth-standard-detail","booth-green-detail","booth-raw-detail"].includes(page) && headActions) headActions.innerHTML = `${badge("距资料截止 7 天","warning")}`;
}

if (document.getElementById("tab-greennotice")) document.getElementById("tab-greennotice").innerHTML = reportNoticeHTML("绿搭","A3-218");
if (document.getElementById("tab-rawnotice")) document.getElementById("tab-rawnotice").innerHTML = reportNoticeHTML("光地","C2-106");

const editableEnterprisePages = ["basic-info","product-info","brand-info"];
if (editableEnterprisePages.includes(page)) {
  const content = document.querySelector(".content");
  content.classList.add("enterprise-view-mode");
  content.insertAdjacentHTML("beforeend", `<div class="enterprise-edit-bar"><button class="btn success js-confirm-info">确认信息</button><button class="btn primary js-enter-edit">编辑</button><div class="editing-actions"><button class="btn js-cancel-edit">取消</button><button class="btn js-save-draft">保存草稿</button><button class="btn primary js-submit-edit">提交审核</button></div></div>`);
}

const toast = (text) => {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = "✓ " + text;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
};

pages["admin-login"] = () => `
  <div class="login-page">
    <div class="login-card">
      <div class="brand login-brand"><div class="brand-mark">管</div><div><strong>展务管理平台</strong><small>ADMIN LOGIN</small></div></div>
      <h1>管理后台登录</h1>
      <p>请输入管理员账号密码进入后台管理系统。</p>
      <div class="field"><label>账号</label><input class="input" id="adminUser" value="admin" placeholder="请输入账号"></div>
      <div class="field"><label>密码</label><input class="input" id="adminPass" type="password" value="123" placeholder="请输入密码"></div>
      <button class="btn primary block js-admin-login">登录</button>
      <div class="help">演示账号：admin；密码：123</div>
    </div>
  </div>${globalUI()}`;

if (page === "admin-login") {
  document.getElementById("app").innerHTML = pages["admin-login"]();
}

pages["supplier-login"] = () => `
  <div class="login-page supplier-login-page">
    <div class="login-card">
      <div class="brand login-brand"><div class="brand-mark">审</div><div><strong>供应商审核端</strong><small>SUPPLIER LOGIN</small></div></div>
      <h1>供应商端登录</h1>
      <p>审核人员登录后可处理绿搭、标展、光地展位资料审核。</p>
      <div class="field"><label>账号</label><input class="input" id="supplierUser" value="supplier" placeholder="请输入账号"></div>
      <div class="field"><label>密码</label><input class="input" id="supplierPass" type="password" value="123" placeholder="请输入密码"></div>
      <button class="btn primary block js-supplier-login">登录</button>
      <div class="help">演示账号：supplier；密码：123</div>
    </div>
  </div>${globalUI()}`;

if (page === "supplier-login") {
  document.getElementById("app").innerHTML = pages["supplier-login"]();
}

pages["exhibitor-login"] = () => `
  <div class="login-page exhibitor-login-page">
    <div class="login-card exhibitor-login-card">
      <div class="brand login-brand"><div class="brand-mark">展</div><div><strong>企业服务中心</strong><small>EXHIBITOR LOGIN</small></div></div>
      <h1>展商端登录</h1>
      <p>请使用小程序扫描二维码，完成 PC 展商端快捷登录。</p>
      <div class="qr-login-box">
        <div class="fake-qr"><span></span><span></span><span></span><span></span><strong>QR</strong></div>
        <div class="qr-tips">打开展商小程序首页，点击“扫一扫”扫描此二维码。</div>
      </div>
      <button class="btn primary block js-exhibitor-scan-login">模拟扫码登录</button>
    </div>
  </div>${globalUI()}`;

if (page === "exhibitor-login") {
  document.getElementById("app").innerHTML = pages["exhibitor-login"]();
}

/* ===== 0624 全局细节修正：企业/后台/供应商/小程序 ===== */
const cleanFileRow = (name, state="已上传", type="success") => `
  <div class="file-row">
    <div class="file-meta"><span>📄</span><span class="file-name">${name}</span></div>
    <div>${badge(state,type)} <span class="link js-confirm" data-message="已打开文件预览">预览</span></div>
  </div>`;

const editPageShell = (type, boothNo, uploadTitle, filesHtml, uploadLabel) => shell(`
  <div class="detail-layout edit-detail-layout">
    <div class="card detail-panel nameplate-edit-card">
      <div class="detail-section-head"><div><h3>楣板信息</h3><p>请核对并修改现场展示名称与联系人信息。</p></div></div>
      <div class="form-grid">
        <div class="field"><label>展位类型</label><input value="${type}"></div>
        <div class="field"><label>展位号</label><input value="${boothNo}"></div>
        <div class="field"><label>楣板/企业名片</label><input value="华丰农业科技"></div>
        <div class="field"><label>联系人</label><input value="李明 138-0000-8888"></div>
      </div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>${uploadTitle}</h3><p>可替换已上传资料，提交后重新进入审核。</p></div></div>
      ${filesHtml}
      ${uploadZone(uploadLabel)}
    </div>
    <div class="submit-bar"><button class="btn" onclick="history.back()">取消</button>${button("提交审核","primary",'class="btn primary js-confirm" data-message="修改内容已提交审核"')}</div>
  </div>`);

pages["booth-standard-edit"] = () => editPageShell(
  "标准展位",
  "A3-101",
  "上传资料",
  `${cleanFileRow("标展设计图.pdf","已通过","success")}`,
  "替换标展设计图 / 材料"
);
pages["booth-green-edit"] = () => shell(`
  <div class="detail-layout edit-detail-layout">
    <div class="card detail-panel nameplate-edit-card">
      <div class="detail-section-head"><div><h3>楣板信息</h3><p>请核对并修改现场展示名称与联系人信息。</p></div></div>
      <div class="form-grid"><div class="field"><label>展位类型</label><input value="绿搭展位"></div><div class="field"><label>展位号</label><input value="A3-218"></div><div class="field"><label>楣板/企业名片</label><input value="华丰农业科技"></div><div class="field"><label>联系人</label><input value="李明 138-0000-8888"></div></div>
    </div>
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>上传资料</h3><p>可替换已上传并审核过的设计图，提交后重新审核。</p></div></div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${cleanFileRow(n+".png",i===2?"已驳回":"已通过",i===2?"danger":"success")}${uploadZone("替换 "+n)}</div>`).join("")}</div></div>
    <div class="submit-bar"><button class="btn" onclick="history.back()">取消</button>${button("提交审核","primary",'class="btn primary js-confirm" data-message="修改内容已提交审核"')}</div>
  </div>`);
pages["booth-raw-edit"] = () => editPageShell(
  "光地展位",
  "C2-106",
  "上传资料",
  `${cleanFileRow("搭建商营业执照.pdf","已通过","success")}${cleanFileRow("平面图.pdf","审核中","warning")}${cleanFileRow("电路图.pdf","待补充","warning")}${cleanFileRow("安全证明.pdf","已提交","success")}`,
  "替换光地报馆资料 / 搭建图纸 / 安全证明"
);

pages["message"] = () => shell(`
  <div class="card">
    <div class="tabs"><button class="tab-btn active" data-tab="reviewmsg">审核反馈</button><button class="tab-btn" data-tab="editmsg">修改提醒</button></div>
    <div class="tab-panel active" id="tab-reviewmsg"><div class="message-list">
      <div class="list-item"><div><div class="list-title">绿搭 1-3 设计图审核未通过</div><div class="list-desc">原因：画面存在极限词，请进入绿搭编辑页替换图片后重新提交。</div></div>${badge("待处理","danger")}</div>
      <div class="list-item"><div><div class="list-title">光地电路图进入复核</div><div class="list-desc">供应商正在逐条审核图纸文件，请等待结果。</div></div>${badge("审核中","warning")}</div>
      <div class="list-item"><div><div class="list-title">标展参展报道书已生成</div><div class="list-desc">可进入标展详情页预览并下载。</div></div>${badge("已生成","success")}</div>
    </div></div>
    <div class="tab-panel" id="tab-editmsg"><div class="message-list">
      <div class="list-item"><div><div class="list-title">楣板信息修改已提交</div><div class="list-desc">修改内容已进入后台审核。</div></div>${badge("已提交","success")}</div>
      <div class="list-item"><div><div class="list-title">绿搭图片替换提醒</div><div class="list-desc">请在截止前完成 1-3 图片替换。</div></div>${badge("提醒","warning")}</div>
    </div></div>
  </div>`);

pages["admin-enterprise-review"] = () => shell(`
  <div class="card detail-panel"><div class="detail-section-head"><div><h3>华丰农业科技 · 资料逐条审核</h3><p>所有审核项均需逐条处理，可预览文件后通过或驳回。</p></div>${badge("待审核","warning")}</div>
    ${simpleTable(["资料项","文件/图片","状态","操作"],[
      ["企业基础信息","名称、联系人、电话",badge("待审核","warning"),`${button("通过","primary",'class="btn small primary js-confirm" data-message="该项已通过"')}${button("驳回","danger",'class="btn small danger js-modal" data-title="驳回资料项" data-body="填写该项驳回原因。"')}`],
      ["营业执照","营业执照.pdf",badge("待审核","warning"),`${button("预览","",'class="btn small js-confirm" data-message="已打开预览"')}${button("通过","primary",'class="btn small primary js-confirm" data-message="该项已通过"')}${button("驳回","danger",'class="btn small danger js-modal" data-title="驳回营业执照" data-body="填写文件问题。"')}`],
      ["登记证","登记证.pdf",badge("待审核","warning"),`${button("预览","",'class="btn small js-confirm" data-message="已打开预览"')}${button("通过","primary",'class="btn small primary js-confirm" data-message="该项已通过"')}${button("驳回","danger",'class="btn small danger js-modal" data-title="驳回登记证" data-body="填写文件问题。"')}`],
      ["LOGO","LOGO.png",badge("待审核","warning"),`${button("预览","",'class="btn small js-confirm" data-message="已打开预览"')}${button("通过","primary",'class="btn small primary js-confirm" data-message="该项已通过"')}${button("驳回","danger",'class="btn small danger js-modal" data-title="驳回 LOGO" data-body="填写图片问题。"')}`]
    ])}
  </div>`, true);

pages["admin-enterprise"] = () => shell(`
  <div class="card enterprise-list-card">
    <div class="admin-filterbar"><input class="input" placeholder="按展商名称 / 展会搜索"><select class="input"><option>全部状态</option><option>待后台审核</option><option>免审</option><option>已驳回</option></select><select class="input"><option>全部展会</option><option>中国国际农业科技展</option></select><select class="input"><option>全部来源</option><option>慕渊云同步</option><option>展商修改提交</option></select><button class="btn primary js-confirm" data-message="已同步外部系统企业数据">同步慕渊云数据</button></div>
    ${simpleTable(["展商","展会","展位","来源","资料状态","审核规则","操作"],[
      ["华丰农业科技","中国国际农业科技展","A3-218","展商修改提交",badge("待后台审核","warning"),"修改后需审核",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small" onclick="location.href=\'admin-enterprise-review.html\'"')}`],
      ["绿田肥业","中国国际农业科技展","B1-086","慕渊云同步",badge("免审","success"),"同步数据免审",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small" onclick="location.href=\'admin-enterprise-review.html\'"')}`],
      ["丰农装备","西南农资订货会","C2-106","展商修改提交",badge("资料待补","danger"),"补充后复审",`${button("查看详情","primary",'class="btn small primary" onclick="location.href=\'admin-enterprise-detail.html\'"')}${button("审核","",'class="btn small" onclick="location.href=\'admin-enterprise-review.html\'"')}`]
    ])}
  </div>`, true);

pages["admin-message"] = () => shell(`
  <div class="grid grid-2">
    <div class="card admin-compose-card"><div class="card-title">新建通知</div><div class="form-grid"><div class="field"><label>通知类型</label><select class="select"><option>审核提醒</option><option>驳回反馈</option><option>系统公告</option></select></div><div class="field"><label>接收范围</label><select class="select"><option>供应商</option><option>展商</option><option>全部用户</option></select></div></div><div class="field" style="margin-top:14px"><label>接收对象</label><div class="assign-list compact"><label class="check-row-item"><input type="checkbox" checked> 上海展装服务有限公司</label><label class="check-row-item"><input type="checkbox"> 华东会展制作中心</label><label class="check-row-item"><input type="checkbox"> 华丰农业科技</label></div></div><div class="field"><label>消息内容</label><textarea class="textarea">请及时处理待审核资料。</textarea></div>${button("推送消息","primary",'class="btn primary js-confirm" data-message="消息已推送"')}</div>
    <div class="card"><div class="card-title">通知记录</div>${simpleTable(["时间","对象","类型","状态"],[["06-24 10:30","上海展装服务有限公司","审核提醒",badge("成功","success")],["06-24 09:20","华丰农业科技","驳回反馈",badge("成功","success")],["06-23 18:00","全部展商","系统公告",badge("成功","success")]])}</div>
  </div>`, true);

pages["admin-settings"] = () => shell(`
  <div class="grid grid-2">
    <div class="card"><div class="card-title">极限词管理</div>${simpleTable(["词语","风险等级","命中策略","状态"],[["行业第一",badge("高风险","danger"),"阻止自动通过",badge("启用","success")],["国家级",badge("中风险","warning"),"人工复核",badge("启用","success")],["百分百有效",badge("高风险","danger"),"阻止提交",badge("启用","success")]])}</div>
    <div class="card"><div class="card-title">资料模板配置</div>${simpleTable(["展位类型","需上传资料","状态"],[["标展","楣板信息、设计图、用电需求",badge("启用","success")],["绿搭","楣板信息、1-1/1-2/1-3/1-4 设计图",badge("启用","success")],["特装/光地","楣板信息、搭建图纸、安全证明、报馆资料",badge("启用","success")]])}</div>
  </div>
  <div class="card section-block"><div class="card-title">参展报道书模板配置</div>${simpleTable(["展会","报道时间","报道地点","操作"],[["2026 中国国际农业科技展","2026-09-17 09:00","北登录厅 2 号服务台",button("编辑","",'class="btn small js-modal" data-title="编辑报道书模板" data-body="配置报道时间、地点、流程和注意事项。"')],["2026 西南农资订货会","2026-10-11 09:00","成都世纪城 1 号门",button("编辑","",'class="btn small js-modal" data-title="编辑报道书模板" data-body="配置报道时间、地点、流程和注意事项。"')]])}</div>`, true);

if (page === "dashboard") {
  document.querySelectorAll(".card-title").forEach(t => { if (t.textContent.trim() === "展位业务") t.closest(".card")?.remove(); });
  document.querySelectorAll(".process-step strong").forEach(s => { if (s.textContent.includes("报道书下载")) { s.textContent = "确认方案"; const p=s.parentElement.querySelector("p"); if(p) p.textContent="确认展位方案与效果图"; } });
}
if (["booth-standard-edit","booth-green-edit","booth-raw-edit","message","admin-enterprise","admin-enterprise-review","admin-message","admin-settings"].includes(page)) {
  document.getElementById("app").innerHTML = (pages[page] || pages.dashboard)();
}
document.querySelectorAll(".modal-submit").forEach(btn => btn.textContent = "确认");
if (page === "mini-home") {
  document.querySelectorAll(".scan-btn").forEach(btn => {
    btn.classList.remove("js-modal");
    btn.onclick = () => toast("已打开扫码快捷登录");
  });
}
if (page === "admin-exhibition") {
  document.querySelectorAll(".js-modal").forEach(btn => {
    if (btn.textContent.includes("参数配置")) {
      btn.dataset.title = "资料上传截止时间";
      btn.dataset.bodyHtml = `<div class="field"><label>选择截止时间</label><input class="input" type="datetime-local" value="2026-07-30T18:00"></div><div class="help" style="margin-top:12px">超过该时间后，系统禁止展商继续提交资料。</div>`;
    }
  });
}
if (page === "admin-supplier") {
  document.querySelectorAll("[data-title='分配展商']").forEach(btn => {
    btn.dataset.bodyHtml = (btn.dataset.bodyHtml || "").replace("从已有展商中选择（可多选）","展商列表");
  });
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".js-admin-login")) {
    const user = document.getElementById("adminUser")?.value.trim();
    const pass = document.getElementById("adminPass")?.value.trim();
    if (user === "admin" && pass === "123") {
      toast("登录成功");
      setTimeout(() => location.href = "admin-dashboard.html", 500);
    } else {
      toast("账号或密码错误");
    }
  }
  if (e.target.closest(".js-supplier-login")) {
    const user = document.getElementById("supplierUser")?.value.trim();
    const pass = document.getElementById("supplierPass")?.value.trim();
    if (user === "supplier" && pass === "123") {
      toast("登录成功");
      setTimeout(() => location.href = "supplier-green.html", 500);
    } else {
      toast("账号或密码错误");
    }
  }
  if (e.target.closest(".js-exhibitor-scan-login")) {
    toast("扫码成功");
    setTimeout(() => location.href = "dashboard.html", 500);
  }
  if (e.target.closest(".js-exhibitor-login")) {
    const user = document.getElementById("exhibitorUser")?.value.trim();
    const pass = document.getElementById("exhibitorPass")?.value.trim();
    if (user === "exhibitor" && pass === "123") {
      toast("登录成功");
      setTimeout(() => location.href = "dashboard.html", 500);
    } else {
      toast("账号或密码错误");
    }
  }
  const tab = e.target.closest(".tab-btn");
  if (tab) {
    const box = tab.closest(".card") || document;
    box.querySelectorAll(".tab-btn").forEach(x=>x.classList.remove("active"));
    box.querySelectorAll(".tab-panel").forEach(x=>x.classList.remove("active"));
    tab.classList.add("active");
    const panel = box.querySelector("#tab-"+tab.dataset.tab);
    if (panel) panel.classList.add("active");
  }
  const modalBtn = e.target.closest(".js-modal");
  if (modalBtn) {
    document.getElementById("modalTitle").textContent = modalBtn.dataset.title || "操作确认";
    const customBody = modalBtn.dataset.bodyHtml;
    document.getElementById("modalBody").innerHTML = customBody || `<p>${modalBtn.dataset.body || "请确认本次操作。"}</p><div class="field"><label>备注说明</label><textarea class="textarea" style="min-height:90px" placeholder="请输入说明（模拟）"></textarea></div>`;
    document.getElementById("actionModal").classList.add("open");
  }
  if (e.target.closest(".modal-close")) document.getElementById("actionModal").classList.remove("open");
  if (e.target.closest(".modal-submit")) {
    document.getElementById("actionModal").classList.remove("open");
    toast("申请已提交");
  }
  const confirmBtn = e.target.closest(".js-confirm");
  if (confirmBtn) toast(confirmBtn.dataset.message || "操作成功");
  if (e.target.closest(".js-download")) toast("已生成模拟下载任务");
  const upload = e.target.closest(".js-upload");
  if (upload) {
    upload.innerHTML = `<div><div class="upload-icon text-success">✓</div><div>文件选择成功</div><div class="help">prototype-file.pdf · 等待提交</div></div>`;
    toast("文件已添加");
  }
  const statusBtn = e.target.closest(".js-status");
  if (statusBtn) {
    statusBtn.textContent = "已通过";
    statusBtn.disabled = true;
    statusBtn.classList.remove("success");
    toast("单项审核已通过");
  }
});

const detailContent = {
  enterprise: {
    title: "展商详情",
    body: `<div class="info-section"><div class="info-title">企业基础信息</div><div class="info-pairs"><div class="info-pair"><span>企业名称</span><strong>山东华丰农业科技有限公司</strong></div><div class="info-pair"><span>联系人</span><strong>张敏</strong></div><div class="info-pair"><span>电话</span><strong>138 6608 2219</strong></div><div class="info-pair"><span>展位</span><strong>A3-218 · 绿搭</strong></div></div></div><div class="info-section"><div class="info-title">企业资质档案</div>${fileRow("营业执照_副本.pdf")}${fileRow("农药登记证_PD20260188.pdf")}${fileRow("检测报告_CMA.pdf","需补充","danger")}</div><div class="info-section"><div class="info-title">宣传物料</div>${fileRow("huafeng-logo-print.png")}${fileRow("企业会刊宣传页.pdf","审核中","warning")}</div>`
  },
  edit: {
    title: "编辑展商信息",
    body: `<div class="form-grid"><div class="field"><label>企业名称</label><input class="input" value="山东华丰农业科技有限公司"></div><div class="field"><label>联系人</label><input class="input" value="张敏"></div><div class="field"><label>联系电话</label><input class="input" value="138 6608 2219"></div><div class="field"><label>展商状态</label><select class="select"><option>正常参展</option><option>暂停</option></select></div></div>`
  },
  booth: {
    title: "分配展位",
    body: `<div class="field"><label>展馆</label><select class="select"><option>3H 农业投入品馆</option><option>2H 智慧农业馆</option></select></div><div class="form-grid" style="margin-top:15px"><div class="field"><label>展位号</label><input class="input" value="A3-218"></div><div class="field"><label>展位类型</label><select class="select"><option>绿搭</option><option>标准展位</option><option>光地</option></select></div></div><div class="alert info" style="margin-top:15px">A3-218 当前可用，面积 36㎡。</div>`
  },
  nameplate: {
    title: "编辑楣板 / 企业名片",
    body: `<div class="field"><label>中文名称</label><input class="input" value="山东华丰农业科技有限公司"></div><div class="field" style="margin-top:15px"><label>英文名称</label><input class="input" value="SHANDONG HUAFENG AGRITECH CO., LTD."></div><div class="help">修改后将同步更新会刊、现场导视和通知书。</div>`
  },
  revision: {
    title: "改稿申请详情",
    body: `<div class="info-pairs"><div class="info-pair"><span>申请编号</span><strong>GX-20260722-08</strong></div><div class="info-pair"><span>申请状态</span><strong>${badge("审核中","warning")}</strong></div><div class="info-pair"><span>涉及画面</span><strong>1-正、2-反</strong></div><div class="info-pair"><span>提交时间</span><strong>07-22 11:20</strong></div></div><div class="alert info" style="margin-top:15px">更换主画面产品图，并将联系电话调整为 400-860-2219。</div>`
  },
  word: {
    title: "编辑违规极限词",
    body: `<div class="field"><label>词语</label><input class="input" value="全国第一"></div><div class="form-grid" style="margin-top:15px"><div class="field"><label>风险等级</label><select class="select"><option>高风险</option><option>中风险</option><option>提示</option></select></div><div class="field"><label>命中策略</label><select class="select"><option>阻止自动通过</option><option>人工复核</option><option>阻止提交</option></select></div></div>`
  },
  flow: {
    title: "编辑审核流",
    body: `<div class="alert info">拖动节点可调整顺序（原型模拟）。</div><div class="flow-line"><span class="flow-node">企业提交</span><span class="flow-arrow">→</span><span class="flow-node">系统词检</span><span class="flow-arrow">→</span><span class="flow-node">初审</span><span class="flow-arrow">→</span><span class="flow-node">复审</span></div><button class="btn small" style="margin-top:16px">+ 添加审核节点</button>`
  }
};

detailContent.sms = {
  title: "编辑短信模板",
  body: `<div class="field"><label>模板名称</label><input class="input" value="资料截止提醒"></div><div class="field" style="margin-top:15px"><label>短信正文</label><textarea class="textarea">【农业科技展】尊敬的\${企业名称}，您的参展资料将于\${截止时间}截止，请及时登录展务系统完成提交。</textarea><div class="help">可用变量：企业名称、截止时间、展位号、审核事项、驳回原因</div></div><div class="check-row" style="margin-top:15px"><label class="check"><input type="checkbox" checked> 启用模板</label><label class="check"><input type="checkbox" checked> 记录发送结果</label></div>`
};
detailContent.template = {
  title: "编辑绿搭模板",
  body: `<div class="form-grid"><div class="field"><label>模板名称</label><input class="input" value="G-30-A"></div><div class="field"><label>适用面积</label><input class="input" value="30㎡"></div><div class="field"><label>上传画面数量</label><input class="input js-face-count" type="number" value="4" min="1"></div><div class="field"><label>模板文件</label><button class="btn block js-upload">上传模板文件</button></div></div><div class="field" style="margin-top:15px"><label>画面名称（每行一个）</label><textarea class="textarea">1-1
1-2
1-3
1-4</textarea><div class="help">画面名称数量应与要求上传的画面数量一致。</div></div>`
};

document.addEventListener("click", (e) => {
  const detail = e.target.closest(".js-detail");
  if (detail) {
    e.preventDefault();
    const config = detailContent[detail.dataset.detail] || detailContent.enterprise;
    const modal = document.getElementById("actionModal");
    document.getElementById("modalTitle").textContent = config.title;
    document.getElementById("modalBody").innerHTML = config.body;
    modal.querySelector(".modal-box").classList.add("wide");
    modal.classList.add("open");
  }
  const choice = e.target.closest(".choice-card");
  if (choice) {
    const grid = choice.closest(".choice-grid");
    if (grid) grid.querySelectorAll(".choice-card").forEach(x => x.classList.remove("selected"));
    choice.classList.add("selected");
  }
  if (e.target.closest(".modal-close") || e.target.closest(".modal-submit")) {
    const box = document.querySelector("#actionModal .modal-box");
    if (box) box.classList.remove("wide");
  }
});

document.addEventListener("click", (e) => {
  const content = document.querySelector(".content");
  if (e.target.closest(".js-enter-edit")) {
    content.classList.remove("enterprise-view-mode");
    content.classList.add("enterprise-editing");
    toast("已进入编辑状态");
  }
  if (e.target.closest(".js-confirm-info")) toast("当前信息已确认");
  if (e.target.closest(".js-cancel-edit")) {
    content.classList.remove("enterprise-editing");
    content.classList.add("enterprise-view-mode");
    toast("已取消编辑");
  }
  if (e.target.closest(".js-save-draft")) {
    content.classList.remove("enterprise-editing");
    content.classList.add("enterprise-view-mode");
    toast("草稿已保存");
  }
  if (e.target.closest(".js-submit-edit")) {
    content.classList.remove("enterprise-editing");
    content.classList.add("enterprise-view-mode");
    toast("资料已提交审核");
  }
});

/* ===== 0625 系统设置：参数配置中心最终版 ===== */
const configTypeTag = (text, type="blue") => `<span class="config-tag ${type}">${text}</span>`;
const configChip = (text) => `<span class="config-chip">${text}<i>×</i></span>`;
const configRow = ({name, desc, type, typeStyle, module, area, count, chips, status, statusType, editable=false}) => `
  <tr class="config-main-row">
    <td>
      <div class="config-name"><strong>${name}</strong><span>${desc}</span></div>
    </td>
    <td>${configTypeTag(type, typeStyle)}</td>
    <td>${module}</td>
    <td>
      <div class="config-fields">
        <label>面积 <input class="config-input" value="${area}"></label>
        <label>画面数量 <input class="config-input mini" type="number" value="${count}"></label>
        <div class="config-chip-line"><span class="config-label">画面名称</span>${chips.map(configChip).join("")}</div>
      </div>
    </td>
    <td>${badge(status,statusType)}</td>
    <td>
      <div class="icon-actions">
        <button class="icon-btn js-config-edit" title="编辑">✏️</button>
        <button class="icon-btn js-modal" title="配置详情" data-title="配置详情" data-body-html="<div class='config-detail-preview'><strong>${name}</strong><p>${desc}</p><p>适用模块：${module}</p><p>当前画面：${chips.join('、')}</p></div>">⚙️</button>
        <button class="icon-btn js-confirm" title="删除" data-message="配置模板已删除">🗑</button>
        <button class="icon-btn js-modal" title="预览" data-title="模板预览" data-body-html="<div class='template-preview big'></div><p style='margin-top:12px;color:#667085'>${name} 原型预览，实际模板文件由后台上传维护。</p>">👁</button>
      </div>
    </td>
  </tr>
  <tr class="config-edit-row">
    <td colspan="6">
      <div class="inline-edit-panel">
        <div class="inline-edit-grid">
          <div class="field"><label>模板名称</label><input class="input" value="${name}"></div>
          <div class="field"><label>面积</label><input class="input" value="${area}"></div>
          <div class="field"><label>画面数量</label><input class="input" type="number" value="${count}" min="1"></div>
          <div class="field span-2"><label>画面名称</label><div class="config-chip-editor">${chips.map(configChip).join("")}<input class="chip-new-input" placeholder="+ 添加"></div></div>
        </div>
        <div class="form-actions"><button class="btn js-config-cancel">取消</button><button class="btn primary js-config-save">保存</button></div>
      </div>
    </td>
  </tr>`;

pages["admin-settings"] = () => shell(`
  <div class="settings-head">
    <div>
      <h2>系统设置 / 模板参数配置</h2>
      <p>用于配置系统中各类业务模板与结构参数</p>
    </div>
    <div class="settings-actions">
      ${button("新增配置模板","primary",'class="btn primary js-modal" data-title="新增配置模板" data-body-html="<div class=&quot;form-grid&quot;><div class=&quot;field&quot;><label>模板名称</label><input class=&quot;input&quot; placeholder=&quot;请输入模板名称&quot;></div><div class=&quot;field&quot;><label>模板类型</label><select class=&quot;select&quot;><option>标准模板</option><option>自定义模板</option></select></div><div class=&quot;field&quot;><label>适用模块</label><select class=&quot;select&quot;><option>标展管理</option><option>绿搭管理</option><option>光地管理</option></select></div><div class=&quot;field&quot;><label>画面数量</label><input class=&quot;input&quot; type=&quot;number&quot; value=&quot;4&quot;></div></div>"')}
      ${button("导入配置","",'class="btn js-upload"')}
      ${button("恢复默认","",'class="btn js-confirm" data-message="已恢复默认配置"')}
    </div>
  </div>
  <div class="card config-center-card">
    <div class="config-toolbar">
      <input class="input search" placeholder="搜索模板名称 / 适用模块">
      <select class="select"><option>全部模板类型</option><option>标准模板</option><option>自定义模板</option><option>系统默认</option></select>
      <select class="select"><option>全部状态</option><option>启用</option><option>停用</option><option>草稿</option></select>
    </div>
    <div class="table-wrap config-table-wrap">
      <table class="config-table">
        <thead><tr><th>模板名称</th><th>模板类型</th><th>适用模块</th><th>配置项</th><th>状态</th><th>操作</th></tr></thead>
        <tbody>
          ${configRow({name:"标展标准模板",desc:"用于标准展位楣板、报道书和基础资料结构",type:"标准模板",typeStyle:"blue",module:"标展管理",area:"9㎡",count:"2",chips:["楣板正面","用电需求"],status:"启用",statusType:"success"})}
          ${configRow({name:"绿搭展位模板",desc:"按面积规格配置需上传的设计画面数量与名称",type:"自定义模板",typeStyle:"purple",module:"绿搭管理",area:"30㎡",count:"4",chips:["1-1","1-2","1-3","1-4"],status:"启用",statusType:"success"})}
          ${configRow({name:"光地报馆模板",desc:"用于光地搭建商资料、图纸和安全文件清单",type:"系统默认",typeStyle:"gray",module:"光地管理",area:"54㎡",count:"4",chips:["搭建商资质","平面图","电路图","安全承诺书"],status:"草稿",statusType:"info"})}
          ${configRow({name:"绿搭 36㎡ 三开口模板",desc:"升级绿搭方案，包含正反面与侧面画面",type:"自定义模板",typeStyle:"purple",module:"绿搭管理",area:"36㎡",count:"6",chips:["1-正","1-反","2-正","2-反","3-1","3-2"],status:"停用",statusType:"danger"})}
        </tbody>
      </table>
    </div>
  </div>`, true);

if (page === "admin-settings") {
  document.getElementById("app").innerHTML = pages["admin-settings"]();
}

document.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".js-config-edit");
  if (editBtn) {
    const mainRow = editBtn.closest(".config-main-row");
    mainRow?.classList.toggle("editing");
    mainRow?.nextElementSibling?.classList.toggle("open");
  }
  if (e.target.closest(".js-config-cancel")) {
    const editRow = e.target.closest(".config-edit-row");
    editRow?.classList.remove("open");
    editRow?.previousElementSibling?.classList.remove("editing");
  }
  if (e.target.closest(".js-config-save")) {
    const editRow = e.target.closest(".config-edit-row");
    editRow?.classList.remove("open");
    editRow?.previousElementSibling?.classList.remove("editing");
    toast("配置已保存");
  }
});

/* ===== 0625 消息与规则中心最终版 ===== */
meta["admin-message"] = ["消息与规则中心","统一管理系统通知、业务消息与风控规则"];
if (typeof adminNav !== "undefined") {
  adminNav.forEach(item => {
    if (item[1] === "admin-message") item[3] = "消息与规则中心";
  });
}

const policyWordTag = (text, cls="gray", tip="命中后进入人工审核") =>
  `<span class="policy-word ${cls}" title="${tip}">${text}<i>×</i></span>`;

pages["admin-message"] = () => shell(`
  <div class="policy-head">
    <div>
      <h2>消息与规则中心</h2>
      <p>统一承载系统通知、业务消息与内容安全策略</p>
    </div>
  </div>
  <div class="card message-policy-card">
    <div class="tabs policy-tabs">
      <button class="tab-btn active" data-tab="policy-system">系统通知</button>
      <button class="tab-btn" data-tab="policy-business">业务消息</button>
      <button class="tab-btn" data-tab="policy-risk">风控规则</button>
    </div>

    <div class="tab-panel active" id="tab-policy-system">
      <div class="policy-toolbar">
        <div class="toolbar-left">
          ${button("发布通知","primary",'class="btn primary js-fake-send" data-message="系统通知已发送"')}
          ${button("批量发送","",'class="btn js-confirm" data-message="已加入批量发送队列"')}
          ${button("定时任务设置","",'class="btn js-modal" data-title="定时任务设置" data-body="设置通知发布时间、重复频率和失效时间。"')}
        </div>
        <div class="toolbar-right">
          <input class="input search" placeholder="搜索标题 / 类型">
        </div>
      </div>
      <div class="policy-layout">
        <div class="table-wrap">
          <table>
            <thead><tr><th>标题</th><th>类型</th><th>接收范围</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
            <tbody>
              <tr>
                <td><span class="link js-modal" data-title="通知详情" data-body-html="<div class='drawer-preview'><h3>布展通道临时调整通知</h3><p>因场馆交通安排调整，3H馆北侧卸货通道将于 06-26 08:00 起启用新路线，请相关人员提前知悉。</p><div class='drawer-meta'>类型：公告通知 · 接收范围：全部用户</div></div>">布展通道临时调整通知</span></td>
                <td>${badge("公告","info")}</td>
                <td>全部用户</td>
                <td>06-25 09:30</td>
                <td>${badge("已发送","success")}</td>
                <td><span class="link js-modal" data-title="通知详情" data-body="查看通知正文、发送记录与阅读状态。">预览</span></td>
              </tr>
              <tr>
                <td><span class="link js-modal" data-title="通知详情" data-body="今晚 23:00 至 23:30 进行系统升级，期间部分功能只读。">系统升级窗口提醒</span></td>
                <td>${badge("系统升级","warning")}</td>
                <td>管理员 / 审核员</td>
                <td>06-25 20:00</td>
                <td>${badge("待发送","warning")}</td>
                <td><span class="link js-confirm" data-message="待发送通知已撤回">撤回</span></td>
              </tr>
              <tr>
                <td><span class="link js-modal" data-title="通知详情" data-body="近期存在异常登录尝试，请及时更新密码并检查账号授权。">账号安全提醒</span></td>
                <td>${badge("安全提醒","danger")}</td>
                <td>系统管理员</td>
                <td>06-24 18:20</td>
                <td>${badge("已撤回","info")}</td>
                <td><span class="link js-modal" data-title="通知详情" data-body="该通知已撤回，可复制内容重新发布。">查看</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card quick-publish-card">
          <div class="card-head"><div><div class="card-title">快速发布</div><div class="card-sub">右侧即发即配，适合公告和紧急通知</div></div>${badge("草稿中","info")}</div>
          <div class="field"><label>通知标题</label><input class="input" value="布展时间提醒"></div>
          <div class="field"><label>通知类型</label><select class="select"><option>公告</option><option>系统升级</option><option>安全提醒</option><option>活动通知</option></select></div>
          <div class="field"><label>接收范围</label><select class="select"><option>全部用户</option><option>管理员</option><option>部门</option><option>展商</option></select></div>
          <div class="field switch-field">
            <label>定时发送</label>
            <label class="switch"><input type="checkbox" checked><span></span></label>
          </div>
          <div class="field"><label>发送时间</label><input class="input" type="datetime-local" value="2026-06-25T18:30"></div>
          <div class="field"><label>通知内容</label><textarea class="textarea rich-editor">请各参展单位在截止前完成资料补录与审核反馈处理，逾期系统将限制继续提交。</textarea></div>
          <div class="form-actions">
            ${button("发送","primary",'class="btn primary js-fake-send" data-message="通知发送成功"')}
            ${button("存草稿","",'class="btn js-confirm" data-message="通知已保存为草稿"')}
            ${button("预览","",'class="btn js-modal" data-title="通知预览" data-body="预览通知标题、接收范围、定时发送时间和正文内容。"')}
          </div>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-policy-business">
      <div class="tabs sub-tabs">
        <button class="tab-btn active" data-tab="biz-approve">审批通知</button>
        <button class="tab-btn" data-tab="biz-review">审核通知</button>
        <button class="tab-btn" data-tab="biz-remind">系统提醒</button>
        <button class="tab-btn" data-tab="biz-alert">异常告警</button>
      </div>
      <div class="policy-layout business-layout">
        <div class="tab-panel active" id="tab-biz-approve">
          <div class="table-wrap">
            <table>
              <thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
              <tbody>
                <tr>
                  <td>绿搭改稿申请待审批，申请编号 GX-20260625-03</td>
                  <td>绿搭管理</td>
                  <td>张经理</td>
                  <td>06-25 10:08</td>
                  <td><span class="msg-state unread"><b></b>未读</span></td>
                  <td><span class="link js-business-open">去处理</span></td>
                </tr>
                <tr>
                  <td>光地电路图补正申请已重新提交</td>
                  <td>光地管理</td>
                  <td>审核组</td>
                  <td>06-25 09:20</td>
                  <td><span class="msg-state handled">已处理</span></td>
                  <td><span class="link js-business-open">查看</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab-panel" id="tab-biz-review">
          <div class="table-wrap">
            <table>
              <thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
              <tbody>
                <tr><td>标展楣板信息已更新，待后台复核</td><td>标展管理</td><td>展商管理员</td><td>06-25 08:45</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">去处理</span></td></tr>
                <tr><td>营业执照替换文件上传完成</td><td>企业资料</td><td>审核组</td><td>06-24 17:32</td><td><span class="msg-state read">已读</span></td><td><span class="link js-business-open">查看</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab-panel" id="tab-biz-remind">
          <div class="table-wrap">
            <table>
              <thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
              <tbody>
                <tr><td>资料上传将在 3 天后截止</td><td>进度中心</td><td>全部展商</td><td>06-25 09:00</td><td><span class="msg-state read">已读</span></td><td><span class="link js-business-open">查看</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab-panel" id="tab-biz-alert">
          <div class="table-wrap">
            <table>
              <thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
              <tbody>
                <tr><td>绿搭设计图命中高风险词“行业第一”</td><td>风控引擎</td><td>内容安全组</td><td>06-25 11:18</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">去处理</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card business-drawer">
          <div class="card-head"><div><div class="card-title">消息详情</div><div class="card-sub">统一工作流消息预览</div></div>${badge("未读","info")}</div>
          <div class="drawer-block"><span>消息内容</span><strong>绿搭改稿申请待审批，申请编号 GX-20260625-03</strong></div>
          <div class="drawer-block"><span>关联业务</span><strong>2026 中国国际农业科技展 / 华丰农业科技 / A3-218</strong></div>
          <div class="drawer-block"><span>来源模块</span><strong>绿搭管理</strong></div>
          <div class="drawer-actions">
            ${button("去处理","primary",'class="btn primary js-confirm" data-message="已跳转到待处理业务（原型模拟）"')}
            ${button("标记已读","",'class="btn js-confirm" data-message="已标记为已读"')}
            ${button("忽略","",'class="btn js-confirm" data-message="该消息已忽略"')}
          </div>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-policy-risk">
      <div class="policy-toolbar">
        <div class="toolbar-left">
          ${button("新增规则","primary",'class="btn primary js-modal" data-title="新增风控规则" data-body="配置规则名称、命中范围、词库分类与联动动作。"')}
          ${button("批量导入","",'class="btn js-upload"')}
          ${button("导出词库","",'class="btn js-download"')}
        </div>
        <div class="toolbar-right">
          <label class="switch-line">启用/停用开关 <label class="switch"><input type="checkbox" checked><span></span></label></label>
        </div>
      </div>
      <div class="grid grid-2 policy-risk-grid">
        <div class="card">
          <div class="card-head"><div><div class="card-title">词库管理</div><div class="card-sub">支持逗号 / 换行 / 空格分割，自动去重与分类识别</div></div>${badge("内容安全策略中心","info")}</div>
          <div class="field"><label>批量输入区</label><textarea class="textarea">暴力, 色情, 赌博, 毒品, 政治敏感, 欺诈, 虚假宣传</textarea></div>
          <div class="form-actions">
            ${button("智能识别并入库","primary",'class="btn primary js-fake-send" data-message="词库已识别并更新"')}
            ${button("清空输入","",'class="btn js-confirm" data-message="已清空输入区"')}
          </div>
          <div class="policy-word-board">
            ${policyWordTag("暴力","red","命中后拒绝提交并记录日志")}
            ${policyWordTag("色情","red","命中后拒绝提交并记录日志")}
            ${policyWordTag("赌博","orange","命中后提示修改并人工审核")}
            ${policyWordTag("欺诈","orange","命中后进入异常告警")}
            ${policyWordTag("政治敏感","purple","命中后高优先级拦截")}
            ${policyWordTag("虚假宣传","gray","命中后提示修改")}
          </div>
        </div>
        <div class="card">
          <div class="card-head"><div><div class="card-title">检测规则</div><div class="card-sub">从敏感词列表升级为规则引擎式内容安全策略</div></div>${badge("推荐模糊匹配","warning")}</div>
          <div class="field">
            <label>模式选择</label>
            <div class="rule-options">
              <label class="check"><input type="radio" name="riskMode"> 精确匹配</label>
              <label class="check"><input type="radio" name="riskMode" checked> 模糊匹配（推荐）</label>
              <label class="check"><input type="radio" name="riskMode"> AI语义识别（高级）</label>
            </div>
          </div>
          <div class="field">
            <label>拦截动作</label>
            <div class="rule-options">
              <label class="check"><input type="checkbox" checked> 拒绝提交</label>
              <label class="check"><input type="checkbox" checked> 提示修改</label>
              <label class="check"><input type="checkbox" checked> 标记人工审核</label>
              <label class="check"><input type="checkbox"> 仅记录日志</label>
            </div>
          </div>
          <div class="policy-link-card">
            <strong>审批 / 风控联动</strong>
            <p>命中敏感词后自动进入“待审核”，并同步写入业务消息与风控告警。</p>
          </div>
          <div class="policy-link-card">
            <strong>统一消息体系</strong>
            <p>系统通知、业务消息、风控告警统一进入消息中心，便于跟踪处理闭环。</p>
          </div>
          <div class="form-actions">
            ${button("保存规则","primary",'class="btn primary js-fake-send" data-message="风控规则已保存"')}
            ${button("预览命中效果","",'class="btn js-modal" data-title="命中效果预览" data-body="命中虚假宣传类词汇后：提示修改 + 标记人工审核 + 写入日志。"')}
          </div>
        </div>
      </div>
    </div>
  </div>`, true);

if (page === "admin-message") {
  document.getElementById("app").innerHTML = pages["admin-message"]();
}

document.addEventListener("click", (e) => {
  const sendBtn = e.target.closest(".js-fake-send");
  if (sendBtn) {
    if (sendBtn.dataset.loading === "1") return;
    const original = sendBtn.textContent;
    sendBtn.dataset.loading = "1";
    sendBtn.classList.add("is-loading");
    sendBtn.textContent = "发送中...";
    setTimeout(() => {
      sendBtn.dataset.loading = "0";
      sendBtn.classList.remove("is-loading");
      sendBtn.textContent = original;
      toast(sendBtn.dataset.message || "操作成功");
    }, 700);
  }
  if (e.target.closest(".js-business-open")) {
    document.querySelectorAll(".business-drawer .badge").forEach(x => x.outerHTML = '<span class="badge default">查看中</span>');
    toast("已打开消息详情");
  }
});

/* ===== 0625 拆分重构：消息通知 / 系统设置最终版 ===== */
meta["admin-message"] = ["消息通知","统一管理系统通知与业务消息"];
meta["admin-settings"] = ["系统设置","风控规则、资料配置、报到书模板与审核流配置"];
if (typeof adminNav !== "undefined") {
  adminNav.forEach(item => {
    if (item[1] === "admin-message") item[3] = "消息通知";
    if (item[1] === "admin-settings") item[3] = "系统设置";
  });
}

const settingTag = (text, cls="gray") => `<span class="policy-word ${cls}">${text}<i>×</i></span>`;
const flowNode = (title, role, rule) => `<div class="flow-designer-node"><strong>${title}</strong><span>${role}</span><small>${rule}</small></div>`;
const materialConfigRow = ({name, boothType, area, count, chips, status, statusType}) => `
  <tr class="config-main-row">
    <td><div class="config-name"><strong>${name}</strong><span>支持即时生效与结构化配置</span></div></td>
    <td>${boothType}</td>
    <td><input class="config-input" value="${area}"></td>
    <td><input class="config-input mini" type="number" value="${count}"></td>
    <td><div class="config-chip-line">${chips.map(configChip).join("")}</div></td>
    <td>${badge(status,statusType)}</td>
    <td><div class="icon-actions"><button class="icon-btn js-config-edit" title="编辑">✏️</button><button class="icon-btn js-modal" title="配置详情" data-title="配置详情" data-body-html="<div class='config-detail-preview'><strong>${name}</strong><p>展位类型：${boothType}</p><p>画面名称：${chips.join('、')}</p><p>支持模板结构树、布局预览与字段规则配置。</p></div>">⚙️</button><button class="icon-btn js-confirm" title="删除" data-message="资料配置已删除">🗑</button><button class="icon-btn js-modal" title="预览效果图" data-title="效果图预览" data-body-html="<div class='template-preview big'></div><p style='margin-top:12px;color:#667085'>${name} 预览效果图（原型模拟）。</p>">👁</button></div></td>
  </tr>
  <tr class="config-edit-row">
    <td colspan="7">
      <div class="inline-edit-panel">
        <div class="inline-edit-grid material-grid">
          <div class="field"><label>模板名称</label><input class="input" value="${name}"></div>
          <div class="field"><label>展位类型</label><select class="select"><option>${boothType}</option></select></div>
          <div class="field"><label>面积</label><input class="input" value="${area}"></div>
          <div class="field"><label>画面数量</label><input class="input" type="number" value="${count}" min="1"></div>
          <div class="field span-2"><label>画面名称</label><div class="config-chip-editor">${chips.map(configChip).join("")}<input class="chip-new-input" placeholder="+ 添加"></div></div>
        </div>
        <div class="form-actions"><button class="btn js-config-cancel">取消</button><button class="btn primary js-config-save">保存</button></div>
      </div>
    </td>
  </tr>`;

pages["admin-message"] = () => shell(`
  <div class="policy-head">
    <div>
      <h2>消息通知</h2>
      <p>统一处理系统通知与业务工作流消息</p>
    </div>
  </div>
  <div class="card message-policy-card">
    <div class="tabs policy-tabs">
      <button class="tab-btn active" data-tab="msg-system">系统通知</button>
      <button class="tab-btn" data-tab="msg-business">业务消息</button>
    </div>

    <div class="tab-panel active" id="tab-msg-system">
      <div class="policy-toolbar">
        <div class="toolbar-left">
          ${button("发布通知","primary",'class="btn primary js-fake-send" data-message="系统通知已发送"')}
          ${button("批量发送","",'class="btn js-confirm" data-message="已加入批量发送队列"')}
          ${button("定时任务设置","",'class="btn js-modal" data-title="定时任务设置" data-body="设置发布时间、重复频率与发送范围。"')}
        </div>
        <div class="toolbar-right"><input class="input search" placeholder="搜索标题 / 类型"></div>
      </div>
      <div class="policy-layout">
        <div class="table-wrap">
          <table>
            <thead><tr><th>标题</th><th>类型</th><th>接收范围</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><span class="link js-modal" data-title="通知详情" data-body="3H馆进场路线临时调整，请相关人员提前知悉。">布展路线调整通知</span></td><td>${badge("公告","info")}</td><td>全部用户</td><td>06-25 09:30</td><td>${badge("已发送","success")}</td><td><span class="link js-modal" data-title="通知详情" data-body="查看通知正文、发送记录与阅读状态。">预览</span></td></tr>
              <tr><td><span class="link js-modal" data-title="通知详情" data-body="今晚 23:00 至 23:30 进行系统升级。">系统升级窗口提醒</span></td><td>${badge("系统升级","warning")}</td><td>管理员</td><td>06-25 20:00</td><td>${badge("待发送","warning")}</td><td><span class="link js-confirm" data-message="待发送通知已撤回">撤回</span></td></tr>
              <tr><td><span class="link js-modal" data-title="通知详情" data-body="近期存在异常登录尝试，请及时检查授权。">账号安全提醒</span></td><td>${badge("安全提醒","danger")}</td><td>部门</td><td>06-24 18:20</td><td>${badge("已撤回","info")}</td><td><span class="link js-modal" data-title="通知详情" data-body="该通知已撤回，可复制重新发布。">查看</span></td></tr>
            </tbody>
          </table>
        </div>
        <div class="card quick-publish-card">
          <div class="card-head"><div><div class="card-title">快速发布</div><div class="card-sub">公告、升级和安全类通知统一从这里发出</div></div>${badge("草稿中","info")}</div>
          <div class="field"><label>通知标题</label><input class="input" value="资料补录截止提醒"></div>
          <div class="field"><label>通知类型</label><select class="select"><option>公告</option><option>系统升级</option><option>安全提醒</option><option>活动通知</option></select></div>
          <div class="field"><label>接收范围</label><select class="select"><option>全部用户</option><option>管理员</option><option>部门</option><option>展商</option></select></div>
          <div class="field switch-field"><label>定时发送</label><label class="switch"><input type="checkbox" checked><span></span></label></div>
          <div class="field"><label>发送时间</label><input class="input" type="datetime-local" value="2026-06-25T18:30"></div>
          <div class="field"><label>通知内容</label><textarea class="textarea rich-editor">请各参展单位在截止前完成资料补录与审核反馈处理，逾期系统将限制继续提交。</textarea></div>
          <div class="form-actions">${button("发送","primary",'class="btn primary js-fake-send" data-message="通知发送成功"')}${button("存草稿","",'class="btn js-confirm" data-message="通知已保存为草稿"')}${button("预览","",'class="btn js-modal" data-title="通知预览" data-body="预览通知标题、发送范围与正文。"')}</div>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-msg-business">
      <div class="tabs sub-tabs">
        <button class="tab-btn active" data-tab="biz-approve-2">审批通知</button>
        <button class="tab-btn" data-tab="biz-review-2">审核通知</button>
        <button class="tab-btn" data-tab="biz-remind-2">系统提醒</button>
        <button class="tab-btn" data-tab="biz-alert-2">异常告警</button>
      </div>
      <div class="policy-layout business-layout">
        <div>
          <div class="tab-panel active" id="tab-biz-approve-2"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>绿搭改稿申请待审批，编号 GX-20260625-03</td><td>绿搭管理</td><td>张经理</td><td>06-25 10:08</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">去处理</span></td></tr><tr><td>光地电路图补正申请已重新提交</td><td>光地管理</td><td>审核组</td><td>06-25 09:20</td><td><span class="msg-state handled">已处理</span></td><td><span class="link js-business-open">查看</span></td></tr></tbody></table></div></div>
          <div class="tab-panel" id="tab-biz-review-2"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>标展楣板信息已更新，待后台复核</td><td>标展管理</td><td>展商管理员</td><td>06-25 08:45</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">去处理</span></td></tr><tr><td>营业执照替换文件上传完成</td><td>企业资料</td><td>审核组</td><td>06-24 17:32</td><td><span class="msg-state read">已读</span></td><td><span class="link js-business-open">查看</span></td></tr></tbody></table></div></div>
          <div class="tab-panel" id="tab-biz-remind-2"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>资料上传将在 3 天后截止</td><td>进度中心</td><td>全部展商</td><td>06-25 09:00</td><td><span class="msg-state read">已读</span></td><td><span class="link js-business-open">查看</span></td></tr></tbody></table></div></div>
          <div class="tab-panel" id="tab-biz-alert-2"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>绿搭设计图命中高风险词“行业第一”</td><td>风控告警</td><td>内容安全组</td><td>06-25 11:18</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">去处理</span></td></tr></tbody></table></div></div>
        </div>
        <div class="card business-drawer">
          <div class="card-head"><div><div class="card-title">消息详情</div><div class="card-sub">工作流消息统一在这里查看与处理</div></div>${badge("未读","info")}</div>
          <div class="drawer-block"><span>消息内容</span><strong>绿搭改稿申请待审批，申请编号 GX-20260625-03</strong></div>
          <div class="drawer-block"><span>关联业务</span><strong>2026 中国国际农业科技展 / 华丰农业科技 / A3-218</strong></div>
          <div class="drawer-block"><span>来源模块</span><strong>绿搭管理</strong></div>
          <div class="drawer-actions">${button("去处理","primary",'class="btn primary js-confirm" data-message="已跳转到待处理业务（原型模拟）"')}${button("标记已读","",'class="btn js-confirm" data-message="已标记为已读"')}${button("忽略","",'class="btn js-confirm" data-message="该消息已忽略"')}</div>
        </div>
      </div>
    </div>
  </div>`, true);

pages["admin-settings"] = () => shell(`
  <div class="settings-head">
    <div>
      <h2>系统设置</h2>
      <p>统一维护风控规则、资料结构、参展报到书模板与审核流</p>
    </div>
  </div>
  <div class="card message-policy-card">
    <div class="tabs policy-tabs">
      <button class="tab-btn active" data-tab="setting-risk">风控规则配置</button>
      <button class="tab-btn" data-tab="setting-material">资料配置</button>
      <button class="tab-btn" data-tab="setting-notice">参展报到书模板配置</button>
      <button class="tab-btn" data-tab="setting-flow">审核流配置</button>
    </div>

    <div class="tab-panel active" id="tab-setting-risk">
      <div class="grid grid-2 policy-risk-grid">
        <div class="card">
          <div class="card-head"><div><div class="card-title">词库批量导入区</div><div class="card-sub">支持逗号 / 换行 / 空格，自动去重与分类识别</div></div>${badge("即时生效","success")}</div>
          <div class="field"><label>批量输入</label><textarea class="textarea">暴力, 色情, 赌博, 政治敏感, 虚假宣传, 诈骗, 恐怖主义</textarea></div>
          <div class="form-actions">${button("批量导入","primary",'class="btn primary js-fake-send" data-message="词库已批量导入"')}${button("导出词库","",'class="btn js-download"')}${button("清空词库","",'class="btn js-confirm" data-message="词库输入区已清空"')}</div>
          <div class="policy-word-board">
            ${settingTag("暴力","red")}
            ${settingTag("色情","red")}
            ${settingTag("诈骗","orange")}
            ${settingTag("虚假宣传","orange")}
            ${settingTag("政治敏感","purple")}
            ${settingTag("普通违规","gray")}
          </div>
        </div>
        <div class="card">
          <div class="card-head"><div><div class="card-title">检测规则配置区</div><div class="card-sub">规则命中后直接联动展商提交行为与待审核流程</div></div>${badge("模糊匹配","warning")}</div>
          <div class="field"><label>匹配模式</label><div class="rule-options"><label class="check"><input type="radio" name="riskMode2"> 精确匹配</label><label class="check"><input type="radio" name="riskMode2" checked> 模糊匹配（推荐）</label><label class="check"><input type="radio" name="riskMode2"> AI语义识别（高级）</label></div></div>
          <div class="field"><label>拦截动作</label><div class="rule-options"><label class="check"><input type="checkbox" checked> 拒绝提交</label><label class="check"><input type="checkbox" checked> 提示修改</label><label class="check"><input type="checkbox" checked> 转人工审核</label><label class="check"><input type="checkbox"> 仅记录不拦截</label></div></div>
          <div class="form-actions">${button("保存规则","primary",'class="btn primary js-fake-send" data-message="风控规则已保存"')}${button("测试命中","",'class="btn js-modal" data-title="测试命中" data-body="输入测试文本后模拟命中词库与拦截动作。"')}</div>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-setting-material">
      <div class="settings-head settings-head-inline">
        <div><h3>资料配置</h3><p>模板参数配置已重命名为资料配置，采用表格驱动与行级编辑</p></div>
      </div>
      <div class="table-wrap config-table-wrap">
        <table class="config-table">
          <thead><tr><th>模板名称</th><th>展位类型</th><th>面积</th><th>画面数量</th><th>画面名称</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>
            ${materialConfigRow({name:"标展标准资料模板",boothType:"标展",area:"9㎡",count:"2",chips:["楣板信息","用电需求"],status:"启用",statusType:"success"})}
            ${materialConfigRow({name:"绿搭展位资料模板",boothType:"绿搭",area:"30㎡",count:"4",chips:["1-1","1-2","1-3","1-4"],status:"启用",statusType:"success"})}
            ${materialConfigRow({name:"光地报馆资料模板",boothType:"光地",area:"54㎡",count:"4",chips:["搭建商资质","平面图","电路图","安全承诺书"],status:"草稿",statusType:"info"})}
          </tbody>
        </table>
      </div>
    </div>

    <div class="tab-panel" id="tab-setting-notice">
      <div class="table-wrap">
        <table>
          <thead><tr><th>展会名称</th><th>模板名称</th><th>状态</th><th>更新时间</th><th>操作</th></tr></thead>
          <tbody>
            <tr><td>2026 中国国际农业科技展</td><td>标准报到书模板 v3</td><td>${badge("启用","success")}</td><td>06-25 09:10</td><td><span class="link js-modal" data-title="模板详情" data-body-html="<div class='drawer-preview'><h3>标准报到书模板 v3</h3><p>包含报到时间、地点、展位号、对接人及注意事项。</p><p>支持流程步骤编辑、版本回滚和复制模板。</p></div>">查看</span></td></tr>
            <tr><td>2026 西南农资订货会</td><td>西南展会报到模板 v2</td><td>${badge("草稿","info")}</td><td>06-24 16:40</td><td><span class="link js-modal" data-title="模板编辑" data-body-html="<div class='field'><label>报到时间</label><input class='input' value='2026-10-11 09:00'></div><div class='field'><label>报到地点</label><input class='input' value='成都世纪城 1 号门'></div><div class='field'><label>对接人</label><input class='input' value='王经理'></div><div class='field'><label>报到流程</label><textarea class='textarea'>签到 → 领取证件 → 展位确认 → 入场 → 完成</textarea></div><div class='field'><label>注意事项</label><textarea class='textarea'>请按规定时间报到，携带企业资料与人员证件。</textarea></div><div class='field'><label>版本管理</label><select class='select'><option>v3</option><option>v2</option><option>v1</option></select></div>">编辑</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="grid grid-2" style="margin-top:16px">
        <div class="card">
          <div class="card-title">报到流程步骤编辑器</div>
          <div class="flow-line editable-flow"><span class="flow-node">签到</span><span class="flow-arrow">→</span><span class="flow-node">领取证件</span><span class="flow-arrow">→</span><span class="flow-node">展位确认</span><span class="flow-arrow">→</span><span class="flow-node">入场</span><span class="flow-arrow">→</span><span class="flow-node">完成</span></div>
          <div class="form-actions">${button("新增节点","",'class="btn js-confirm" data-message="已新增流程节点（原型模拟）"')}${button("保存流程","primary",'class="btn primary js-fake-send" data-message="报到流程已保存"')}</div>
        </div>
        <div class="card">
          <div class="card-title">模板版本管理</div>
          <div class="list-item"><span>v3 当前启用版本</span>${badge("当前","success")}</div>
          <div class="list-item"><span>v2 2026-06-20</span><span class="link js-confirm" data-message="已回滚到 v2（原型模拟）">回滚</span></div>
          <div class="list-item"><span>v1 初始版本</span><span class="link js-confirm" data-message="已复制模板生成新版本">复制模板</span></div>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-setting-flow">
      <div class="table-wrap">
        <table>
          <thead><tr><th>流程名称</th><th>适用模块</th><th>节点数</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>
            <tr><td>参展资料审核流</td><td>企业资料</td><td>4</td><td>${badge("启用","success")}</td><td><span class="link js-modal" data-title="流程详情" data-body="查看流程节点、审核角色、通知策略与超时处理。">配置</span></td></tr>
            <tr><td>绿搭设计图审核流</td><td>绿搭管理</td><td>5</td><td>${badge("默认流程","info")}</td><td><span class="link js-modal" data-title="流程详情" data-body="支持默认流程设置、条件分支与节点规则。" >配置</span></td></tr>
            <tr><td>光地报馆审核流</td><td>光地管理</td><td>4</td><td>${badge("停用","danger")}</td><td><span class="link js-confirm" data-message="流程已启用">启用</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="grid grid-2" style="margin-top:16px">
        <div class="card">
          <div class="card-title">流程设计器</div>
          <div class="flow-designer">
            ${flowNode("申请人","系统 / 展商","提交资料")}
            <span class="flow-arrow">→</span>
            ${flowNode("初审","管理员","通过 / 驳回")}
            <span class="flow-arrow">→</span>
            ${flowNode("复审","供应商","通过 / 退回修改")}
            <span class="flow-arrow">→</span>
            ${flowNode("终审","管理员","完成确认")}
            <span class="flow-arrow">→</span>
            ${flowNode("完成","系统","通知归档")}
          </div>
        </div>
        <div class="card">
          <div class="card-title">节点配置</div>
          <div class="field"><label>审核角色</label><select class="select"><option>管理员</option><option>供应商</option><option>系统</option></select></div>
          <div class="field"><label>审核规则</label><select class="select"><option>通过 / 驳回 / 退回修改</option></select></div>
          <div class="field"><label>超时处理</label><select class="select"><option>自动提醒</option><option>转上级处理</option><option>仅记录</option></select></div>
          <div class="field"><label>通知策略</label><select class="select"><option>站内信 + 短信</option><option>仅站内信</option></select></div>
          <div class="form-actions">${button("设为默认流程","",'class="btn js-confirm" data-message="已设为默认流程"')}${button("保存配置","primary",'class="btn primary js-fake-send" data-message="审核流配置已保存"')}</div>
        </div>
      </div>
    </div>
  </div>`, true);

if (page === "admin-message" || page === "admin-settings") {
  document.getElementById("app").innerHTML = pages[page]();
}

/* ===== 0625 消息权限 / 电子协议 / 供应商详情统一版 ===== */
meta["supplier-message"] = ["消息通知","供应商仅可查看消息列表与详情，不可发布或编辑"];
meta["message"] = ["消息管理","展商仅可查看消息列表与详情"];
meta["supplier-green-detail"] = ["绿搭审核详情","固定展示楣板信息，逐图审核并查看电子协议"];
meta["supplier-standard-detail"] = ["标展审核详情","固定展示楣板信息，审核资料并查看电子协议"];
meta["supplier-raw-detail"] = ["光地审核详情","固定展示楣板信息，审核报馆资料并查看电子协议"];

const agreementBlock = (role="viewer", boothNo="A3-218") => `
  <div class="agreement-card">
    <div class="detail-section-head">
      <div><h3>电子协议</h3><p>展位合同 / 合作协议在线查看与签署</p></div>
      ${role === "sign" ? badge("未签署","default") : badge("只读","info")}
    </div>
    <div class="agreement-brief">
      <div><span>协议编号</span><strong>AG-${boothNo.replace("-","")}-2026</strong></div>
      <div><span>适用展位</span><strong>${boothNo}</strong></div>
      <div><span>协议状态</span><strong>${role === "sign" ? "待确认签署" : "仅可查看"}</strong></div>
    </div>
    <div class="form-actions">
      <button class="btn js-modal" data-title="查看电子协议" data-body-html="<div class='agreement-modal'><div class='agreement-paper'><h3>展位服务电子协议</h3><p>甲方（主办方）与乙方（参展企业/供应商）就展位使用、资料提交、内容审核、现场服务、报到流程与安全责任达成一致。</p><p>1. 乙方应按系统要求提交真实、完整、合法的资料；2. 命中风控规则的内容将进入待审核或驳回流程；3. 展位效果图、楣板信息、报到通知书等以系统最终确认内容为准；4. 现场施工、报馆、安全责任按展会统一规定执行。</p><p>本原型中协议内容为静态展示，仅模拟滚动阅读与确认签署操作。</p></div>${role === "sign" ? "<div class='agreement-fixed-bar'><button class='btn primary js-confirm' data-message='电子协议已确认签署'>确认签署协议</button></div>" : ""}</div>">查看电子协议</button>
    </div>
  </div>`;

const supplierStickyHeader = ({company, boothNo, boothType, contact, phone}) => `
  <div class="supplier-sticky-head">
    <div class="supplier-sticky-title">楣板信息</div>
    <div class="supplier-sticky-grid">
      <div><span>企业名称</span><strong>${company}</strong></div>
      <div><span>展位号</span><strong>${boothNo}</strong></div>
      <div><span>展位类型</span><strong>${boothType}</strong></div>
      <div><span>联系人</span><strong>${contact}</strong></div>
      <div><span>联系电话</span><strong>${phone}</strong></div>
    </div>
  </div>`;

pages["supplier-message"] = () => supplierShell(`
  <div class="card readonly-message-card">
    <div class="card-head"><div><div class="card-title">消息列表</div><div class="card-sub">供应商端只读查看消息，不支持发布或编辑</div></div>${badge("只读权限","info")}</div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>标题</th><th>类型</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
        <tbody>
          <tr><td>绿搭设计图审核提醒</td><td>审核通知</td><td>06-25 10:18</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-modal" data-title="消息详情" data-body-html="<div class='drawer-preview'><h3>绿搭设计图审核提醒</h3><p>华丰农业科技 A3-218 的 4 张设计图已全部上传，请按顺序逐条审核。</p><div class='drawer-meta'>关联展会：2026 中国国际农业科技展<br>关联企业：华丰农业科技</div><div class='form-actions' style='margin-top:16px'><button class='btn js-confirm' data-message='已标记为已读'>标记已读</button><button class='btn' onclick='document.getElementById(&quot;actionModal&quot;).classList.remove(&quot;open&quot;)'>返回</button></div></div>">查看详情</span></td></tr>
          <tr><td>光地报馆资料待复核</td><td>业务消息</td><td>06-25 09:06</td><td><span class="msg-state read">已读</span></td><td><span class="link js-modal" data-title="消息详情" data-body-html="<div class='drawer-preview'><h3>光地报馆资料待复核</h3><p>C2-106 电路图已补充上传，请继续完成复核。</p><div class='drawer-meta'>关联展会：2026 中国国际农业科技展<br>关联企业：丰农装备</div><div class='form-actions' style='margin-top:16px'><button class='btn js-confirm' data-message='已标记为已读'>标记已读</button><button class='btn' onclick='document.getElementById(&quot;actionModal&quot;).classList.remove(&quot;open&quot;)'>返回</button></div></div>">查看详情</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>`);

pages["operator-message"] = pages["supplier-message"];

pages["message"] = () => shell(`
  <div class="card readonly-message-card">
    <div class="card-head"><div><div class="card-title">消息列表</div><div class="card-sub">展商端只读查看消息与业务反馈</div></div>${badge("只读权限","info")}</div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>标题</th><th>类型</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
        <tbody>
          <tr><td>绿搭 1-3 设计图审核未通过</td><td>审核通知</td><td>06-25 11:20</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-modal" data-title="消息详情" data-body-html="<div class='drawer-preview'><h3>绿搭 1-3 设计图审核未通过</h3><p>原因：画面存在极限词，请进入绿搭编辑页替换图片后重新提交。</p><div class='drawer-meta'>关联展会：2026 中国国际农业科技展<br>关联企业：华丰农业科技</div><div class='form-actions' style='margin-top:16px'><button class='btn js-confirm' data-message='已标记为已读'>标记已读</button><button class='btn' onclick='document.getElementById(&quot;actionModal&quot;).classList.remove(&quot;open&quot;)'>返回</button></div></div>">查看详情</span></td></tr>
          <tr><td>标展参展报到书已生成</td><td>系统提醒</td><td>06-24 17:10</td><td><span class="msg-state read">已读</span></td><td><span class="link js-modal" data-title="消息详情" data-body-html="<div class='drawer-preview'><h3>标展参展报到书已生成</h3><p>可进入标展详情页预览并下载，同时查看电子协议状态。</p><div class='drawer-meta'>关联展会：2026 中国国际农业科技展<br>关联企业：绿田肥业</div><div class='form-actions' style='margin-top:16px'><button class='btn js-confirm' data-message='已标记为已读'>标记已读</button><button class='btn' onclick='document.getElementById(&quot;actionModal&quot;).classList.remove(&quot;open&quot;)'>返回</button></div></div>">查看详情</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>`);

pages["supplier-green-detail"] = () => supplierShell(`
  ${supplierStickyHeader({company:"华丰农业科技", boothNo:"A3-218", boothType:"绿搭展位", contact:"李明", phone:"138-0000-8888"})}
  <div class="supplier-detail-stack">
    <div class="card section-block">
      <div class="detail-section-head"><div><h3>设计图</h3><p>按顺序逐张审核绿搭设计图，全部通过后生成效果图。</p></div>${badge("逐图审核","warning")}</div>
      <div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div><div class="template-preview">设计图预览</div><div class="form-actions">${button("通过","primary",'class="btn small primary js-confirm" data-message="单图已通过"')}${button("驳回","danger",'class="btn small danger js-modal" data-title="驳回单图" data-body="填写该设计图不合规原因。"')}</div></div>`).join("")}</div>
    </div>
    <div class="card section-block">
      <div class="detail-section-head"><div><h3>审核信息</h3><p>记录当前审核策略、风险提示与效果图回传状态。</p></div>${badge("审核中","warning")}</div>
      <div class="info-pairs"><div class="info-pair"><span>模板规格</span><strong>G-30-A · 30㎡</strong></div><div class="info-pair"><span>风险提示</span><strong>1-3 需复核</strong></div><div class="info-pair"><span>效果图状态</span><strong>待生成</strong></div><div class="info-pair"><span>回传渠道</span><strong>展商PC + 小程序</strong></div></div>
      <div class="form-actions">${button("生成效果图","primary",'class="btn primary js-confirm" data-message="效果图已生成"')}${button("回传给展商","",'class="btn js-confirm" data-message="效果图已回传展商端"')}</div>
    </div>
    <div class="card section-block">${agreementBlock("viewer","A3-218")}</div>
  </div>`);

pages["supplier-standard-detail"] = () => supplierShell(`
  ${supplierStickyHeader({company:"华丰农业科技", boothNo:"A3-101", boothType:"标准展位", contact:"李明", phone:"138-0000-8888"})}
  <div class="supplier-detail-stack">
    <div class="card section-block">
      <div class="detail-section-head"><div><h3>展位详情内容</h3><p>标展资料逐条审核，重点核对楣板确认单与设计图。</p></div>${badge("待审核","warning")}</div>
      ${fileRow("楣板确认单.pdf","已提交","success")}
      ${fileRow("标展设计图.pdf","待审核","warning")}
      ${fileRow("用电需求表.pdf","已提交","success")}
      <div class="form-actions">${button("审核通过","primary",'class="btn primary js-confirm" data-message="标展资料已通过"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回标展资料" data-body="填写驳回原因。"')}</div>
    </div>
    <div class="card section-block">
      <div class="detail-section-head"><div><h3>审核信息</h3><p>保留审核记录、处理结论与回传说明。</p></div>${badge("逐条审核","info")}</div>
      <div class="info-pairs"><div class="info-pair"><span>当前状态</span><strong>资料待补充</strong></div><div class="info-pair"><span>审核角色</span><strong>供应商审核员</strong></div><div class="info-pair"><span>回传状态</span><strong>未回传</strong></div><div class="info-pair"><span>关联通知</span><strong>消息中心同步</strong></div></div>
    </div>
    <div class="card section-block">${agreementBlock("viewer","A3-101")}</div>
  </div>`);

pages["supplier-raw-detail"] = () => supplierShell(`
  ${supplierStickyHeader({company:"丰农装备", boothNo:"C2-106", boothType:"光地展位", contact:"王工", phone:"139-0000-6606"})}
  <div class="supplier-detail-stack">
    <div class="card section-block">
      <div class="detail-section-head"><div><h3>展位详情内容</h3><p>查看光地报馆资料并逐条完成合规审核。</p></div>${badge("待审核","warning")}</div>
      ${fileRow("搭建图纸.pdf","待审核","warning")}
      ${fileRow("安全证明.pdf","待审核","warning")}
      ${fileRow("报馆资料.zip","已上传","success")}
      <div class="form-actions">${button("审核通过","primary",'class="btn primary js-confirm" data-message="光地资料已通过"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回光地资料" data-body="填写图纸或证明材料问题。"')}</div>
    </div>
    <div class="card section-block">
      <div class="detail-section-head"><div><h3>审核信息</h3><p>记录图纸、安全文件与报馆资料处理状态。</p></div>${badge("复核中","warning")}</div>
      <div class="info-pairs"><div class="info-pair"><span>搭建商状态</span><strong>资质齐全</strong></div><div class="info-pair"><span>图纸状态</span><strong>电路图待补正</strong></div><div class="info-pair"><span>安全文件</span><strong>待最终确认</strong></div><div class="info-pair"><span>回传状态</span><strong>未回传</strong></div></div>
    </div>
    <div class="card section-block">${agreementBlock("viewer","C2-106")}</div>
  </div>`);

pages["booth-standard-detail"] = () => shell(`
  <div class="detail-layout detail-layout-wide">
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认现场楣板展示内容，确认后用于制作与现场核验。</p></div>${badge("待确认","warning")}</div><div class="readonly-grid"><div><span>展位号</span><strong>A3-101</strong></div><div><span>展位类型</span><strong>标准展位</strong></div><div><span>楣板名称</span><strong>华丰农业科技</strong></div><div><span>联系人</span><strong>李明 138-0000-8888</strong></div></div><div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div></div>
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>参展报道书</h3><p>预览报道时间、地点、流程和注意事项，可下载 PDF。</p></div>${badge("已生成","success")}</div>${reportNoticeDownloadOnly("A3-101")}</div>
    <div class="card detail-panel">${agreementBlock("sign","A3-101")}</div>
  </div>`);

pages["booth-green-detail"] = () => shell(`
  <div class="detail-layout detail-layout-wide">
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认绿搭展位现场楣板展示内容。</p></div>${badge("待确认","warning")}</div><div class="readonly-grid"><div><span>展位号</span><strong>A3-218</strong></div><div><span>展位类型</span><strong>绿搭展位</strong></div><div><span>楣板名称</span><strong>华丰农业科技</strong></div><div><span>联系人</span><strong>李明 138-0000-8888</strong></div></div><div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div></div>
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>上传设计图</h3><p>按模板 G-30-A 上传 4 个画面。</p></div>${badge("审核中","warning")}</div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${uploadZone("上传 "+n)}${i===2?badge("已驳回","danger"):badge("已提交","success")}</div>`).join("")}</div></div>
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>效果图</h3><p>供应商回传后可在线确认或反馈修改建议。</p></div>${badge("待确认","warning")}</div><div class="effect-grid"><div class="effect-card">效果图 1</div><div class="effect-card">效果图 2</div><div class="effect-card">效果图 3</div></div><div class="form-actions">${button("确认通过","primary",'class="btn primary js-confirm" data-message="已确认效果图"')}${button("错误反馈","danger",'class="btn danger js-modal" data-title="错误反馈" data-body="请填写错误位置、问题描述和修改建议。"')}</div></div>
    <div class="card detail-panel">${agreementBlock("sign","A3-218")}</div>
  </div>`);

pages["booth-raw-detail"] = () => shell(`
  <div class="detail-layout detail-layout-wide">
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认光地展位现场企业名片/楣板展示内容。</p></div>${badge("待确认","warning")}</div><div class="readonly-grid"><div><span>展位号</span><strong>C2-106</strong></div><div><span>展位类型</span><strong>光地展位</strong></div><div><span>企业名片</span><strong>华丰农业科技</strong></div><div><span>现场联系人</span><strong>王工 139-0000-6606</strong></div></div><div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div></div>
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>光地报馆资料</h3><p>查看搭建图纸、安全证明、报馆资料等文件。</p></div>${badge("审核中","warning")}</div>${fileRow("搭建商营业执照.pdf","已通过","success")}${fileRow("平面图.pdf","审核中","warning")}${fileRow("电路图.pdf","待补充","warning")}${fileRow("安全证明.pdf","已提交","success")}</div>
    <div class="card detail-panel"><div class="detail-section-head"><div><h3>参展报道书</h3><p>审核完成后开放下载。</p></div>${badge("待生成","warning")}</div>${reportNoticeDownloadOnly("C2-106")}</div>
    <div class="card detail-panel">${agreementBlock("sign","C2-106")}</div>
  </div>`);

pages["mini-booth-detail"] = () => mobileShell(`
  <div class="mini-card"><div class="mini-title">展位详情</div>${kvRows([["展位号","A3-218"],["展位类型","绿搭展位"],["楣板信息","华丰农业科技"],["联系人","李明 138-0000-8888"]])}</div>
  <div class="mini-card"><div class="mini-title">已上传资料</div>${fileRow("1-1.png","已通过","success")}${fileRow("1-2.png","已通过","success")}${fileRow("1-3.png","待复核","warning")}${fileRow("营业执照.pdf","已通过","success")}</div>
  <div class="mini-card"><div class="mini-title">效果图</div><div class="mini-render-grid"><button class="effect-card js-modal" data-title="效果图预览" data-body-html="<div class='preview-large'>效果图 1 放大预览</div>">效果图1</button><button class="effect-card js-modal" data-title="效果图预览" data-body-html="<div class='preview-large'>效果图 2 放大预览</div>">效果图2</button><button class="effect-card js-modal" data-title="效果图预览" data-body-html="<div class='preview-large'>效果图 3 放大预览</div>">效果图3</button></div><div class="form-actions">${button("确认通过","primary",'class="btn primary js-confirm" data-message="效果图已确认"')}${button("错误反馈","danger",'class="btn danger js-modal" data-title="错误反馈" data-body="请填写错误位置、问题描述和修改建议。"')}</div></div>
  <div class="mini-card">${agreementBlock("sign","A3-218")}</div>
`, "booth", "展位详情");

if (["supplier-message","operator-message","message","supplier-green-detail","supplier-standard-detail","supplier-raw-detail","booth-standard-detail","booth-green-detail","booth-raw-detail","mini-booth-detail"].includes(page)) {
  document.getElementById("app").innerHTML = pages[page]();
}

/* ===== 0625 二次修正：消息/协议/供应商/小程序 ===== */
supplierNav.length = 0;
supplierNav.push(
  ["supplier-standard.html","supplier-standard","□","标展展位审核"],
  ["supplier-green.html","supplier-green","◆","绿搭展位审核"],
  ["supplier-raw.html","supplier-raw","■","光地展位审核"],
  ["supplier-message.html","supplier-message","✉","消息通知"]
);

const readonlyMessageDetail = (title, content, relation) =>
  `<div class='drawer-preview readonly-detail'><h3>${title}</h3><p>${content}</p><div class='drawer-meta'>${relation}</div></div>`;

pages["admin-message"] = () => shell(`
  <div class="policy-head">
    <div>
      <h2>消息通知</h2>
      <p>统一处理系统通知、业务消息与风控告警</p>
    </div>
  </div>
  <div class="card message-policy-card">
    <div class="tabs policy-tabs">
      <button class="tab-btn active" data-tab="msg-system-final">系统通知</button>
      <button class="tab-btn" data-tab="msg-business-final">业务消息</button>
    </div>

    <div class="tab-panel active" id="tab-msg-system-final">
      <div class="policy-toolbar">
        <div class="toolbar-left">
          ${button("发布通知","primary",'class="btn primary js-fake-send" data-message="系统通知已发送"')}
          ${button("批量发送","",'class="btn js-confirm" data-message="已加入批量发送队列"')}
          ${button("定时任务设置","",'class="btn js-modal" data-title="定时任务设置" data-body="设置发布时间、重复频率与发送范围。"')}
        </div>
        <div class="toolbar-right"><input class="input search" placeholder="搜索标题 / 类型"></div>
      </div>
      <div class="policy-layout">
        <div class="table-wrap">
          <table>
            <thead><tr><th>标题</th><th>类型</th><th>接收范围</th><th>时间</th><th>状态</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><span class="link js-modal" data-title="通知详情" data-body="3H馆进场路线临时调整，请相关人员提前知悉。">布展路线调整通知</span></td><td>${badge("公告","info")}</td><td>全部用户</td><td>06-25 09:30</td><td>${badge("已发送","success")}</td><td><span class="link js-modal" data-title="通知详情" data-body="查看通知正文、发送记录与阅读状态。">预览</span></td></tr>
              <tr><td><span class="link js-modal" data-title="通知详情" data-body="今晚 23:00 至 23:30 进行系统升级。">系统升级窗口提醒</span></td><td>${badge("系统升级","warning")}</td><td>管理员</td><td>06-25 20:00</td><td>${badge("待发送","warning")}</td><td><span class="link js-confirm" data-message="待发送通知已撤回">撤回</span></td></tr>
              <tr><td><span class="link js-modal" data-title="通知详情" data-body="近期存在异常登录尝试，请及时检查授权。">账号安全提醒</span></td><td>${badge("安全提醒","danger")}</td><td>部门</td><td>06-24 18:20</td><td>${badge("已撤回","info")}</td><td><span class="link js-modal" data-title="通知详情" data-body="该通知已撤回，可复制重新发布。">查看</span></td></tr>
            </tbody>
          </table>
        </div>
        <div class="card quick-publish-card">
          <div class="card-head"><div><div class="card-title">快速发布</div><div class="card-sub">公告、升级和安全类通知统一从这里发出</div></div>${badge("草稿中","info")}</div>
          <div class="field"><label>通知标题</label><input class="input" value="资料补录截止提醒"></div>
          <div class="field"><label>通知类型</label><select class="select"><option>公告</option><option>系统升级</option><option>安全提醒</option><option>活动通知</option></select></div>
          <div class="field"><label>接收范围</label><select class="select"><option>全部用户</option><option>管理员</option><option>部门</option><option>展商</option></select></div>
          <div class="field switch-field"><label>定时发送</label><label class="switch"><input type="checkbox" checked><span></span></label></div>
          <div class="field"><label>发送时间</label><input class="input" type="datetime-local" value="2026-06-25T18:30"></div>
          <div class="field"><label>通知内容</label><textarea class="textarea rich-editor">请各参展单位在截止前完成资料补录与审核反馈处理，逾期系统将限制继续提交。</textarea></div>
          <div class="form-actions">${button("发送","primary",'class="btn primary js-fake-send" data-message="通知发送成功"')}${button("存草稿","",'class="btn js-confirm" data-message="通知已保存为草稿"')}${button("预览","",'class="btn js-modal" data-title="通知预览" data-body="预览通知标题、发送范围与正文。"')}</div>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-msg-business-final">
      <div class="tabs sub-tabs biz-tabs-final">
        <button class="tab-btn active js-biz-tab" data-biz="approve">审批通知</button>
        <button class="tab-btn js-biz-tab" data-biz="review">审核通知</button>
        <button class="tab-btn js-biz-tab" data-biz="remind">系统提醒</button>
        <button class="tab-btn js-biz-tab" data-biz="alert">异常告警</button>
      </div>
      <div class="policy-layout business-layout">
        <div class="biz-subpanels">
          <div class="biz-subpanel active" data-biz-panel="approve">
            <div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
              <tr><td>绿搭改稿申请待审批，编号 GX-20260625-03</td><td>绿搭管理</td><td>张经理</td><td>06-25 10:08</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">查看详情</span></td></tr>
              <tr><td>光地电路图补正申请已重新提交</td><td>光地管理</td><td>审核组</td><td>06-25 09:20</td><td><span class="msg-state handled">已处理</span></td><td><span class="link js-business-open">查看详情</span></td></tr>
            </tbody></table></div>
          </div>
          <div class="biz-subpanel" data-biz-panel="review">
            <div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
              <tr><td>标展楣板信息已更新，待后台复核</td><td>标展管理</td><td>展商管理员</td><td>06-25 08:45</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">查看详情</span></td></tr>
              <tr><td>营业执照替换文件上传完成</td><td>企业资料</td><td>审核组</td><td>06-24 17:32</td><td><span class="msg-state read">已读</span></td><td><span class="link js-business-open">查看详情</span></td></tr>
            </tbody></table></div>
          </div>
          <div class="biz-subpanel" data-biz-panel="remind">
            <div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
              <tr><td>资料上传将在 3 天后截止</td><td>进度中心</td><td>全部展商</td><td>06-25 09:00</td><td><span class="msg-state read">已读</span></td><td><span class="link js-business-open">查看详情</span></td></tr>
            </tbody></table></div>
          </div>
          <div class="biz-subpanel" data-biz-panel="alert">
            <div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
              <tr><td>绿搭设计图命中高风险词“行业第一”</td><td>风控告警</td><td>内容安全组</td><td>06-25 11:18</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link js-business-open">查看详情</span></td></tr>
            </tbody></table></div>
          </div>
        </div>
        <div class="card business-drawer">
          <div class="card-head"><div><div class="card-title">消息详情</div><div class="card-sub">点击左侧消息后在此查看</div></div>${badge("业务消息","info")}</div>
          <div class="drawer-block"><span>消息内容</span><strong>绿搭改稿申请待审批，申请编号 GX-20260625-03</strong></div>
          <div class="drawer-block"><span>关联业务</span><strong>2026 中国国际农业科技展 / 华丰农业科技 / A3-218</strong></div>
          <div class="drawer-block"><span>来源模块</span><strong>绿搭管理</strong></div>
          <div class="drawer-actions">${button("去处理","primary",'class="btn primary js-confirm" data-message="已跳转到待处理业务（原型模拟）"')}${button("忽略","",'class="btn js-confirm" data-message="该消息已忽略"')}</div>
        </div>
      </div>
    </div>
  </div>`, true);

pages["admin-settings"] = () => shell(`
  <div class="settings-head">
    <div>
      <h2>系统设置</h2>
      <p>统一维护风控规则、资料结构、参展报到书模板与审核流</p>
    </div>
  </div>
  <div class="card message-policy-card">
    <div class="tabs policy-tabs">
      <button class="tab-btn active" data-tab="setting-risk-f2">风控规则配置</button>
      <button class="tab-btn" data-tab="setting-material-f2">资料配置</button>
      <button class="tab-btn" data-tab="setting-notice-f2">参展报到书模板配置</button>
      <button class="tab-btn" data-tab="setting-flow-f2">审核流配置</button>
    </div>
    <div class="tab-panel active" id="tab-setting-risk-f2">
      <div class="grid grid-2 policy-risk-grid">
        <div class="card">
          <div class="card-head"><div><div class="card-title">词库批量导入区</div><div class="card-sub">支持逗号 / 换行 / 空格，自动去重与分类识别</div></div>${badge("即时生效","success")}</div>
          <div class="field"><label>批量输入</label><textarea class="textarea">暴力, 色情, 赌博, 政治敏感, 虚假宣传, 诈骗, 恐怖主义</textarea></div>
          <div class="form-actions">${button("批量导入","primary",'class="btn primary js-fake-send" data-message="词库已批量导入"')}${button("导出词库","",'class="btn js-download"')}${button("清空词库","",'class="btn js-confirm" data-message="词库输入区已清空"')}</div>
          <div class="policy-word-board">${settingTag("暴力","red")}${settingTag("色情","red")}${settingTag("诈骗","orange")}${settingTag("虚假宣传","orange")}${settingTag("政治敏感","purple")}${settingTag("普通违规","gray")}</div>
        </div>
        <div class="card">
          <div class="card-head"><div><div class="card-title">检测规则配置区</div><div class="card-sub">规则命中后直接联动展商提交行为与待审核流程</div></div>${badge("模糊匹配","warning")}</div>
          <div class="field"><label>匹配模式</label><div class="rule-options"><label class="check"><input type="radio" name="riskMode3" checked> 模糊匹配（推荐）</label></div></div>
          <div class="field"><label>拦截动作</label><div class="rule-options"><label class="check"><input type="checkbox" checked> 拒绝提交</label><label class="check"><input type="checkbox" checked> 提示修改</label><label class="check"><input type="checkbox" checked> 转人工审核</label><label class="check"><input type="checkbox"> 仅记录不拦截</label></div></div>
          <div class="form-actions">${button("保存规则","primary",'class="btn primary js-fake-send" data-message="风控规则已保存"')}${button("测试命中","",'class="btn js-modal" data-title="测试命中" data-body="输入测试文本后模拟命中词库与拦截动作。"')}</div>
        </div>
      </div>
    </div>
    <div class="tab-panel" id="tab-setting-material-f2">
      <div class="settings-head settings-head-inline"><div><h3>资料配置</h3><p>模板参数配置已重命名为资料配置，采用表格驱动与行级编辑</p></div></div>
      <div class="table-wrap config-table-wrap"><table class="config-table"><thead><tr><th>模板名称</th><th>展位类型</th><th>面积</th><th>画面数量</th><th>画面名称</th><th>状态</th><th>操作</th></tr></thead><tbody>${materialConfigRow({name:"标展标准资料模板",boothType:"标展",area:"9㎡",count:"2",chips:["楣板信息","用电需求"],status:"启用",statusType:"success"})}${materialConfigRow({name:"绿搭展位资料模板",boothType:"绿搭",area:"30㎡",count:"4",chips:["1-1","1-2","1-3","1-4"],status:"启用",statusType:"success"})}${materialConfigRow({name:"光地报馆资料模板",boothType:"光地",area:"54㎡",count:"4",chips:["搭建商资质","平面图","电路图","安全承诺书"],status:"草稿",statusType:"info"})}</tbody></table></div>
    </div>
    <div class="tab-panel" id="tab-setting-notice-f2">
      <div class="table-wrap"><table><thead><tr><th>展会名称</th><th>模板名称</th><th>状态</th><th>更新时间</th><th>操作</th></tr></thead><tbody><tr><td>2026 中国国际农业科技展</td><td>标准报到书模板</td><td>${badge("启用","success")}</td><td>06-25 09:10</td><td><span class="link js-modal" data-title="模板详情" data-body-html="<div class='drawer-preview'><h3>标准报到书模板</h3><p>包含报到时间、地点、展位号、对接人及注意事项。</p><p>支持流程步骤编辑与模板复制。</p></div>">查看</span></td></tr><tr><td>2026 西南农资订货会</td><td>西南展会报到模板</td><td>${badge("草稿","info")}</td><td>06-24 16:40</td><td><span class="link js-modal" data-title="模板编辑" data-body-html="<div class='field'><label>报到时间</label><input class='input' value='2026-10-11 09:00'></div><div class='field'><label>报到地点</label><input class='input' value='成都世纪城 1 号门'></div><div class='field'><label>展位号</label><input class='input' value='B1-086'></div><div class='field'><label>对接人</label><input class='input' value='王经理'></div><div class='field'><label>对接人联系方式</label><input class='input' value='138-0000-2026'></div><div class='field'><label>报到流程</label><textarea class='textarea'>签到 → 领取证件 → 展位确认 → 入场 → 完成</textarea></div><div class='field'><label>注意事项</label><textarea class='textarea'>请按规定时间报到，携带企业资料与人员证件。</textarea></div>">编辑</span></td></tr></tbody></table></div>
      <div class="grid grid-1" style="margin-top:16px"><div class="card"><div class="card-title">报到流程步骤编辑器</div><div class="flow-line editable-flow"><span class="flow-node">签到</span><span class="flow-arrow">→</span><span class="flow-node">领取证件</span><span class="flow-arrow">→</span><span class="flow-node">展位确认</span><span class="flow-arrow">→</span><span class="flow-node">入场</span><span class="flow-arrow">→</span><span class="flow-node">完成</span></div><div class="form-actions">${button("新增节点","",'class="btn js-confirm" data-message="已新增流程节点（原型模拟）"')}${button("保存流程","primary",'class="btn primary js-fake-send" data-message="报到流程已保存"')}</div></div></div>
    </div>
    <div class="tab-panel" id="tab-setting-flow-f2">
      <div class="table-wrap"><table><thead><tr><th>流程名称</th><th>适用模块</th><th>节点数</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>参展资料审核流</td><td>企业资料</td><td>4</td><td>${badge("启用","success")}</td><td><span class="link js-modal" data-title="流程详情" data-body="查看流程节点、审核角色、通知策略与超时处理。">配置</span></td></tr><tr><td>绿搭设计图审核流</td><td>绿搭管理</td><td>5</td><td>${badge("默认流程","info")}</td><td><span class="link js-modal" data-title="流程详情" data-body="支持默认流程设置、条件分支与节点规则。">配置</span></td></tr><tr><td>光地报馆审核流</td><td>光地管理</td><td>4</td><td>${badge("停用","danger")}</td><td><span class="link js-confirm" data-message="流程已启用">启用</span></td></tr></tbody></table></div>
      <div class="grid grid-2" style="margin-top:16px"><div class="card"><div class="card-title">流程设计器</div><div class="flow-designer">${flowNode("申请人","系统 / 展商","提交资料")}<span class="flow-arrow">→</span>${flowNode("初审","管理员","通过 / 驳回")}<span class="flow-arrow">→</span>${flowNode("复审","供应商","通过 / 退回修改")}<span class="flow-arrow">→</span>${flowNode("终审","管理员","完成确认")}<span class="flow-arrow">→</span>${flowNode("完成","系统","通知归档")}</div></div><div class="card"><div class="card-title">节点配置</div><div class="field"><label>审核角色</label><select class="select"><option>管理员</option><option>供应商</option><option>系统</option></select></div><div class="field"><label>审核规则</label><select class="select"><option>通过 / 驳回 / 退回修改</option></select></div><div class="field"><label>超时处理</label><select class="select"><option>自动提醒</option><option>转上级处理</option><option>仅记录</option></select></div><div class="field"><label>通知策略</label><select class="select"><option>站内信 + 短信</option><option>仅站内信</option></select></div><div class="form-actions">${button("设为默认流程","",'class="btn js-confirm" data-message="已设为默认流程"')}${button("保存配置","primary",'class="btn primary js-fake-send" data-message="审核流配置已保存"')}</div></div></div>
    </div>
  </div>`, true);

pages.dashboard = () => shell(`
  <div class="guide-hero"><div><h2>请按流程完成资料确认与提交</h2><p>先完善企业信息和展位资料，审核通过后，再确认效果图与电子协议。</p></div></div>
  <div class="card process-card"><div class="process-steps"><div class="process-step done"><span>1</span><strong>企业信息确认</strong><p>核对联系人、电话与企业名片</p></div><div class="process-step current"><span>2</span><strong>展位资料提交</strong><p>标展/绿搭/光地按类型提交</p></div><div class="process-step"><span>3</span><strong>供应商审核</strong><p>逐项审核资料与设计图</p></div><div class="process-step"><span>4</span><strong>效果图确认</strong><p>确认或反馈修改意见</p></div><div class="process-step"><span>5</span><strong>确认方案</strong><p>确认展位方案与效果图</p></div></div></div>
  <div class="grid grid-3 dashboard-top-grid"><div class="card"><div class="card-title">企业信息</div><div class="dashboard-data">已确认</div><p class="text-muted">企业名片已同步</p></div><div class="card"><div class="card-title">标展资料</div><div class="dashboard-data">1</div><p class="text-muted">待确认报到书</p></div><div class="card"><div class="card-title">绿搭效果图</div><div class="dashboard-data">待确认</div><p class="text-muted">供应商已回传 3 张</p></div></div>
  <div class="card full-recent-card"><div class="card-title">最近消息</div><div class="recent-msg-list"><div class="list-item"><span>绿搭效果图已回传，请确认</span>${badge("待处理","warning")}</div><div class="list-item"><span>标展参展报道书已生成</span>${badge("新","success")}</div><div class="list-item"><span>光地电路图进入复核</span>${badge("审核中","warning")}</div></div></div>
`, true);

const agreementBody = (role="viewer", boothNo="A3-218") => {
  const signed = role === "sign";
  return `<div class='agreement-modal ${signed ? "agreement-modal-sign" : ""}'><div class='agreement-paper'><h3>展位服务电子协议</h3><p>甲方（主办方）与乙方（参展企业/供应商）就展位使用、资料提交、内容审核、现场服务、报到流程与安全责任达成一致。</p><p>1. 乙方应按系统要求提交真实、完整、合法的资料；2. 命中风控规则的内容将进入待审核或驳回流程；3. 展位效果图、楣板信息、报到通知书等以系统最终确认内容为准；4. 现场施工、报馆、安全责任按展会统一规定执行。</p><p>本原型中协议内容为静态展示，仅模拟滚动阅读与确认签署操作。</p></div>${signed ? "<div class='agreement-fixed-bar'><button class='btn primary js-confirm' data-message='电子协议已确认签署'>确认签署协议</button></div>" : ""}</div>`;
};

const agreementBlockFinal = (role="viewer", boothNo="A3-218") => `
  <div class="agreement-card">
    <div class="detail-section-head">
      <div><h3>电子协议</h3><p>展位合同 / 合作协议在线查看与签署</p></div>
      ${role === "sign" ? badge("未签署","default") : badge("只读","info")}
    </div>
    <div class="agreement-brief">
      <div><span>协议编号</span><strong>AG-${boothNo.replace("-","")}-2026</strong></div>
      <div><span>适用展位</span><strong>${boothNo}</strong></div>
      <div><span>协议状态</span><strong>${role === "sign" ? "待确认签署" : "仅可查看"}</strong></div>
    </div>
    <div class="form-actions">
      <button class="btn js-modal" data-hide-footer="1" data-title="查看电子协议" data-body-html="${agreementBody(role, boothNo).replace(/"/g,"&quot;")}">查看电子协议</button>
    </div>
  </div>`;

const readonlySupplierMessage = (title, type, time, content, relation, state="unread") =>
  `<tr><td>${title}</td><td>${type}</td><td>${time}</td><td><span class="msg-state ${state==="unread"?"unread":"read"}">${state==="unread"?"<b></b>未读":"已读"}</span></td><td><span class="link js-modal js-auto-read" data-hide-footer="1" data-title="消息详情" data-body-html="${readonlyMessageDetail(title, content, relation).replace(/"/g,"&quot;")}">查看详情</span></td></tr>`;

pages["supplier-message"] = () => supplierShell(`
  <div class="card readonly-message-card">
    <div class="card-head"><div><div class="card-title">消息列表</div><div class="card-sub">供应商端只读查看消息，不支持发布或编辑</div></div></div>
    <div class="table-wrap"><table><thead><tr><th>标题</th><th>类型</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
      ${readonlySupplierMessage("绿搭设计图审核提醒","审核通知","06-25 10:18","华丰农业科技 A3-218 的 4 张设计图已全部上传，请按顺序逐条审核。","关联展会：2026 中国国际农业科技展<br>关联企业：华丰农业科技","unread")}
      ${readonlySupplierMessage("光地报馆资料待复核","业务消息","06-25 09:06","C2-106 电路图已补充上传，请继续完成复核。","关联展会：2026 中国国际农业科技展<br>关联企业：丰农装备","read")}
    </tbody></table></div>
  </div>`);
pages["operator-message"] = pages["supplier-message"];

pages["message"] = () => shell(`
  <div class="card readonly-message-card">
    <div class="card-head"><div><div class="card-title">消息列表</div><div class="card-sub">展商端只读查看消息与业务反馈</div></div></div>
    <div class="table-wrap"><table><thead><tr><th>标题</th><th>类型</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
      ${readonlySupplierMessage("绿搭 1-3 设计图审核未通过","审核通知","06-25 11:20","原因：画面存在极限词，请进入绿搭编辑页替换图片后重新提交。","关联展会：2026 中国国际农业科技展<br>关联企业：华丰农业科技","unread")}
      ${readonlySupplierMessage("标展参展报到书已生成","系统提醒","06-24 17:10","可进入标展详情页预览并下载，同时查看电子协议状态。","关联展会：2026 中国国际农业科技展<br>关联企业：绿田肥业","read")}
    </tbody></table></div>
  </div>`);

const supplierListSimple = (type) => {
  if (type === "green") return supplierShell(`${searchBar("按展商名称 / 展位号搜索")}<div class="card">${simpleTable(["展商","展位","提交材料","审核状态","效果图","操作"],[["华丰农业科技","A3-218","4 张设计图",badge("待审核","warning"),badge("待生成","warning"),button("查看详情","primary",'class="btn small primary" onclick="location.href=\'supplier-green-detail.html\'"')],["绿田肥业","B1-086","资料齐全",badge("已通过","success"),badge("已回传","success"),button("查看详情","primary",'class="btn small primary" onclick="location.href=\'supplier-green-detail.html\'"')]])}</div>`);
  if (type === "standard") return supplierShell(`${searchBar("按展商名称 / 展位号搜索")}<div class="card">${simpleTable(["展商","展位","提交材料","审核状态","操作"],[["华丰农业科技","A3-101","楣板确认单、标展设计图、用电需求表",badge("待审核","warning"),button("查看详情","primary",'class="btn small primary" onclick="location.href=\'supplier-standard-detail.html\'"')],["绿田肥业","B1-086","资料齐全",badge("已通过","success"),button("查看详情","primary",'class="btn small primary" onclick="location.href=\'supplier-standard-detail.html\'"')]])}</div>`);
  return supplierShell(`${searchBar("按展商名称 / 展位号搜索")}<div class="card">${simpleTable(["展商","展位","提交材料","审核状态","操作"],[["丰农装备","C2-106","搭建图纸、安全证明、报馆资料",badge("待审核","warning"),button("查看详情","primary",'class="btn small primary" onclick="location.href=\'supplier-raw-detail.html\'"')],["华垦科技","C2-108","资料齐全",badge("已通过","success"),button("查看详情","primary",'class="btn small primary" onclick="location.href=\'supplier-raw-detail.html\'"')]])}</div>`);
};
pages["supplier-standard"] = () => supplierListSimple("standard");
pages["supplier-green"] = () => supplierListSimple("green");
pages["supplier-raw"] = () => supplierListSimple("raw");

pages["supplier-green-detail"] = () => supplierShell(`${supplierStickyHeader({company:"华丰农业科技", boothNo:"A3-218", boothType:"绿搭展位", contact:"李明", phone:"138-0000-8888"})}<div class="supplier-detail-stack"><div class="card section-block"><div class="detail-section-head"><div><h3>设计图</h3><p>按顺序逐张审核绿搭设计图，全部通过后生成效果图。</p></div>${badge("逐图审核","warning")}</div><div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n)=>`<div class="upload-card"><div class="upload-name">${n}</div><div class="template-preview">设计图预览</div><div class="form-actions">${button("通过","primary",'class="btn small primary js-confirm" data-message="单图已通过"')}${button("驳回","danger",'class="btn small danger js-modal" data-title="驳回单图" data-body="填写该设计图不合规原因。"')}</div></div>`).join("")}</div></div><div class="card section-block"><div class="detail-section-head"><div><h3>审核信息</h3><p>记录当前审核策略、风险提示与效果图回传状态。</p></div>${badge("审核中","warning")}</div><div class="info-pairs"><div class="info-pair"><span>模板规格</span><strong>G-30-A · 30㎡</strong></div><div class="info-pair"><span>风险提示</span><strong>1-3 需复核</strong></div><div class="info-pair"><span>效果图状态</span><strong>待生成</strong></div><div class="info-pair"><span>回传渠道</span><strong>展商PC + 小程序</strong></div></div><div class="form-actions">${button("生成效果图","primary",'class="btn primary js-confirm" data-message="效果图已生成"')}${button("回传给展商","",'class="btn js-confirm" data-message="效果图已回传展商端"')}</div></div><div class="card section-block">${agreementBlockFinal("viewer","A3-218")}</div></div>`);
pages["supplier-standard-detail"] = () => supplierShell(`${supplierStickyHeader({company:"华丰农业科技", boothNo:"A3-101", boothType:"标准展位", contact:"李明", phone:"138-0000-8888"})}<div class="supplier-detail-stack"><div class="card section-block"><div class="detail-section-head"><div><h3>展位详情内容</h3><p>标展资料逐条审核，重点核对楣板确认单与设计图。</p></div>${badge("待审核","warning")}</div>${fileRow("楣板确认单.pdf","已提交","success")}${fileRow("标展设计图.pdf","待审核","warning")}${fileRow("用电需求表.pdf","已提交","success")}<div class="form-actions">${button("审核通过","primary",'class="btn primary js-confirm" data-message="标展资料已通过"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回标展资料" data-body="填写驳回原因。"')}</div></div><div class="card section-block"><div class="detail-section-head"><div><h3>审核信息</h3><p>保留审核记录、处理结论与回传说明。</p></div>${badge("逐条审核","info")}</div><div class="info-pairs"><div class="info-pair"><span>当前状态</span><strong>资料待补充</strong></div><div class="info-pair"><span>审核角色</span><strong>供应商审核员</strong></div><div class="info-pair"><span>回传状态</span><strong>未回传</strong></div><div class="info-pair"><span>关联通知</span><strong>消息中心同步</strong></div></div></div><div class="card section-block">${agreementBlockFinal("viewer","A3-101")}</div></div>`);
pages["supplier-raw-detail"] = () => supplierShell(`${supplierStickyHeader({company:"丰农装备", boothNo:"C2-106", boothType:"光地展位", contact:"王工", phone:"139-0000-6606"})}<div class="supplier-detail-stack"><div class="card section-block"><div class="detail-section-head"><div><h3>展位详情内容</h3><p>查看光地报馆资料并逐条完成合规审核。</p></div>${badge("待审核","warning")}</div>${fileRow("搭建图纸.pdf","待审核","warning")}${fileRow("安全证明.pdf","待审核","warning")}${fileRow("报馆资料.zip","已上传","success")}<div class="form-actions">${button("审核通过","primary",'class="btn primary js-confirm" data-message="光地资料已通过"')}${button("驳回","danger",'class="btn danger js-modal" data-title="驳回光地资料" data-body="填写图纸或证明材料问题。"')}</div></div><div class="card section-block"><div class="detail-section-head"><div><h3>审核信息</h3><p>记录图纸、安全文件与报馆资料处理状态。</p></div>${badge("复核中","warning")}</div><div class="info-pairs"><div class="info-pair"><span>搭建商状态</span><strong>资质齐全</strong></div><div class="info-pair"><span>图纸状态</span><strong>电路图待补正</strong></div><div class="info-pair"><span>安全文件</span><strong>待最终确认</strong></div><div class="info-pair"><span>回传状态</span><strong>未回传</strong></div></div></div><div class="card section-block">${agreementBlockFinal("viewer","C2-106")}</div></div>`);

pages["booth-standard-detail"] = () => shell(`<div class="detail-layout detail-layout-wide"><div class="card detail-panel"><div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认现场楣板展示内容，确认后用于制作与现场核验。</p></div>${badge("待确认","warning")}</div><div class="readonly-grid"><div><span>展位号</span><strong>A3-101</strong></div><div><span>展位类型</span><strong>标准展位</strong></div><div><span>楣板名称</span><strong>华丰农业科技</strong></div><div><span>联系人</span><strong>李明 138-0000-8888</strong></div></div><div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div></div><div class="card detail-panel"><div class="detail-section-head"><div><h3>参展报道书</h3><p>预览报道时间、地点、流程和注意事项，可下载 PDF。</p></div>${badge("已生成","success")}</div>${reportNoticeDownloadOnly("A3-101")}</div><div class="card detail-panel">${agreementBlockFinal("sign","A3-101")}</div></div>`);
pages["booth-green-detail"] = () => shell(`
  <div class="detail-layout detail-layout-wide">
    <div class="card detail-panel">
      <div class="detail-section-head">
        <div><h3>楣板信息</h3><p>请确认绿搭展位现场楣板展示内容。</p></div>
        ${badge("待确认","warning")}
      </div>
      <div class="readonly-grid">
        <div><span>展位号</span><strong>A3-218</strong></div>
        <div><span>展位类型</span><strong>绿搭展位</strong></div>
        <div><span>楣板名称</span><strong>华丰农业科技</strong></div>
        <div><span>联系人</span><strong>李明 138-0000-8888</strong></div>
      </div>
      <div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head">
        <div><h3>上传设计图</h3><p>按模板 G-30-A 上传 4 个画面。</p></div>
        ${badge("审核中","warning")}
      </div>
      <div class="upload-grid">${["1-1","1-2","1-3","1-4"].map((n,i)=>`<div class="upload-card"><div class="upload-name">${n}</div>${uploadZone("上传 "+n)}${i===2?badge("已驳回","danger"):badge("已提交","success")}</div>`).join("")}</div>
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head">
        <div><h3>效果图</h3><p>供应商回传后可在线确认或反馈修改建议。</p></div>
        ${badge("待确认","warning")}
      </div>
      <div class="effect-grid"><div class="effect-card">效果图 1</div><div class="effect-card">效果图 2</div><div class="effect-card">效果图 3</div></div>
      <div class="form-actions">
        ${button("确认通过","primary",'class="btn primary js-confirm" data-message="已确认效果图"')}
        ${button("错误反馈","danger",'class="btn danger js-modal" data-hide-footer="1" data-title="错误反馈" data-body-html="&lt;div class=&quot;mobile-feedback-sheet&quot;&gt;&lt;h3&gt;错误反馈&lt;/h3&gt;&lt;p&gt;请描述错误位置、问题描述和修改建议。&lt;/p&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;错误位置&lt;/label&gt;&lt;input class=&quot;input&quot; placeholder=&quot;例如：主画面标题区&quot;&gt;&lt;/div&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;反馈说明&lt;/label&gt;&lt;textarea class=&quot;textarea&quot; placeholder=&quot;请输入问题描述与修改建议&quot;&gt;&lt;/textarea&gt;&lt;/div&gt;&lt;button class=&quot;btn primary block js-confirm&quot; data-message=&quot;错误反馈已提交&quot;&gt;确认反馈&lt;/button&gt;&lt;/div&gt;"')}
      </div>
    </div>
    <div class="card detail-panel">${agreementBlockFinal("sign","A3-218")}</div>
  </div>
`);
pages["booth-raw-detail"] = () => shell(`<div class="detail-layout detail-layout-wide"><div class="card detail-panel"><div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认光地展位现场企业名片/楣板展示内容。</p></div>${badge("待确认","warning")}</div><div class="readonly-grid"><div><span>展位号</span><strong>C2-106</strong></div><div><span>展位类型</span><strong>光地展位</strong></div><div><span>企业名片</span><strong>华丰农业科技</strong></div><div><span>现场联系人</span><strong>王工 139-0000-6606</strong></div></div><div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div></div><div class="card detail-panel"><div class="detail-section-head"><div><h3>光地报馆资料</h3><p>查看搭建图纸、安全证明、报馆资料等文件。</p></div>${badge("审核中","warning")}</div>${fileRow("搭建商营业执照.pdf","已通过","success")}${fileRow("平面图.pdf","审核中","warning")}${fileRow("电路图.pdf","待补充","warning")}${fileRow("安全证明.pdf","已提交","success")}</div><div class="card detail-panel"><div class="detail-section-head"><div><h3>参展报道书</h3><p>审核完成后开放下载。</p></div>${badge("待生成","warning")}</div>${reportNoticeDownloadOnly("C2-106")}</div><div class="card detail-panel">${agreementBlockFinal("sign","C2-106")}</div></div>`);

pages["mini-booth-detail"] = () => mobileShell(`
  <div class="mini-card">
    <div class="mini-title">展位详情</div>
    ${kvRows([["展位号","A3-218"],["展位类型","绿搭展位"],["楣板信息","华丰农业科技"],["联系人","李明 138-0000-8888"]])}
  </div>
  <div class="mini-card">
    <div class="mini-title">已上传资料</div>
    ${fileRow("1-1.png","已通过","success")}
    ${fileRow("1-2.png","已通过","success")}
    ${fileRow("1-3.png","待复核","warning")}
    ${fileRow("营业执照.pdf","已通过","success")}
  </div>
  <div class="mini-card">
    <div class="mini-title">效果图</div>
    <div class="mini-render-grid">
      <button class="effect-card js-modal" data-title="效果图预览" data-hide-footer="1" data-body-html="<div class='preview-large mobile-preview-large'>效果图 1 放大预览</div>">效果图1</button>
      <button class="effect-card js-modal" data-title="效果图预览" data-hide-footer="1" data-body-html="<div class='preview-large mobile-preview-large'>效果图 2 放大预览</div>">效果图2</button>
      <button class="effect-card js-modal" data-title="效果图预览" data-hide-footer="1" data-body-html="<div class='preview-large mobile-preview-large'>效果图 3 放大预览</div>">效果图3</button>
    </div>
    <div class="form-actions">
      ${button("确认通过","primary",'class="btn primary js-confirm" data-message="效果图已确认"')}
      ${button("错误反馈","danger",'class="btn danger js-modal" data-hide-footer="1" data-title="错误反馈" data-body-html="&lt;div class=&quot;mobile-feedback-sheet&quot;&gt;&lt;h3&gt;错误反馈&lt;/h3&gt;&lt;p&gt;请描述错误位置、问题说明和修改建议。&lt;/p&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;错误位置&lt;/label&gt;&lt;input class=&quot;input&quot; placeholder=&quot;例如：LOGO区域&quot;&gt;&lt;/div&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;反馈说明&lt;/label&gt;&lt;textarea class=&quot;textarea&quot; placeholder=&quot;请输入问题描述&quot;&gt;&lt;/textarea&gt;&lt;/div&gt;&lt;button class=&quot;btn primary block js-confirm&quot; data-message=&quot;错误反馈已提交&quot;&gt;确认反馈&lt;/button&gt;&lt;/div&gt;"')}
    </div>
  </div>
  <div class="mini-card">
    <div class="agreement-card">
      <div class="detail-section-head">
        <div><h3>电子协议</h3><p>小程序仅支持查看与确认签署</p></div>
        ${badge("未签署","default")}
      </div>
      <div class="form-actions">
        <button class="btn js-modal" data-hide-footer="1" data-title="查看电子协议" data-body-html="&lt;div class=&quot;agreement-modal agreement-modal-mobile&quot;&gt;&lt;div class=&quot;agreement-paper&quot;&gt;&lt;h3&gt;展位服务电子协议&lt;/h3&gt;&lt;p&gt;甲方（主办方）与乙方（参展企业）就展位使用、资料提交、内容审核、现场服务、报到流程与安全责任达成一致。&lt;/p&gt;&lt;p&gt;1. 乙方应按系统要求提交真实、完整、合法的资料；2. 命中风控规则的内容将进入待审核或驳回流程；3. 展位效果图、楣板信息、报到通知书等以系统最终确认内容为准。&lt;/p&gt;&lt;/div&gt;&lt;div class=&quot;agreement-fixed-bar mobile-agreement-bar&quot;&gt;&lt;button class=&quot;btn primary block js-confirm&quot; data-message=&quot;电子协议已确认签署&quot;&gt;确认签署协议&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;">查看电子协议</button>
      </div>
    </div>
  </div>
`, "booth", "展位详情");

if (["dashboard","admin-message","admin-settings","supplier-message","operator-message","message","supplier-standard","supplier-green","supplier-raw","supplier-green-detail","supplier-standard-detail","supplier-raw-detail","booth-standard-detail","booth-green-detail","booth-raw-detail","mini-booth-detail"].includes(page)) {
  document.getElementById("app").innerHTML = pages[page]();
}

document.addEventListener("click", (e) => {
  const bizTab = e.target.closest(".js-biz-tab");
  if (bizTab) {
    const wrap = bizTab.closest(".tab-panel");
    wrap?.querySelectorAll(".js-biz-tab").forEach(x => x.classList.remove("active"));
    wrap?.querySelectorAll(".biz-subpanel").forEach(x => x.classList.remove("active"));
    bizTab.classList.add("active");
    wrap?.querySelector(`[data-biz-panel="${bizTab.dataset.biz}"]`)?.classList.add("active");
  }
  const autoRead = e.target.closest(".js-auto-read");
  if (autoRead) {
    const row = autoRead.closest("tr");
    const status = row?.querySelector(".msg-state");
    if (status && status.classList.contains("unread")) status.outerHTML = '<span class="msg-state read">已读</span>';
  }
});

document.addEventListener("click", (e) => {
  const modalBtn = e.target.closest(".js-modal");
  if (modalBtn) {
    const foot = document.querySelector("#actionModal .modal-foot");
    if (foot) foot.style.display = modalBtn.dataset.hideFooter === "1" ? "none" : "";
  }
  if (e.target.closest(".modal-close") || e.target.closest(".modal-submit")) {
    const foot = document.querySelector("#actionModal .modal-foot");
    if (foot) foot.style.display = "";
  }
});

enterpriseNav.length = 0;
enterpriseNav.push(
  ["dashboard.html","dashboard","◇","首页"],
  ["booth-standard.html","booth-standard","□","标展管理"],
  ["booth-green.html","booth-green","◆","绿搭管理"],
  ["booth-raw.html","booth-raw","■","光地管理"],
  ["message.html","message","✉","消息管理"]
);

Object.assign(meta, {
  "dashboard": ["首页","面向参展企业，按流程维护企业信息并提交展位资料"],
  "booth-standard": ["标展管理","提交与查看标展相关资料、楣板信息、报道书与电子协议"],
  "booth-green": ["绿搭管理","提交与查看绿搭展位设计图、效果图与电子协议"],
  "booth-raw": ["光地管理","提交与查看光地展位报馆资料、搭建图纸、安全文件与电子协议"],
  "message": ["消息管理","接收系统通知、审核反馈与效果图确认提醒"]
});

if (["dashboard","booth-standard","booth-green","booth-raw","message"].includes(page)) {
  document.getElementById("app").innerHTML = pages[page]();
}

const backMap = {
  "basic-info": "dashboard.html",
  "product-info": "dashboard.html",
  "brand-info": "dashboard.html",
  "booth-standard-detail": "booth-standard.html",
  "booth-standard-edit": "booth-standard.html",
  "booth-green-detail": "booth-green.html",
  "booth-green-edit": "booth-green.html",
  "booth-raw-detail": "booth-raw.html",
  "booth-raw-edit": "booth-raw.html",
  "notice": "dashboard.html",
  "progress": "dashboard.html",
  "admin-enterprise-detail": "admin-enterprise.html",
  "admin-enterprise-review": "admin-enterprise.html",
  "admin-green-detail": "admin-review-green.html",
  "admin-raw-detail": "admin-review-raw.html",
  "supplier-standard-detail": "supplier-standard.html",
  "supplier-green-detail": "supplier-green.html",
  "supplier-raw-detail": "supplier-raw.html",
  "mini-progress": "mini-home.html",
  "mini-progress-detail": "mini-progress.html",
  "mini-notice": "mini-home.html",
  "mini-booth-detail": "mini-booth.html"
};

pages["admin-exhibition"] = () => shell(`
  <div class="toolbar">
    <div class="toolbar-left">
      <input class="input" placeholder="按展会名称搜索" style="width:280px">
      <select class="input" style="width:160px"><option>全部状态</option><option>待审核</option><option>已通过</option><option>已驳回</option></select>
    </div>
    <div class="toolbar-right">
      ${button("同步慕渊云数据","primary",'class="btn primary js-confirm" data-message="已同步展会数据"')}
    </div>
  </div>
  <div class="card">
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th>展会名称</th><th>时间</th><th>地点</th><th>状态</th><th>资料截止时间</th><th>操作</th></tr></thead>
        <tbody>
          <tr><td>2026 中国国际农业科技展</td><td>2026-09-18 至 09-20</td><td>上海国家会展中心</td><td>${badge("进行中","success")}</td><td>2026-07-30</td><td>${button("资料截止时间配置","",'class="btn small js-modal" data-title="资料上传截止时间配置" data-body-html="&lt;div class=&quot;form-grid&quot;&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;截止日期&lt;/label&gt;&lt;input class=&quot;input&quot; type=&quot;date&quot; value=&quot;2026-07-30&quot;&gt;&lt;/div&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;截止时间&lt;/label&gt;&lt;input class=&quot;input&quot; type=&quot;time&quot; value=&quot;18:00&quot;&gt;&lt;/div&gt;&lt;div class=&quot;field&quot; style=&quot;grid-column:1/-1&quot;&gt;&lt;label&gt;说明&lt;/label&gt;&lt;textarea class=&quot;textarea&quot; placeholder=&quot;超时后系统禁止展商继续提交资料&quot;&gt;超时后系统禁止展商继续提交资料&lt;/textarea&gt;&lt;/div&gt;&lt;/div&gt;"')}</td></tr>
          <tr><td>西南农资订货会</td><td>2026-10-12 至 10-14</td><td>成都世纪城</td><td>${badge("筹备中","warning")}</td><td>2026-08-20</td><td>${button("资料截止时间配置","",'class="btn small js-modal" data-title="资料上传截止时间配置" data-body-html="&lt;div class=&quot;form-grid&quot;&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;截止日期&lt;/label&gt;&lt;input class=&quot;input&quot; type=&quot;date&quot; value=&quot;2026-08-20&quot;&gt;&lt;/div&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;截止时间&lt;/label&gt;&lt;input class=&quot;input&quot; type=&quot;time&quot; value=&quot;18:00&quot;&gt;&lt;/div&gt;&lt;div class=&quot;field&quot; style=&quot;grid-column:1/-1&quot;&gt;&lt;label&gt;说明&lt;/label&gt;&lt;textarea class=&quot;textarea&quot; placeholder=&quot;超时后系统禁止展商继续提交资料&quot;&gt;超时后系统禁止展商继续提交资料&lt;/textarea&gt;&lt;/div&gt;&lt;/div&gt;"')}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
`, true);

pages["admin-message"] = () => shell(`
  <div class="tabs">
    <button class="tab-btn active" data-tab="msg-system-final-2">系统通知</button>
    <button class="tab-btn" data-tab="msg-business-final-2">业务消息</button>
  </div>
  <div class="tab-panel active" id="tab-msg-system-final-2">
    <div class="toolbar">
      <div class="toolbar-left">
        ${button("发布通知","primary")}
        ${button("批量发送","")}
        ${button("定时任务设置","",'class="btn js-modal" data-title="定时任务设置" data-body-html="&lt;div class=&quot;form-grid&quot;&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;发布时间&lt;/label&gt;&lt;input class=&quot;input&quot; type=&quot;datetime-local&quot; value=&quot;2026-06-25T10:30&quot;&gt;&lt;/div&gt;&lt;div class=&quot;field&quot;&gt;&lt;label&gt;重复频率&lt;/label&gt;&lt;select class=&quot;select&quot;&gt;&lt;option&gt;仅一次&lt;/option&gt;&lt;option&gt;每天&lt;/option&gt;&lt;option&gt;每周&lt;/option&gt;&lt;option&gt;每月&lt;/option&gt;&lt;/select&gt;&lt;/div&gt;&lt;div class=&quot;field&quot; style=&quot;grid-column:1/-1&quot;&gt;&lt;label&gt;发送范围&lt;/label&gt;&lt;select class=&quot;select&quot;&gt;&lt;option&gt;全部用户&lt;/option&gt;&lt;option&gt;管理员&lt;/option&gt;&lt;option&gt;供应商&lt;/option&gt;&lt;option&gt;展商&lt;/option&gt;&lt;/select&gt;&lt;/div&gt;&lt;/div&gt;"')}
      </div>
      <div class="toolbar-right"><input class="input" placeholder="搜索标题/类型" style="width:240px"></div>
    </div>
    <div class="card"><div class="table-wrap"><table><thead><tr><th>标题</th><th>类型</th><th>接收范围</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>系统维护通知</td><td>系统升级</td><td>全部用户</td><td>06-25 10:30</td><td>${badge("已发送","success")}</td><td><span class="link">查看</span></td></tr><tr><td>证件注册提醒</td><td>活动通知</td><td>展商</td><td>06-26 09:00</td><td>${badge("待发送","warning")}</td><td><span class="link">撤回</span></td></tr></tbody></table></div></div>
  </div>
  <div class="tab-panel" id="tab-msg-business-final-2">
    <div class="tabs sub-tabs biz-tabs-fixed">
      <button class="tab-btn active" data-biz-switch="approve">审批通知</button>
      <button class="tab-btn" data-biz-switch="review">审核通知</button>
      <button class="tab-btn" data-biz-switch="remind">系统提醒</button>
      <button class="tab-btn" data-biz-switch="alert">异常告警</button>
    </div>
    <div class="card biz-subpanel-fixed active" data-biz-view="approve"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>绿搭改稿申请待审批，编号 GX-20260625-03</td><td>绿搭管理</td><td>张经理</td><td>06-25 10:08</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link">查看详情</span></td></tr><tr><td>光地电路图补正申请已重新提交</td><td>光地管理</td><td>审核组</td><td>06-25 09:20</td><td><span class="msg-state handled">已处理</span></td><td><span class="link">查看详情</span></td></tr></tbody></table></div></div>
    <div class="card biz-subpanel-fixed" data-biz-view="review"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>标展楣板信息已更新，待后台复核</td><td>标展管理</td><td>展商管理员</td><td>06-25 08:45</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link">查看详情</span></td></tr><tr><td>营业执照替换文件上传完成</td><td>企业资料</td><td>审核组</td><td>06-24 17:32</td><td><span class="msg-state read">已读</span></td><td><span class="link">查看详情</span></td></tr></tbody></table></div></div>
    <div class="card biz-subpanel-fixed" data-biz-view="remind"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>参展报道书模板待确认发布时间</td><td>参展报到书模板</td><td>系统管理员</td><td>06-25 11:10</td><td><span class="msg-state read">已读</span></td><td><span class="link">查看详情</span></td></tr></tbody></table></div></div>
    <div class="card biz-subpanel-fixed" data-biz-view="alert"><div class="table-wrap"><table><thead><tr><th>消息内容</th><th>来源模块</th><th>接收人</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td>绿搭画面命中违规词，已转人工审核</td><td>风控规则</td><td>风控专员</td><td>06-25 09:42</td><td><span class="msg-state unread"><b></b>未读</span></td><td><span class="link">查看详情</span></td></tr></tbody></table></div></div>
  </div>
`, true);

pages["booth-standard-detail"] = () => shell(`<div class="detail-layout detail-layout-wide"><div class="card detail-panel"><div class="detail-section-head"><div><h3>楣板信息</h3><p>请确认现场楣板展示内容，确认后用于制作与现场核验。</p></div>${badge("待确认","warning")}</div><div class="readonly-grid"><div><span>展位号</span><strong>A3-101</strong></div><div><span>展位类型</span><strong>标准展位</strong></div><div><span>楣板名称</span><strong>华丰农业科技</strong></div><div><span>联系人</span><strong>李明 138-0000-8888</strong></div></div><div class="form-actions">${button("确认楣板信息","primary",'class="btn primary js-confirm" data-message="楣板信息已确认"')}</div></div><div class="card detail-panel"><div class="detail-section-head"><div><h3>参展报道书</h3><p>预览报道时间、地点、流程和注意事项，可下载 PDF。</p></div>${badge("已生成","success")}</div>${reportNoticeDownloadOnly("A3-101")}</div></div>`);

pages["mini-home"] = () => mobileShell(`
  <div class="mini-card scan-card"><div><div class="mini-chip">快捷登录</div><div class="mini-title">扫一扫登录 PC 展商端</div><p>扫描 PC 端展商登录页二维码，快速完成登录。</p></div><button class="mini-scan-btn">扫一扫</button></div>
  <div class="mini-card mini-expo-card refined-expo-card"><div class="mini-card-head"><div class="mini-title">我的展位</div>${badge("绿搭","success")}</div>${kvRows([["展会名称","2026 中国国际农业科技展"],["展会时间","2026-09-18 至 09-20"],["展会地点","上海国家会展中心"],["展位号","A3-218"],["展位类型","绿搭展位"]])}</div>
  <a class="mini-card mini-link-card mini-progress-card" href="mini-progress.html"><div class="mini-card-head"><div class="mini-title">当前进度</div><span class="mini-card-arrow">查看 ›</span></div><p>当前展务资料上传与审核进度</p>${progress("整体进度",76,"warning")}</a>
  <a class="mini-card mini-link-card" href="mini-notice.html"><div class="mini-card-head"><div class="mini-title">参展报道通知书</div><span class="mini-card-arrow">查看 ›</span></div><p>预览报道时间、地点、流程和注意事项。</p></a>
  <div class="mini-card"><div class="mini-title">待办提醒</div><div class="mini-todo-row"><span>绿搭效果图待确认</span>${badge("待处理","warning")}</div><div class="mini-todo-row"><span>光地电路图审核中</span>${badge("审核中","warning")}</div></div>
`, "home", "首页");

pages["mini-message"] = () => mobileShell(`
  <div class="tabs mini-tabs">
    <button class="tab-btn active" data-tab="miniall2">全部</button>
    <button class="tab-btn" data-tab="minireview2">审核</button>
    <button class="tab-btn" data-tab="minisystem2">系统</button>
  </div>
  <div class="tab-panel active" id="tab-miniall2">
    <div class="mini-card"><div class="mini-message"><div class="mini-message-icon">!</div><div><strong>绿搭画面审核未通过</strong><div class="list-desc" style="margin-top:6px">画面 2-反存在绝对化宣传用语，请修改后重新提交。</div><div class="mini-message-time">今天 14:32</div></div></div></div>
    <div class="mini-card"><div class="mini-message"><div class="mini-message-icon" style="background:#fff4dd;color:#b86e00">⌛</div><div><strong>证件注册截止提醒</strong><div class="list-desc" style="margin-top:6px">距截止还有 8 天，当前完成 3/6 人。</div><div class="mini-message-time">昨天 10:00</div></div></div></div>
    <div class="mini-card"><div class="mini-message"><div class="mini-message-icon" style="background:#e8f7ef;color:#18a058">✓</div><div><strong>通知书已生成</strong><div class="list-desc" style="margin-top:6px">您的参展报到通知书已生成，可在线查看。</div><div class="mini-message-time">07-19 16:08</div></div></div></div>
  </div>
  <div class="tab-panel" id="tab-minireview2">
    <div class="mini-card"><div class="mini-message"><div class="mini-message-icon">!</div><div><strong>标展楣板信息已更新待复核</strong><div class="list-desc" style="margin-top:6px">请检查楣板名称与联系人是否正确。</div><div class="mini-message-time">今天 11:18</div></div></div></div>
    <div class="mini-card"><div class="mini-message"><div class="mini-message-icon">!</div><div><strong>光地电路图进入复核</strong><div class="list-desc" style="margin-top:6px">供应商正在逐条审核已上传文件。</div><div class="mini-message-time">昨天 18:26</div></div></div></div>
  </div>
  <div class="tab-panel" id="tab-minisystem2">
    <div class="mini-card"><div class="mini-message"><div class="mini-message-icon" style="background:#eef4ff;color:#2f6bff">i</div><div><strong>系统升级通知</strong><div class="list-desc" style="margin-top:6px">今晚 23:00 - 23:30 进行系统维护，期间上传功能暂停。</div><div class="mini-message-time">06-25 09:00</div></div></div></div>
    <div class="mini-card"><div class="mini-message"><div class="mini-message-icon" style="background:#e8f7ef;color:#18a058">✓</div><div><strong>报道书模板已更新</strong><div class="list-desc" style="margin-top:6px">请重新查看最新版本的参展报道通知书。</div><div class="mini-message-time">06-24 16:20</div></div></div></div>
  </div>
`, "message", "消息");

pages["mini-progress"] = () => mobileShell(`
  <div class="mini-card"><div class="mini-title">进度列表</div>
    <a class="mini-stage-item" href="mini-progress-detail.html?stage=company"><span>企业资料确认</span>${badge("已完成","success")}</a>
    <a class="mini-stage-item" href="mini-progress-detail.html?stage=submit"><span>展位资料提交</span>${badge("审核中","warning")}</a>
    <a class="mini-stage-item" href="mini-progress-detail.html?stage=review"><span>供应商审核</span>${badge("进行中","warning")}</a>
    <a class="mini-stage-item" href="mini-progress-detail.html?stage=effect"><span>效果图确认</span>${badge("待处理","danger")}</a>
    <a class="mini-stage-item" href="mini-progress-detail.html?stage=notice"><span>报道书下载</span>${badge("待生成","warning")}</a>
  </div>
  <div class="mini-card"><div class="mini-title">说明</div><p class="text-muted">小程序不支持大文件上传，请前往PC端上传资料</p></div>
`, "progress", "进度");

pages["mini-progress-detail"] = () => {
  const stage = new URLSearchParams(location.search).get("stage") || "submit";
  const configs = {
    company: {title:"企业资料确认", body:`<div class="mini-card"><div class="mini-title">企业资料确认</div>${fileRow("企业基础信息","已完成","success")}${fileRow("联系人信息","已完成","success")}${fileRow("企业名片确认","已完成","success")}</div>`},
    submit: {title:"展位资料提交", body:`<div class="mini-card"><div class="mini-title">已上传资料</div>${fileRow("1-1.png","已通过","success")}${fileRow("1-2.png","已通过","success")}${fileRow("1-3.png","待复核","warning")}${fileRow("营业执照.pdf","已通过","success")}</div><div class="mini-card"><div class="mini-title">资料预览</div><button class="effect-card js-modal" data-title="图片预览" data-hide-footer="1" data-body-html="<div class='preview-large mobile-preview-large'>1-3 设计图大图预览</div>">查看设计图</button><div style="height:10px"></div><span class="link js-confirm" data-message="已打开文件预览">预览营业执照.pdf</span></div>`},
    review: {title:"供应商审核", body:`<div class="mini-card"><div class="mini-title">审核记录</div><div class="mini-timeline"><div class="mini-time active"><strong>1-3 设计图复核中</strong><p>供应商正在逐条审核上传图片，预计 1 个工作日反馈。</p></div><div class="mini-time"><strong>电路图审核中</strong><p>待补充盖章版文件后继续审核。</p></div></div></div>`},
    effect: {title:"效果图确认", body:`<div class="mini-card"><div class="mini-title">效果图状态</div><div class="mini-timeline"><div class="mini-time"><strong>待供应商回传效果图</strong><p>回传后可在展位详情中查看大图并确认。</p></div></div></div>`},
    notice: {title:"报道书下载", body:`<div class="mini-card"><div class="mini-title">报道书状态</div><div class="mini-timeline"><div class="mini-time"><strong>参展报道通知书待生成</strong><p>供应商审核完成后开放预览与下载。</p></div></div></div>`}
  };
  const current = configs[stage] || configs.submit;
  return mobileShell(current.body, "progress", current.title);
};

if (["admin-exhibition","admin-message","mini-home","mini-message","mini-progress","mini-progress-detail","booth-standard-detail"].includes(page)) {
  document.getElementById("app").innerHTML = pages[page]();
}

document.addEventListener("click", (e) => {
  const bizSwitch = e.target.closest("[data-biz-switch]");
  if (bizSwitch) {
    const container = bizSwitch.closest("#tab-msg-business-final-2");
    container?.querySelectorAll("[data-biz-switch]").forEach(btn => btn.classList.remove("active"));
    container?.querySelectorAll(".biz-subpanel-fixed").forEach(panel => panel.classList.remove("active"));
    bizSwitch.classList.add("active");
    container?.querySelector(`[data-biz-view="${bizSwitch.dataset.bizSwitch}"]`)?.classList.add("active");
  }
});

if (backMap[page]) {
  const pcHead = document.querySelector(".page-head");
  if (pcHead && !pcHead.querySelector(".back-link")) {
    const holder = document.createElement("div");
    holder.className = "page-back-row";
    holder.innerHTML = `<a class="back-link" href="${backMap[page]}">← 返回上一级</a>`;
    pcHead.prepend(holder);
  }
  const phoneHead = document.querySelector(".phone-head");
  if (phoneHead && !phoneHead.querySelector(".mobile-back-link")) {
    const back = document.createElement("a");
    back.className = "mobile-back-link";
    back.href = backMap[page];
    back.textContent = "←";
    phoneHead.prepend(back);
  }
}

pages["admin-enterprise-detail"] = () => shell(`
  <div class="enterprise-profile-card">
    <div class="enterprise-avatar">华</div>
    <div>
      <h2>华丰农业科技有限公司</h2>
      <p>中国国际农业科技展 · A3-218 · 绿搭展位</p>
      <div class="tag-row">${badge("待后台审核","warning")}${badge("展商修改提交","info")}</div>
    </div>
    <div class="enterprise-summary-grid">
      <div><span>联系人</span><strong>李明</strong></div>
      <div><span>联系电话</span><strong>138-0000-8888</strong></div>
      <div><span>统一社会信用代码</span><strong>91310000MA1X2026</strong></div>
      <div><span>资料来源</span><strong>展商修改提交</strong></div>
    </div>
  </div>
  <div class="detail-layout">
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>企业资质档案</h3><p>营业执照、登记证、检测报告支持预览查看。</p></div>${badge("2 项待审核","warning")}</div>
      ${fileRow("营业执照.pdf","已上传","success")}
      ${fileRow("登记证.pdf","待审核","warning")}
      ${fileRow("检测报告.pdf","待审核","warning")}
    </div>
    <div class="card detail-panel">
      <div class="detail-section-head"><div><h3>宣传物料</h3><p>管理企业 LOGO 与会刊资料，支持预览。</p></div>${badge("待完善","warning")}</div>
      <div class="promo-layout">
        <div class="promo-logo"><div class="logo-box">LOGO</div><div><strong>华丰农业科技</strong><p>专注绿色农业投入品研发与应用服务。</p></div></div>
        <div class="promo-files">${fileRow("LOGO.png","已上传","success")}${fileRow("会刊资料.docx","待审核","warning")}</div>
      </div>
    </div>
  </div>
`, true);

if (page === "admin-enterprise-detail") {
  document.getElementById("app").innerHTML = pages[page]();
}

if (["dashboard","booth-standard","booth-standard-detail","booth-standard-edit","booth-green","booth-green-detail","booth-green-edit","booth-raw","booth-raw-detail","booth-raw-edit","message"].includes(page)) {
  const labels = ["首页","标展管理","绿搭管理","光地管理","消息管理"];
  const hrefs = ["dashboard.html","booth-standard.html","booth-green.html","booth-raw.html","message.html"];
  document.querySelectorAll(".sidebar .nav-item").forEach((item, index) => {
    if (index < labels.length) {
      item.href = hrefs[index];
      const text = item.querySelector("span:last-child");
      if (text) text.textContent = labels[index];
    }
  });
}

if (window.__setupSystemHub) {
  window.__setupSystemHub();
}
