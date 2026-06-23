"use strict";
/* ============ DATA ============ */
const TEAMS = {
 "Mexique":["mx","MEX"],"Afrique du Sud":["za","RSA"],"Corée du Sud":["kr","KOR"],"Tchéquie":["cz","CZE"],
 "Canada":["ca","CAN"],"Bosnie-Herzégovine":["ba","BIH"],"Qatar":["qa","QAT"],"Suisse":["ch","SUI"],
 "Écosse":["gb-sct","SCO"],"Maroc":["ma","MAR"],"Brésil":["br","BRA"],"Haïti":["ht","HAI"],
 "États-Unis":["us","USA"],"Australie":["au","AUS"],"Turquie":["tr","TUR"],"Paraguay":["py","PAR"],
 "Allemagne":["de","GER"],"Côte d'Ivoire":["ci","CIV"],"Équateur":["ec","ECU"],"Curaçao":["cw","CUW"],
 "Suède":["se","SWE"],"Japon":["jp","JPN"],"Pays-Bas":["nl","NED"],"Tunisie":["tn","TUN"],
 "Nouvelle-Zélande":["nz","NZL"],"Iran":["ir","IRN"],"Belgique":["be","BEL"],"Égypte":["eg","EGY"],
 "Uruguay":["uy","URU"],"Arabie Saoudite":["sa","KSA"],"Espagne":["es","ESP"],"Cap-Vert":["cv","CPV"],
 "Norvège":["no","NOR"],"France":["fr","FRA"],"Sénégal":["sn","SEN"],"Irak":["iq","IRQ"],
 "Argentine":["ar","ARG"],"Autriche":["at","AUT"],"Jordanie":["jo","JOR"],"Algérie":["dz","ALG"],
 "Portugal":["pt","POR"],"RD Congo":["cd","COD"],"Ouzbékistan":["uz","UZB"],"Colombie":["co","COL"],
 "Angleterre":["gb-eng","ENG"],"Croatie":["hr","CRO"],"Ghana":["gh","GHA"],"Panama":["pa","PAN"]
};
const GROUPS = {
 A:["Mexique","Afrique du Sud","Corée du Sud","Tchéquie"],
 B:["Canada","Bosnie-Herzégovine","Qatar","Suisse"],
 C:["Écosse","Maroc","Brésil","Haïti"],
 D:["États-Unis","Australie","Turquie","Paraguay"],
 E:["Allemagne","Côte d'Ivoire","Équateur","Curaçao"],
 F:["Suède","Japon","Pays-Bas","Tunisie"],
 G:["Nouvelle-Zélande","Iran","Belgique","Égypte"],
 H:["Uruguay","Arabie Saoudite","Espagne","Cap-Vert"],
 I:["Norvège","France","Sénégal","Irak"],
 J:["Argentine","Autriche","Jordanie","Algérie"],
 K:["Portugal","RD Congo","Ouzbékistan","Colombie"],
 L:["Angleterre","Croatie","Ghana","Panama"]
};
const GCOLOR = {A:"#39d27f",B:"#f3c14b",C:"#6db8ff",D:"#ff8f6b",E:"#c79bff",F:"#5fe0c8",
 G:"#ff7aa8",H:"#ffd166",I:"#7fd1ff",J:"#9be15d",K:"#ffa14a",L:"#d98aff"};
const M = (id,g,d,t,h,a,v,hs=null,as=null)=>({id,g,d,t,h,a,v,hs,as});
const MATCHES = [
 M(1,"A","2026-06-11","21:00","Mexique","Afrique du Sud","Estadio Azteca, Mexico",2,0),
 M(2,"A","2026-06-12","04:00","Corée du Sud","Tchéquie","Estadio Akron, Guadalajara",2,1),
 M(3,"B","2026-06-12","21:00","Canada","Bosnie-Herzégovine","BMO Field, Toronto",1,1),
 M(4,"D","2026-06-13","03:00","États-Unis","Paraguay","SoFi Stadium, Los Angeles",4,1),
 M(5,"B","2026-06-13","21:00","Qatar","Suisse","Levi's Stadium, San Francisco",1,1),
 M(6,"C","2026-06-14","00:00","Brésil","Maroc","MetLife Stadium, New York",1,1),
 M(7,"C","2026-06-14","03:00","Haïti","Écosse","Gillette Stadium, Boston",0,1),
 M(8,"D","2026-06-14","06:00","Australie","Turquie","BC Place, Vancouver",2,0),
 M(9,"E","2026-06-14","19:00","Allemagne","Curaçao","NRG Stadium, Houston",7,1),
 M(10,"F","2026-06-14","22:00","Pays-Bas","Japon","AT&T Stadium, Dallas",2,2),
 M(11,"E","2026-06-15","01:00","Côte d'Ivoire","Équateur","Lincoln Financial Field, Philadelphia",1,0),
 M(12,"F","2026-06-15","04:00","Suède","Tunisie","Estadio BBVA, Monterrey",5,1),
 M(13,"H","2026-06-15","18:00","Espagne","Cap-Vert","Mercedes-Benz Stadium, Atlanta",0,0),
 M(14,"G","2026-06-15","21:00","Belgique","Égypte","Lumen Field, Seattle",1,1),
 M(15,"H","2026-06-16","00:00","Arabie Saoudite","Uruguay","Hard Rock Stadium, Miami",1,1),
 M(16,"G","2026-06-16","03:00","Iran","Nouvelle-Zélande","SoFi Stadium, Los Angeles",2,2),
 M(17,"I","2026-06-16","21:00","France","Sénégal","MetLife Stadium, New York",3,1),
 M(18,"I","2026-06-17","00:00","Irak","Norvège","Gillette Stadium, Boston",1,4),
 M(19,"J","2026-06-17","03:00","Argentine","Algérie","Arrowhead Stadium, Kansas City",3,0),
 M(20,"J","2026-06-17","06:00","Autriche","Jordanie","Levi's Stadium, San Francisco",3,1),
 M(21,"K","2026-06-17","19:00","Portugal","RD Congo","NRG Stadium, Houston"),
 M(22,"L","2026-06-17","22:00","Angleterre","Croatie","AT&T Stadium, Dallas"),
 M(23,"L","2026-06-18","01:00","Ghana","Panama","BMO Field, Toronto"),
 M(24,"K","2026-06-18","04:00","Ouzbékistan","Colombie","Estadio Azteca, Mexico"),
 M(25,"A","2026-06-18","18:00","Tchéquie","Afrique du Sud","Mercedes-Benz Stadium, Atlanta"),
 M(26,"B","2026-06-18","21:00","Suisse","Bosnie-Herzégovine","SoFi Stadium, Los Angeles"),
 M(27,"B","2026-06-19","00:00","Canada","Qatar","BC Place, Vancouver"),
 M(28,"A","2026-06-19","03:00","Mexique","Corée du Sud","Estadio Akron, Guadalajara"),
 M(29,"D","2026-06-19","21:00","États-Unis","Australie","Lumen Field, Seattle"),
 M(30,"C","2026-06-20","00:00","Écosse","Maroc","Gillette Stadium, Boston"),
 M(31,"C","2026-06-20","03:00","Brésil","Haïti","Lincoln Financial Field, Philadelphia"),
 M(32,"D","2026-06-20","06:00","Turquie","Paraguay","Levi's Stadium, San Francisco"),
 M(33,"F","2026-06-20","19:00","Pays-Bas","Suède","NRG Stadium, Houston"),
 M(34,"E","2026-06-20","22:00","Allemagne","Côte d'Ivoire","BMO Field, Toronto"),
 M(35,"E","2026-06-21","02:00","Équateur","Curaçao","Arrowhead Stadium, Kansas City"),
 M(36,"F","2026-06-21","06:00","Tunisie","Japon","Estadio BBVA, Monterrey"),
 M(37,"H","2026-06-21","18:00","Espagne","Arabie Saoudite","Mercedes-Benz Stadium, Atlanta"),
 M(38,"G","2026-06-21","21:00","Belgique","Iran","SoFi Stadium, Los Angeles"),
 M(39,"H","2026-06-22","00:00","Uruguay","Cap-Vert","Hard Rock Stadium, Miami"),
 M(40,"G","2026-06-22","03:00","Nouvelle-Zélande","Égypte","BC Place, Vancouver"),
 M(41,"J","2026-06-22","19:00","Argentine","Autriche","AT&T Stadium, Dallas"),
 M(42,"I","2026-06-22","23:00","France","Irak","Lincoln Financial Field, Philadelphia"),
 M(43,"I","2026-06-23","02:00","Norvège","Sénégal","MetLife Stadium, New York"),
 M(44,"J","2026-06-23","05:00","Jordanie","Algérie","Levi's Stadium, San Francisco"),
 M(45,"K","2026-06-23","19:00","Portugal","Ouzbékistan","NRG Stadium, Houston"),
 M(46,"L","2026-06-23","22:00","Angleterre","Ghana","Gillette Stadium, Boston"),
 M(47,"L","2026-06-24","01:00","Panama","Croatie","BMO Field, Toronto"),
 M(48,"K","2026-06-24","04:00","Colombie","RD Congo","Estadio Akron, Guadalajara"),
 M(49,"B","2026-06-24","21:00","Bosnie-Herzégovine","Qatar","Lumen Field, Seattle"),
 M(50,"B","2026-06-24","21:00","Suisse","Canada","BC Place, Vancouver"),
 M(51,"C","2026-06-25","00:00","Maroc","Haïti","Mercedes-Benz Stadium, Atlanta"),
 M(52,"C","2026-06-25","00:00","Écosse","Brésil","Hard Rock Stadium, Miami"),
 M(53,"A","2026-06-25","03:00","Afrique du Sud","Corée du Sud","Estadio BBVA, Monterrey"),
 M(54,"A","2026-06-25","03:00","Tchéquie","Mexique","Estadio Azteca, Mexico"),
 M(55,"E","2026-06-25","22:00","Curaçao","Côte d'Ivoire","Lincoln Financial Field, Philadelphia"),
 M(56,"E","2026-06-25","22:00","Équateur","Allemagne","MetLife Stadium, New York"),
 M(57,"F","2026-06-26","01:00","Tunisie","Pays-Bas","Arrowhead Stadium, Kansas City"),
 M(58,"F","2026-06-26","01:00","Japon","Suède","AT&T Stadium, Dallas"),
 M(59,"D","2026-06-26","04:00","Turquie","États-Unis","SoFi Stadium, Los Angeles"),
 M(60,"D","2026-06-26","04:00","Paraguay","Australie","Levi's Stadium, San Francisco"),
 M(61,"I","2026-06-26","21:00","Sénégal","Irak","BMO Field, Toronto"),
 M(62,"I","2026-06-26","21:00","Norvège","France","Gillette Stadium, Boston"),
 M(63,"H","2026-06-27","02:00","Uruguay","Espagne","Estadio Akron, Guadalajara"),
 M(64,"H","2026-06-27","02:00","Cap-Vert","Arabie Saoudite","NRG Stadium, Houston"),
 M(65,"G","2026-06-27","05:00","Nouvelle-Zélande","Belgique","BC Place, Vancouver"),
 M(66,"G","2026-06-27","05:00","Égypte","Iran","Lumen Field, Seattle"),
 M(67,"L","2026-06-27","23:00","Panama","Angleterre","MetLife Stadium, New York"),
 M(68,"L","2026-06-27","23:00","Croatie","Ghana","Lincoln Financial Field, Philadelphia"),
 M(69,"K","2026-06-28","01:30","RD Congo","Ouzbékistan","Mercedes-Benz Stadium, Atlanta"),
 M(70,"K","2026-06-28","01:30","Colombie","Portugal","Hard Rock Stadium, Miami"),
 M(71,"J","2026-06-28","04:00","Jordanie","Argentine","AT&T Stadium, Dallas"),
 M(72,"J","2026-06-28","04:00","Algérie","Autriche","Arrowhead Stadium, Kansas City")
];
const KO = [
 {id:73,r:"16e",d:"2026-06-28",t:"21:00",v:"SoFi Stadium, Los Angeles",sh:"2A",sa:"2B"},
 {id:76,r:"16e",d:"2026-06-29",t:"19:00",v:"NRG Stadium, Houston",sh:"1C",sa:"2F"},
 {id:74,r:"16e",d:"2026-06-29",t:"22:30",v:"Gillette Stadium, Boston",sh:"1E",sa:"T:ABCDF"},
 {id:75,r:"16e",d:"2026-06-30",t:"03:00",v:"Estadio BBVA, Monterrey",sh:"1F",sa:"2C"},
 {id:78,r:"16e",d:"2026-06-30",t:"19:00",v:"AT&T Stadium, Dallas",sh:"2E",sa:"2I"},
 {id:77,r:"16e",d:"2026-06-30",t:"23:00",v:"MetLife Stadium, New York",sh:"1I",sa:"T:CDFGH"},
 {id:79,r:"16e",d:"2026-07-01",t:"03:00",v:"Estadio Azteca, Mexico",sh:"1A",sa:"T:CEFHI"},
 {id:80,r:"16e",d:"2026-07-01",t:"18:00",v:"Mercedes-Benz Stadium, Atlanta",sh:"1L",sa:"T:EHIJK"},
 {id:82,r:"16e",d:"2026-07-01",t:"22:00",v:"Lumen Field, Seattle",sh:"1G",sa:"T:AEHIJ"},
 {id:81,r:"16e",d:"2026-07-02",t:"02:00",v:"Levi's Stadium, San Francisco",sh:"1D",sa:"T:BEFIJ"},
 {id:84,r:"16e",d:"2026-07-02",t:"21:00",v:"SoFi Stadium, Los Angeles",sh:"1H",sa:"2J"},
 {id:83,r:"16e",d:"2026-07-03",t:"01:00",v:"BMO Field, Toronto",sh:"2K",sa:"2L"},
 {id:85,r:"16e",d:"2026-07-03",t:"05:00",v:"BC Place, Vancouver",sh:"1B",sa:"T:EFGIJ"},
 {id:88,r:"16e",d:"2026-07-03",t:"20:00",v:"AT&T Stadium, Dallas",sh:"2D",sa:"2G"},
 {id:86,r:"16e",d:"2026-07-04",t:"00:00",v:"Hard Rock Stadium, Miami",sh:"1J",sa:"2H"},
 {id:87,r:"16e",d:"2026-07-04",t:"03:30",v:"Arrowhead Stadium, Kansas City",sh:"1K",sa:"T:DEIJL"},
 {id:90,r:"8e",d:"2026-07-04",t:"19:00",v:"NRG Stadium, Houston",sh:"V73",sa:"V75"},
 {id:89,r:"8e",d:"2026-07-04",t:"23:00",v:"Lincoln Financial Field, Philadelphia",sh:"V74",sa:"V77"},
 {id:91,r:"8e",d:"2026-07-05",t:"22:00",v:"MetLife Stadium, New York",sh:"V76",sa:"V78"},
 {id:92,r:"8e",d:"2026-07-06",t:"02:00",v:"Estadio Azteca, Mexico",sh:"V79",sa:"V80"},
 {id:93,r:"8e",d:"2026-07-06",t:"21:00",v:"AT&T Stadium, Dallas",sh:"V83",sa:"V84"},
 {id:94,r:"8e",d:"2026-07-07",t:"02:00",v:"Lumen Field, Seattle",sh:"V81",sa:"V82"},
 {id:95,r:"8e",d:"2026-07-07",t:"18:00",v:"Mercedes-Benz Stadium, Atlanta",sh:"V86",sa:"V88"},
 {id:96,r:"8e",d:"2026-07-07",t:"22:00",v:"BC Place, Vancouver",sh:"V85",sa:"V87"},
 {id:97,r:"4e",d:"2026-07-09",t:"22:00",v:"Gillette Stadium, Boston",sh:"V89",sa:"V90"},
 {id:98,r:"4e",d:"2026-07-10",t:"21:00",v:"SoFi Stadium, Los Angeles",sh:"V93",sa:"V94"},
 {id:99,r:"4e",d:"2026-07-11",t:"23:00",v:"Hard Rock Stadium, Miami",sh:"V91",sa:"V92"},
 {id:100,r:"4e",d:"2026-07-12",t:"03:00",v:"Arrowhead Stadium, Kansas City",sh:"V95",sa:"V96"},
 {id:101,r:"Demi",d:"2026-07-14",t:"21:00",v:"AT&T Stadium, Dallas",sh:"V97",sa:"V98"},
 {id:102,r:"Demi",d:"2026-07-15",t:"21:00",v:"Mercedes-Benz Stadium, Atlanta",sh:"V99",sa:"V100"},
 {id:103,r:"3e place",d:"2026-07-18",t:"23:00",v:"Hard Rock Stadium, Miami",sh:"P101",sa:"P102"},
 {id:104,r:"Finale",d:"2026-07-19",t:"21:00",v:"MetLife Stadium, New York",sh:"V101",sa:"V102"}
];
const ROUND_LABEL = {"16e":"Seizièmes de finale","8e":"Huitièmes de finale","4e":"Quarts de finale","Demi":"Demi-finales","3e place":"Match pour la 3e place","Finale":"Finale"};

/* ============ STATE + STORAGE ============ */
const SKEY = "cdm2026_payne_v1";
const SYNC_KEY = "cdm2026_synced_at_v1"; // horodatage de la dernière synchro Gist connue localement
// Optionnel — pour raccourcir le lien de consultation : colle ici l'URL « URL de données » affichée
// dans le panneau ☁ Sync cloud après ta 1re publication. Une fois remplie, le lien à partager devient
// simplement l'adresse du site (plus besoin de « ?view&data=… »). Laisse "" si tu n'en veux pas.
const PUBLIC_DATA_URL = "https://gist.githubusercontent.com/SamuelEspanaJimenez/e3987737775211feebd0fd93ffdbde90/raw/cdm2026_data.json";
let state = { res:{}, sco:{}, ko:{}, notes:{} };
let memFallback = false;
let READ_ONLY = false;     // page de consultation (?view) → aucune saisie possible
let VIEW_DATA_URL = null;  // URL « raw » du Gist passée aux lecteurs via ?data=

async function loadState(){
  try{
    const raw = localStorage.getItem(SKEY);
    if(raw){ state = JSON.parse(raw); }
  }catch(e){ memFallback = true; }
  if(!state.res) state.res={}; if(!state.sco) state.sco={}; if(!state.ko) state.ko={}; if(!state.notes) state.notes={};
}
let saveT=null;
function saveState(){
  clearTimeout(saveT);
  saveT=setTimeout(()=>{
    try{ localStorage.setItem(SKEY, JSON.stringify(state)); }
    catch(e){ memFallback = true; }
    if(typeof scheduleGistPush==="function") scheduleGistPush();
  },250);
}

/* ============ HELPERS ============ */
const $ = s=>document.querySelector(s);
const flag = name=>{const c=(TEAMS[name]||["",""])[0];
  return c?`<img class="flag" src="https://flagcdn.com/h40/${c}.png" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`:"";};
const short = name=>(TEAMS[name]||["",name])[1];
function teamCell(name,cls){
  return `<span class="side ${cls}">${flag(name)}<span class="tname"><span class="full">${name}</span><span class="short">${short(name)}</span></span></span>`;
}
function effMin(t){const[h,m]=t.split(":").map(Number); return h<10 ? (h+24)*60+m : h*60+m;}
function viewDate(d,t){const h=+t.split(":")[0]; if(h>=10) return d;
  const dt=new Date(d+"T12:00:00"); dt.setDate(dt.getDate()-1);
  return dt.toISOString().slice(0,10);}
const DAYS=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
const MONTHS=["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."];
const MONTHS_FULL=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
function fmtDay(iso){const dt=new Date(iso+"T12:00:00");
  return {dow:DAYS[dt.getDay()], date:dt.getDate()+" "+MONTHS[dt.getMonth()]};}
function todayParisView(){
  try{
    const f=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"});
    const hr=+new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Paris",hour:"2-digit",hour12:false}).format(new Date());
    let iso=f.format(new Date());
    if(hr<10){const dt=new Date(iso+"T12:00:00"); dt.setDate(dt.getDate()-1); iso=dt.toISOString().slice(0,10);}
    return iso;
  }catch(e){return "2026-06-17";}
}
function toast(msg){const t=$("#toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),1900);}

/* ============ CALENDAR ============ */
let filt={state:"all",group:"",team:"",phase:"all"};
function renderCal(){
  const today=todayParisView();
  const wrap=$("#calBody"); wrap.innerHTML="";
  const q=filt.team.toLowerCase();

  // Matchs de poule
  let pouleList=(filt.phase==="ko") ? [] : MATCHES.filter(m=>{
    const done=state.res[m.id]&&state.res[m.id].h!=="" &&state.res[m.id].a!=="";
    if(filt.state==="up"&&done) return false;
    if(filt.state==="done"&&!done) return false;
    if(filt.group&&m.g!==filt.group) return false;
    if(filt.team){
      if(!m.h.toLowerCase().includes(q)&&!m.a.toLowerCase().includes(q)&&!short(m.h).toLowerCase().includes(q)&&!short(m.a).toLowerCase().includes(q)) return false;}
    return true;
  });

  // Matchs à élimination directe — équipes/scores synchronisés avec l'onglet Phase finale
  const koRes=koResolved();
  let koList=(filt.phase==="poule"||filt.group) ? [] : KO.filter(k=>{
    const st=state.ko[k.id]||{};
    const done=st.hs!==undefined&&st.hs!==""&&st.as!==undefined&&st.as!=="";
    if(filt.state==="up"&&done) return false;
    if(filt.state==="done"&&!done) return false;
    if(filt.team){
      const r=koRes[k.id]||{}, h=r.h||"", a=r.a||"";
      if(!h.toLowerCase().includes(q)&&!a.toLowerCase().includes(q)&&!short(h).toLowerCase().includes(q)&&!short(a).toLowerCase().includes(q)) return false;}
    return true;
  });

  const byDay={};
  pouleList.forEach(m=>{const vd=viewDate(m.d,m.t); (byDay[vd]=byDay[vd]||[]).push({kind:"poule",m});});
  koList.forEach(k=>{const vd=viewDate(k.d,k.t); (byDay[vd]=byDay[vd]||[]).push({kind:"ko",m:k});});
  const days=Object.keys(byDay).sort();
  if(!days.length){wrap.innerHTML='<div class="empty">Aucun match pour ce filtre.</div>'; return;}
  days.forEach(vd=>{
    const items=byDay[vd].sort((a,b)=>effMin(a.m.t)-effMin(b.m.t));
    const f=fmtDay(vd);
    const isToday=vd===today;
    const sec=document.createElement("div"); sec.className="session";
    sec.innerHTML=`<div class="sesshead">
      <span class="sessday">${f.dow}</span><span class="sessdate">${f.date}</span>
      ${isToday?'<span class="live"><span class="dot"></span>aujourd\'hui</span>':''}
      <span class="sesscount">${items.length} match${items.length>1?'s':''}</span></div>`;
    items.forEach(it=>sec.appendChild(it.kind==="ko" ? koMatchCard(it.m,koRes) : matchCard(it.m)));
    wrap.appendChild(sec);
  });
}
function matchCard(m){
  const r=state.res[m.id]||{h:m.hs==null?"":m.hs,a:m.as==null?"":m.as};
  if(!state.res[m.id] && (m.hs!=null)){ state.res[m.id]={h:m.hs,a:m.as}; }
  const cur=state.res[m.id]||{h:"",a:""};
  const hv=cur.h, av=cur.a;
  const done=hv!==""&&av!=="";
  let wcls=""; if(done){ if(+hv>+av) wcls="winL"; else if(+av>+hv) wcls="winA"; }
  const scs=state.sco[m.id]||[];
  const el=document.createElement("div");
  el.className="match "+(done?"done ":"")+wcls;
  el.innerHTML=`
    <div class="mrow">
      <span class="mtime">
        <span class="hr mono">${m.t}</span>
        <span class="gp" style="background:${GCOLOR[m.g]}">GR. ${m.g}</span>
      </span>
      ${teamCell(m.h,"home")}
      <span class="scorebox">
        <input class="mono" type="number" min="0" inputmode="numeric" data-id="${m.id}" data-s="h" value="${hv}">
        <span class="vs">–</span>
        <input class="mono" type="number" min="0" inputmode="numeric" data-id="${m.id}" data-s="a" value="${av}">
      </span>
      ${teamCell(m.a,"away")}
      <button class="mexpand ${scs.length?'has':''}" data-exp="${m.id}" title="Buteurs">⚽</button>
    </div>
    <div class="mmeta">📍 ${m.v}</div>
    ${ratingRow(m.id)}
    <div class="scorers" id="sco-${m.id}"></div>`;
  return el;
}
// Étiquette compacte du tour, affichée dans le calendrier à la place du chip de groupe.
const KO_TAG={"16e":"16E","8e":"8E","4e":"QUART","Demi":"DEMI","3e place":"3E P.","Finale":"FINALE"};
function koTeamCell(name,disp,isPh,cls){
  if(isPh) return `<span class="side ${cls} ph"><span class="tname"><span class="full">${disp}</span><span class="short">${disp}</span></span></span>`;
  return `<span class="side ${cls}">${flag(name)}<span class="tname"><span class="full">${name}</span><span class="short">${short(name)}</span></span></span>`;
}
// Carte d'un match à élimination directe dans le calendrier.
// Équipes résolues via koResolved() (placeholders sinon), scores éditables → state.ko.
function koMatchCard(k,res){
  const r=res[k.id]||{}, st=state.ko[k.id]||{};
  const hPh=!r.h, aPh=!r.a;
  const hName=r.h||slotHint(k.sh), aName=r.a||slotHint(k.sa);
  const hv=(st.hs==null?"":st.hs), av=(st.as==null?"":st.as);
  const done=hv!==""&&av!=="";
  const hWin=r.win&&r.win===r.h, aWin=r.win&&r.win===r.a;
  let wcls=""; if(hWin) wcls="winL"; else if(aWin) wcls="winA";
  let pen="";
  if(done && +hv===+av){
    pen=`<span class="kopen">tirs au but :
      <select data-kopen="${k.id}">
        <option value="" ${!st.pen?'selected':''}>—</option>
        <option value="h" ${st.pen==='h'?'selected':''}>${r.h?short(r.h):'dom.'}</option>
        <option value="a" ${st.pen==='a'?'selected':''}>${r.a?short(r.a):'ext.'}</option>
      </select></span>`;
  }
  const el=document.createElement("div");
  el.className="match ko "+(done?"done ":"")+wcls;
  el.innerHTML=`
    <div class="mrow">
      <span class="mtime">
        <span class="hr mono">${k.t}</span>
        <span class="gp ko" title="${ROUND_LABEL[k.r]}">${KO_TAG[k.r]||k.r}</span>
      </span>
      ${koTeamCell(r.h,hName,hPh,"home")}
      <span class="scorebox">
        <input class="mono" type="number" min="0" inputmode="numeric" data-koid="${k.id}" data-s="hs" value="${hv}">
        <span class="vs">–</span>
        <input class="mono" type="number" min="0" inputmode="numeric" data-koid="${k.id}" data-s="as" value="${av}">
      </span>
      ${koTeamCell(r.a,aName,aPh,"away")}
    </div>
    <div class="mmeta">📍 ${k.v}${pen}</div>`;
  return el;
}
function renderScorersEditor(id){
  const box=$("#sco-"+id); if(!box) return;
  const m=MATCHES.find(x=>x.id===id);
  const scs=state.sco[id]||[];
  let rows=scs.map((s,i)=>`
    <div class="grow">
      <input type="text" placeholder="Buteur" value="${(s.n||'').replace(/"/g,'&quot;')}" data-sc="${id}" data-i="${i}" data-k="n">
      <select data-sc="${id}" data-i="${i}" data-k="t">
        <option value="h" ${s.t==='h'?'selected':''}>${short(m.h)}</option>
        <option value="a" ${s.t==='a'?'selected':''}>${short(m.a)}</option>
      </select>
      <span class="gnum"><input type="number" min="1" value="${s.g||1}" data-sc="${id}" data-i="${i}" data-k="g"></span>
      <button class="grm" data-rm="${id}" data-i="${i}" title="Retirer">✕</button>
    </div>`).join("");
  box.innerHTML=`<h4>Buteurs</h4><div class="glist">${rows}</div>
    <button class="addg" data-add="${id}">+ Ajouter un buteur</button>`;
}

/* ============ TIEBREAKERS ============ */

// Compute head-to-head stats among a subset of teams using only their mutual matches.
function h2hStats(teams, matchList){
  const s={};
  teams.forEach(t=>s[t]={pts:0,gd:0,gf:0});
  matchList.forEach(m=>{
    if(!teams.includes(m.h)||!teams.includes(m.a)) return;
    const r=state.res[m.id]; if(!r||r.h===""||r.a==="") return;
    const h=+r.h,a=+r.a;
    s[m.h].gf+=h; s[m.h].gd+=h-a;
    s[m.a].gf+=a; s[m.a].gd+=a-h;
    if(h>a) s[m.h].pts+=3;
    else if(a>h) s[m.a].pts+=3;
    else{s[m.h].pts++;s[m.a].pts++;}
  });
  return s;
}

// Resolve ordering for a set of equally-pointed teams.
// Criteria (0-indexed):
//   0 = H2H points, 1 = H2H GD, 2 = H2H goals scored
//   3 = overall GD,  4 = overall goals scored
// When a criterion separates at least one team, remaining tied sub-groups
// continue from criterion+1 (never restart from 0 — FIFA 2026 rule).
function resolveTied(teams, matchList, rowsMap, criterion, groupOrder){
  if(teams.length<=1) return teams;
  if(criterion>4) return [...teams].sort((a,b)=>groupOrder.indexOf(a)-groupOrder.indexOf(b));

  const h2h=criterion<3 ? h2hStats(teams,matchList) : null;
  const val=t=>{
    switch(criterion){
      case 0: return h2h[t].pts;
      case 1: return h2h[t].gd;
      case 2: return h2h[t].gf;
      case 3: return rowsMap[t].diff;
      case 4: return rowsMap[t].bp;
    }
  };

  const sorted=[...teams].sort((a,b)=>val(b)-val(a));
  const subgroups=[];
  let cur=[sorted[0]];
  for(let i=1;i<sorted.length;i++){
    if(val(sorted[i])===val(sorted[i-1])) cur.push(sorted[i]);
    else{subgroups.push(cur);cur=[sorted[i]];}
  }
  subgroups.push(cur);

  // No separation at this criterion: advance to next
  if(subgroups.length===1) return resolveTied(teams,matchList,rowsMap,criterion+1,groupOrder);

  // At least one team separated: continue from next criterion for each remaining sub-group
  return subgroups.flatMap(sg=>
    sg.length===1 ? sg : resolveTied(sg,matchList,rowsMap,criterion+1,groupOrder)
  );
}

/* ============ STANDINGS ============ */
function computeGroup(g){
  const rows={};
  GROUPS[g].forEach(t=>rows[t]={t,J:0,G:0,N:0,P:0,bp:0,bc:0,pts:0});
  const gMatches=MATCHES.filter(m=>m.g===g);
  gMatches.forEach(m=>{
    const r=state.res[m.id]; if(!r||r.h===""||r.a==="") return;
    const h=+r.h,a=+r.a, rh=rows[m.h], ra=rows[m.a];
    rh.J++;ra.J++; rh.bp+=h;rh.bc+=a; ra.bp+=a;ra.bc+=h;
    if(h>a){rh.G++;rh.pts+=3;ra.P++;}
    else if(a>h){ra.G++;ra.pts+=3;rh.P++;}
    else{rh.N++;ra.N++;rh.pts++;ra.pts++;}
  });
  const allRows=Object.values(rows).map(r=>({...r,diff:r.bp-r.bc}));

  // Primary sort by points
  allRows.sort((a,b)=>b.pts-a.pts);

  // Resolve ties group by group
  const result=[];
  let i=0;
  while(i<allRows.length){
    let j=i+1;
    while(j<allRows.length&&allRows[j].pts===allRows[i].pts) j++;
    const pg=allRows.slice(i,j);
    if(pg.length===1){
      result.push(pg[0]);
    } else {
      const rowsMap=Object.fromEntries(pg.map(r=>[r.t,r]));
      resolveTied(pg.map(r=>r.t),gMatches,rowsMap,0,GROUPS[g]).forEach(t=>result.push(rowsMap[t]));
    }
    i=j;
  }
  return result;
}

function renderStandings(){
  const wrap=$("#standBody"); wrap.innerHTML="";
  const thirds=[];
  Object.keys(GROUPS).forEach(g=>{
    const rows=computeGroup(g);
    thirds.push({...rows[2],g});
    const card=document.createElement("div"); card.className="gcard";
    card.innerHTML=`<h3><span class="gtag" style="background:${GCOLOR[g]}">${g}</span> Groupe ${g}</h3>
      <table class="stand"><thead><tr>
        <th class="tm">Équipe</th><th>J</th><th>G</th><th>N</th><th>P</th><th>BP</th><th>BC</th><th>Diff</th><th>Pts</th>
      </tr></thead><tbody>
      ${rows.map((r,i)=>`<tr class="${i===0?'q1':i===1?'q2':i===2?'third':''}">
        <td class="tm"><span class="cell"><span class="pos">${i+1}</span>${flag(r.t)}<span class="name">${short(r.t)}</span></span></td>
        <td>${r.J}</td><td>${r.G}</td><td>${r.N}</td><td>${r.P}</td><td>${r.bp}</td><td>${r.bc}</td>
        <td>${r.diff>0?'+':''}${r.diff}</td><td class="pts">${r.pts}</td></tr>`).join("")}
      </tbody></table>`;
    wrap.appendChild(card);
  });

  // Best thirds: no H2H (different groups) → pts › GD › BP › wins
  thirds.sort((x,y)=>y.pts-x.pts||y.diff-x.diff||y.bp-x.bp||y.G-x.G);
  const tb=$("#thirdsBody");
  tb.innerHTML=`<table class="stand"><thead><tr>
      <th class="tm">3e du groupe</th><th>J</th><th>Pts</th><th>Diff</th><th>BP</th><th></th>
    </tr></thead><tbody>
    ${thirds.map((r,i)=>`<tr class="${i<8?'qual':''}">
      <td class="tm"><span class="cell"><span class="pos">${i+1}</span>${flag(r.t)}<span class="name">${r.t}</span> <span style="color:var(--faint);font-size:11px">gr. ${r.g}</span></span></td>
      <td>${r.J}</td><td class="pts">${r.pts}</td><td>${r.diff>0?'+':''}${r.diff}</td><td>${r.bp}</td>
      <td style="color:var(--faint);font-size:11px;text-align:right;padding-right:14px">${i<8?'qualifié':'éliminé'}</td></tr>`).join("")}
    </tbody></table>`;
}

/* ============ SCORERS LEADERBOARD ============ */
function renderScorersLB(){
  const agg={};
  Object.keys(state.sco).forEach(id=>{
    const m=MATCHES.find(x=>x.id===+id); if(!m) return;
    (state.sco[id]||[]).forEach(s=>{
      const name=(s.n||"").trim(); if(!name) return;
      const team= s.t==='a'?m.a:m.h;
      const key=name+"|"+team;
      agg[key]=agg[key]||{n:name,t:team,g:0};
      agg[key].g += (+s.g||1);
    });
  });
  const arr=Object.values(agg).sort((a,b)=>b.g-a.g||a.n.localeCompare(b.n));
  const sub=$("#scoSub"), body=$("#scoBody");
  if(!arr.length){ sub.textContent="— renseigne les buteurs depuis le calendrier"; body.innerHTML='<div class="empty">Aucun buteur saisi pour l\'instant.</div>'; return; }
  const max=arr[0].g;
  sub.textContent=`— ${arr.length} buteur${arr.length>1?'s':''} · ${arr.reduce((s,x)=>s+x.g,0)} but${arr.reduce((s,x)=>s+x.g,0)>1?'s':''}`;
  let rk=1;
  body.innerHTML=`<table><tbody>${arr.map((x,i,a)=>{
    if(i>0 && a[i].g!==a[i-1].g) rk=i+1;
    return `<tr>
    <td class="rk">${rk}</td>
    <td class="pl">${flag(x.t)} ${x.n}<div class="tg">${x.t}</div><div class="bar" style="width:${Math.round(x.g/max*100)}%"></div></td>
    <td class="gl">${x.g}</td></tr>`;}).join("")}</tbody></table>`;
}

/* ============ KNOCKOUT ============ */
// Têtes de série directes (1er/2e de chaque groupe) d'après le classement EN COURS.
// Mises à jour en continu : l'algorithme rejoue à chaque modification d'un classement.
function seedDirect(){
  const map={};
  Object.keys(GROUPS).forEach(g=>{
    const rows=computeGroup(g);
    map["1"+g]=rows[0].t; map["2"+g]=rows[1].t;
  });
  return map;
}
/* ---- ANNEXE C : 495 combinaisons des 8 meilleurs 3es (Règlement FIFA 2026) ----
   Colonnes = vainqueurs de groupe recevant un 3e : 1A 1B 1D 1E 1G 1I 1K 1L
   Chaque ligne = les 8 lettres de groupe (le 3e de ce groupe) dans l'ordre des colonnes.
   La clé de recherche = ensemble trié des 8 groupes qualifiés (C(12,8)=495). */
const ANNEX_C_COLS=["1A","1B","1D","1E","1G","1I","1K","1L"];
// Quel pool « T:… » alimente quelle colonne (déduit du tableau des 16es, art. 12.6)
const THIRD_POOL_COL={
  "T:ABCDF":"1E","T:CDFGH":"1I","T:CEFHI":"1A","T:EHIJK":"1L",
  "T:BEFIJ":"1D","T:AEHIJ":"1G","T:EFGIJ":"1B","T:DEIJL":"1K"
};
const ANNEX_C_RAW=[
"EJIFHGLK","HGIDJFLK","EJIDHGLK","EJIDHFLK","EGIDJFLK","EGJDHFLK","EGIDHFLK","EGJDHFLI","EGJDHFIK","HGICJFLK",
"EJICHGLK","EJICHFLK","EGICJFLK","EGJCHFLK","EGICHFLK","EGJCHFLI","EGJCHFIK","HGICJDLK","CJIDHFLK","CGIDJFLK",
"CGJDHFLK","CGIDHFLK","CGJDHFLI","CGJDHFIK","EJICHDLK","EGICJDLK","EGJCHDLK","EGICHDLK","EGJCHDLI","EGJCHDIK",
"CJEDIFLK","CJEDHFLK","CEIDHFLK","CJEDHFLI","CJEDHFIK","CGEDJFLK","CGEDIFLK","CGEDJFLI","CGEDJFIK","CGEDHFLK",
"CGJDHFLE","CGJDHFEK","CGEDHFLI","CGEDHFIK","CGJDHFEI","HJBFIGLK","EJIBHGLK","EJBFIHLK","EJBFIGLK","EJBFHGLK",
"EGBFIHLK","EJBFHGLI","EJBFHGIK","HJBDIGLK","HJBDIFLK","IGBDJFLK","HGBDJFLK","HGBDIFLK","HGBDJFLI","HGBDJFIK",
"EJBDIHLK","EJBDIGLK","EJBDHGLK","EGBDIHLK","EJBDHGLI","EJBDHGIK","EJBDIFLK","EJBDHFLK","EIBDHFLK","EJBDHFLI",
"EJBDHFIK","EGBDJFLK","EGBDIFLK","EGBDJFLI","EGBDJFIK","EGBDHFLK","HGBDJFLE","HGBDJFEK","EGBDHFLI","EGBDHFIK",
"HGBDJFEI","HJBCIGLK","HJBCIFLK","IGBCJFLK","HGBCJFLK","HGBCIFLK","HGBCJFLI","HGBCJFIK","EJBCIHLK","EJBCIGLK",
"EJBCHGLK","EGBCIHLK","EJBCHGLI","EJBCHGIK","EJBCIFLK","EJBCHFLK","EIBCHFLK","EJBCHFLI","EJBCHFIK","EGBCJFLK",
"EGBCIFLK","EGBCJFLI","EGBCJFIK","EGBCHFLK","HGBCJFLE","HGBCJFEK","EGBCHFLI","EGBCHFIK","HGBCJFEI","HJBCIDLK",
"IGBCJDLK","HGBCJDLK","HGBCIDLK","HGBCJDLI","HGBCJDIK","CJBDIFLK","CJBDHFLK","CIBDHFLK","CJBDHFLI","CJBDHFIK",
"CGBDJFLK","CGBDIFLK","CGBDJFLI","CGBDJFIK","CGBDHFLK","CGBDHFLJ","HGBCJFDK","CGBDHFLI","CGBDHFIK","HGBCJFDI",
"EJBCIDLK","EJBCHDLK","EIBCHDLK","EJBCHDLI","EJBCHDIK","EGBCJDLK","EGBCIDLK","EGBCJDLI","EGBCJDIK","EGBCHDLK",
"HGBCJDLE","HGBCJDEK","EGBCHDLI","EGBCHDIK","HGBCJDEI","CJBDEFLK","CEBDIFLK","CJBDEFLI","CJBDEFIK","CEBDHFLK",
"CJBDHFLE","CJBDHFEK","CEBDHFLI","CEBDHFIK","CJBDHFEI","CGBDEFLK","CGBDJFLE","CGBDJFEK","CGBDEFLI","CGBDEFIK",
"CGBDJFEI","CGBDHFLE","CGBDHFEK","HGBCJFDE","CGBDHFEI","HJIFAGLK","EJIAHGLK","EJIFAHLK","EJIFAGLK","EGJFAHLK",
"EGIFAHLK","EGJFAHLI","EGJFAHIK","HJIDAGLK","HJIDAFLK","IGJDAFLK","HGJDAFLK","HGIDAFLK","HGJDAFLI","HGJDAFIK",
"EJIDAHLK","EJIDAGLK","EGJDAHLK","EGIDAHLK","EGJDAHLI","EGJDAHIK","EJIDAFLK","HJEDAFLK","HEIDAFLK","HJEDAFLI",
"HJEDAFIK","EGJDAFLK","EGIDAFLK","EGJDAFLI","EGJDAFIK","HGEDAFLK","HGJDAFLE","HGJDAFEK","HGEDAFLI","HGEDAFIK",
"HGJDAFEI","HJICAGLK","HJICAFLK","IGJCAFLK","HGJCAFLK","HGICAFLK","HGJCAFLI","HGJCAFIK","EJICAHLK","EJICAGLK",
"EGJCAHLK","EGICAHLK","EGJCAHLI","EGJCAHIK","EJICAFLK","HJECAFLK","HEICAFLK","HJECAFLI","HJECAFIK","EGJCAFLK",
"EGICAFLK","EGJCAFLI","EGJCAFIK","HGECAFLK","HGJCAFLE","HGJCAFEK","HGECAFLI","HGECAFIK","HGJCAFEI","HJICADLK",
"IGJCADLK","HGJCADLK","HGICADLK","HGJCADLI","HGJCADIK","CJIDAFLK","HJFCADLK","HFICADLK","HJFCADLI","HJFCADIK",
"CGJDAFLK","CGIDAFLK","CGJDAFLI","CGJDAFIK","HGFCADLK","CGJDAFLH","HGJCAFDK","HGFCADLI","HGFCADIK","HGJCAFDI",
"EJICADLK","HJECADLK","HEICADLK","HJECADLI","HJECADIK","EGJCADLK","EGICADLK","EGJCADLI","EGJCADIK","HGECADLK",
"HGJCADLE","HGJCADEK","HGECADLI","HGECADIK","HGJCADEI","CJEDAFLK","CEIDAFLK","CJEDAFLI","CJEDAFIK","HEFCADLK",
"HJFCADLE","HJECAFDK","HEFCADLI","HEFCADIK","HJECAFDI","CGEDAFLK","CGJDAFLE","CGJDAFEK","CGEDAFLI","CGEDAFIK",
"CGJDAFEI","HGFCADLE","HGECAFDK","HGJCAFDE","HGECAFDI","HJBAIGLK","HJBAIFLK","IJBFAGLK","HJBFAGLK","HGBAIFLK",
"HJBFAGLI","HJBFAGIK","EJBAIHLK","EJBAIGLK","EJBAHGLK","EGBAIHLK","EJBAHGLI","EJBAHGIK","EJBAIFLK","EJBFAHLK",
"EIBFAHLK","EJBFAHLI","EJBFAHIK","EJBFAGLK","EGBAIFLK","EJBFAGLI","EJBFAGIK","EGBFAHLK","HJBFAGLE","HJBFAGEK",
"EGBFAHLI","EGBFAHIK","HJBFAGEI","IJBDAHLK","IJBDAGLK","HJBDAGLK","IGBDAHLK","HJBDAGLI","HJBDAGIK","IJBDAFLK",
"HJBDAFLK","HIBDAFLK","HJBDAFLI","HJBDAFIK","FJBDAGLK","IGBDAFLK","FJBDAGLI","FJBDAGIK","HGBDAFLK","HGBDAFLJ",
"HGBDAFJK","HGBDAFLI","HGBDAFIK","HGBDAFIJ","EJBAIDLK","EJBDAHLK","EIBDAHLK","EJBDAHLI","EJBDAHIK","EJBDAGLK",
"EGBAIDLK","EJBDAGLI","EJBDAGIK","EGBDAHLK","HJBDAGLE","HJBDAGEK","EGBDAHLI","EGBDAHIK","HJBDAGEI","EJBDAFLK",
"EIBDAFLK","EJBDAFLI","EJBDAFIK","HEBDAFLK","HJBDAFLE","HJBDAFEK","HEBDAFLI","HEBDAFIK","HJBDAFEI","EGBDAFLK",
"EGBDAFLJ","EGBDAFJK","EGBDAFLI","EGBDAFIK","EGBDAFIJ","HGBDAFLE","HGBDAFEK","HGBDAFEJ","HGBDAFEI","IJBCAHLK",
"IJBCAGLK","HJBCAGLK","IGBCAHLK","HJBCAGLI","HJBCAGIK","IJBCAFLK","HJBCAFLK","HIBCAFLK","HJBCAFLI","HJBCAFIK",
"CJBFAGLK","IGBCAFLK","CJBFAGLI","CJBFAGIK","HGBCAFLK","HGBCAFLJ","HGBCAFJK","HGBCAFLI","HGBCAFIK","HGBCAFIJ",
"EJBAICLK","EJBCAHLK","EIBCAHLK","EJBCAHLI","EJBCAHIK","EJBCAGLK","EGBAICLK","EJBCAGLI","EJBCAGIK","EGBCAHLK",
"HJBCAGLE","HJBCAGEK","EGBCAHLI","EGBCAHIK","HJBCAGEI","EJBCAFLK","EIBCAFLK","EJBCAFLI","EJBCAFIK","HEBCAFLK",
"HJBCAFLE","HJBCAFEK","HEBCAFLI","HEBCAFIK","HJBCAFEI","EGBCAFLK","EGBCAFLJ","EGBCAFJK","EGBCAFLI","EGBCAFIK",
"EGBCAFIJ","HGBCAFLE","HGBCAFEK","HGBCAFEJ","HGBCAFEI","IJBCADLK","HJBCADLK","HIBCADLK","HJBCADLI","HJBCADIK",
"CJBDAGLK","IGBCADLK","CJBDAGLI","CJBDAGIK","HGBCADLK","HGBCADLJ","HGBCADJK","HGBCADLI","HGBCADIK","HGBCADIJ",
"CJBDAFLK","CIBDAFLK","CJBDAFLI","CJBDAFIK","HFBCADLK","CJBDAFLH","HJBCAFDK","HFBCADLI","HFBCADIK","HJBCAFDI",
"CGBDAFLK","CGBDAFLJ","CGBDAFJK","CGBDAFLI","CGBDAFIK","CGBDAFIJ","CGBDAFLH","HGBCAFDK","HGBCAFDJ","HGBCAFDI",
"EJBCADLK","EIBCADLK","EJBCADLI","EJBCADIK","HEBCADLK","HJBCADLE","HJBCADEK","HEBCADLI","HEBCADIK","HJBCADEI",
"EGBCADLK","EGBCADLJ","EGBCADJK","EGBCADLI","EGBCADIK","EGBCADIJ","HGBCADLE","HGBCADEK","HGBCADEJ","HGBCADEI",
"CEBDAFLK","CJBDAFLE","CJBDAFEK","CEBDAFLI","CEBDAFIK","CJBDAFEI","HFBCADLE","HEBCAFDK","HJBCAFDE","HEBCAFDI",
"CGBDAFLE","CGBDAFEK","CGBDAFEJ","CGBDAFEI","HGBCAFDE"
];
const ANNEX_C={};
ANNEX_C_RAW.forEach(s=>{
  const key=s.split("").sort().join("");
  const m={};
  for(let i=0;i<8;i++) m[ANNEX_C_COLS[i]]=s[i];
  ANNEX_C[key]=m;
});

// Classement EN COURS des 12 troisièmes (art. 13), toujours calculé (provisoire).
function bestThirds(){
  const thirds=[];
  Object.keys(GROUPS).forEach(g=>{
    const rows=computeGroup(g);
    thirds.push({...rows[2],g});
  });
  thirds.sort((x,y)=>y.pts-x.pts||y.diff-x.diff||y.bp-x.bp||y.G-x.G);
  return thirds;
}
function groupsAllComplete(){
  return Object.keys(GROUPS).every(g=>computeGroup(g).every(r=>r.J===3));
}
// Affectations colonne→équipe (3e) via l'Annexe C, recalculées à chaque appel.
function thirdPlaceMapping(){
  const thirds=bestThirds();
  const top8=thirds.slice(0,8);
  const key=top8.map(x=>x.g).sort().join("");
  const m=ANNEX_C[key]; if(!m) return null;
  const thirdTeam={};
  Object.keys(GROUPS).forEach(g=>{ thirdTeam[g]=computeGroup(g)[2].t; });
  const out={};
  Object.keys(m).forEach(col=>{ out[col]=thirdTeam[m[col]]||""; });
  return out;
}
function thirdHintText(){
  const top8=bestThirds().slice(0,8).map(x=>x.g).sort();
  const key=top8.join("");
  if(!ANNEX_C[key]) return "Combinaison de 3es non reconnue.";
  const opt=ANNEX_C_RAW.findIndex(s=>s.split("").sort().join("")===key)+1;
  const tag=groupsAllComplete()?"définitive":"provisoire (classements en cours)";
  return `Affectation ${tag} des meilleurs 3es : groupes ${top8.join(", ")} — Annexe C n°${opt}/495, recalculée à chaque résultat.`;
}

// Origine d'une équipe pour une case de 16e : place directe (1I, 2A) ou meilleur 3e (3X via Annexe C).
// VISUEL uniquement — jamais inclus dans l'export .ics.
function originLabel(slot){
  if(/^[12][A-L]$/.test(slot)) return slot;
  if(slot.startsWith("T:")){
    const col=THIRD_POOL_COL[slot];
    const top8=bestThirds().slice(0,8).map(x=>x.g).sort().join("");
    const m=ANNEX_C[top8];
    const g=(m&&col)?m[col]:"";
    return g?("3"+g):"3e";
  }
  return "";
}
function koResolved(){
  const direct=seedDirect();
  const thirdMap=thirdPlaceMapping();
  const res={};
  function nameFor(slot){
    if(/^[12][A-L]$/.test(slot)) return direct[slot]||"";
    if(slot[0]==="V"){ const wid=+slot.slice(1); return res[wid] ? res[wid].win : ""; }
    if(slot[0]==="P"){ const wid=+slot.slice(1); return res[wid] ? res[wid].lose : ""; }
    if(slot.startsWith("T:")){ const col=THIRD_POOL_COL[slot]; return (thirdMap&&col)?(thirdMap[col]||""):""; }
    return "";
  }
  KO.forEach(k=>{
    const st=state.ko[k.id]||{};
    const autoH=nameFor(k.sh), autoA=nameFor(k.sa);
    const h = (st.h&&st.h.trim())?st.h.trim() : autoH;
    const a = (st.a&&st.a.trim())?st.a.trim() : autoA;
    let win="",lose="";
    const hs=st.hs, as=st.as;
    if(hs!==undefined&&hs!==""&&as!==undefined&&as!==""){
      if(+hs>+as){win=h;lose=a;} else if(+as>+hs){win=a;lose=h;}
      else if(st.pen==="h"){win=h;lose=a;} else if(st.pen==="a"){win=a;lose=h;}
    }
    res[k.id]={h,a,win,lose,hs,as};
  });
  return res;
}
function renderKO(){
  const res=koResolved();
  const wrap=$("#koBody"); wrap.innerHTML="";
  const order=["16e","8e","4e","Demi","3e place","Finale"];
  order.forEach(rd=>{
    const ties=KO.filter(k=>k.r===rd);
    const sec=document.createElement("div"); sec.className="kround";
    sec.innerHTML=`<h2>${ROUND_LABEL[rd]} <span class="n">${ties.length} match${ties.length>1?'s':''}</span></h2><div class="kgrid"></div>`;
    const grid=sec.querySelector(".kgrid");
    ties.forEach(k=>{
      const r=res[k.id], st=state.ko[k.id]||{};
      const f=fmtDay(viewDate(k.d,k.t));
      const phH=slotHint(k.sh), phA=slotHint(k.sa);
      const hWin=r.win&&r.win===r.h, aWin=r.win&&r.win===r.a;
      const origH=(k.r==="16e"&&r.h)?originLabel(k.sh):"";
      const origA=(k.r==="16e"&&r.a)?originLabel(k.sa):"";
      const tie=document.createElement("div"); tie.className="ktie";
      tie.innerHTML=`
        <div class="kh"><span>Match ${k.id}</span><span class="mono">${f.dow.slice(0,3)}. ${f.date} · ${k.t}</span></div>
        <div class="kteam ${hWin?'win':''}${origH?' has-orig':''}">
          ${origH?`<span class="korig" title="Origine en 16e">${origH}</span>`:''}
          <input type="text" placeholder="${phH}" value="${(st.h&&st.h.trim())?st.h.replace(/"/g,'&quot;'):(r.h||'')}" data-ko="${k.id}" data-k="h">
          <input class="ksc mono" type="number" min="0" placeholder="" value="${st.hs??''}" data-ko="${k.id}" data-k="hs">
        </div>
        <div class="kteam ${aWin?'win':''}${origA?' has-orig':''}">
          ${origA?`<span class="korig" title="Origine en 16e">${origA}</span>`:''}
          <input type="text" placeholder="${phA}" value="${(st.a&&st.a.trim())?st.a.replace(/"/g,'&quot;'):(r.a||'')}" data-ko="${k.id}" data-k="a">
          <input class="ksc mono" type="number" min="0" placeholder="" value="${st.as??''}" data-ko="${k.id}" data-k="as">
        </div>
        <div class="kpen">tirs au but :
          <select data-ko="${k.id}" data-k="pen">
            <option value="" ${!st.pen?'selected':''}>—</option>
            <option value="h" ${st.pen==='h'?'selected':''}>${r.h||'dom.'}</option>
            <option value="a" ${st.pen==='a'?'selected':''}>${r.a||'ext.'}</option>
          </select>
        </div>
        <div class="mmeta" style="margin-top:8px">📍 ${k.v}</div>`;
      grid.appendChild(tie);
    });
    wrap.appendChild(sec);
  });
  const hint=$("#thirdHint"); if(hint) hint.textContent=thirdHintText();
  renderTableau(); // garde la vue Tableau synchronisée en permanence avec la Liste
}
function slotHint(slot){
  if(/^[12][A-L]$/.test(slot)) return (slot[0]==="1"?"1er gr. ":"2e gr. ")+slot[1];
  if(slot[0]==="V") return "Vainqueur M"+slot.slice(1);
  if(slot[0]==="P") return "Perdant M"+slot.slice(1);
  if(slot.startsWith("T:")) return "3e parmi "+slot.slice(2).split("").join(" ");
  return slot;
}

/* ============ BRACKET / VUE TABLEAU ============ */
// Arbre du tableau final déduit des art. 12.6–12.11.
const BRACKET={
  left:{ r32:[74,77,73,75,83,84,81,82], r16:[89,90,93,94], qf:[97,98], sf:[101] },
  right:{ r32:[76,78,79,80,86,88,85,87], r16:[91,92,95,96], qf:[99,100], sf:[102] },
  center:[104,103]
};
const RD_SHORT={"16e":"16e","8e":"8e","4e":"Quart","Demi":"Demi","Finale":"Finale","3e place":"3e place"};
function bmFlag(name,isPh){
  if(isPh||!name) return "";
  const c=(TEAMS[name]||["",""])[0];
  return c?`<img class="flag" style="width:16px" src="https://flagcdn.com/h20/${c}.png" alt="" loading="lazy" onerror="this.style.display='none'">`:"";
}
function renderTableau(){
  const wrap=$("#koTableau"); if(!wrap) return;
  const res=koResolved();
  const box=id=>{
    const k=KO.find(x=>x.id===id); const r=res[id]||{};
    const hPh=!r.h, aPh=!r.a;
    const hName=r.h||slotHint(k.sh), aName=r.a||slotHint(k.sa);
    const hDisp=hPh?hName:(TEAMS[r.h]?short(r.h):r.h);
    const aDisp=aPh?aName:(TEAMS[r.a]?short(r.a):r.a);
    const hWin=r.win&&r.win===r.h, aWin=r.win&&r.win===r.a;
    const sc=v=>(v===undefined||v==="")?"":v;
    const oH=(k.r==="16e"&&!hPh)?originLabel(k.sh):"";
    const oA=(k.r==="16e"&&!aPh)?originLabel(k.sa):"";
    return `<div class="bm ${k.r==='Finale'?'bm-final':''}">
      <div class="bm-hdr"><span>M${id}</span><span>${RD_SHORT[k.r]}</span></div>
      <div class="bm-team ${hWin?'win':''}">${bmFlag(r.h,hPh)}<span class="bm-name ${hPh?'ph':''}">${hDisp}</span>${oH?`<span class="bm-orig">${oH}</span>`:''}<span class="bm-sc">${sc(r.hs)}</span></div>
      <div class="bm-team ${aWin?'win':''}">${bmFlag(r.a,aPh)}<span class="bm-name ${aPh?'ph':''}">${aDisp}</span>${oA?`<span class="bm-orig">${oA}</span>`:''}<span class="bm-sc">${sc(r.as)}</span></div>
    </div>`;
  };
  const col=(ids,cls)=>`<div class="b-col ${cls||''}">${ids.map(box).join("")}</div>`;
  wrap.innerHTML=`<div class="bracket-wrap"><div class="bracket">
    ${col(BRACKET.left.r32)}${col(BRACKET.left.r16)}${col(BRACKET.left.qf)}${col(BRACKET.left.sf)}
    ${col(BRACKET.center,'b-ctr')}
    ${col(BRACKET.right.sf)}${col(BRACKET.right.qf)}${col(BRACKET.right.r16)}${col(BRACKET.right.r32)}
  </div></div>`;
}

/* ============ EXPORT .ICS PHASE FINALE (Google Agenda) ============ */
// Même format que le calendrier de poules : VEVENT en UTC (heure de Paris − 2 h, CEST),
// équipes remplies en direct via koResolved(), libellés de slot sinon.
function isoToFlag(code){
  if(code==="gb-sct") return "🏴\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}";
  if(code==="gb-eng") return "🏴\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}";
  if(code==="gb-wls") return "🏴\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}";
  if(!/^[a-z]{2}$/.test(code||"")) return "";
  return String.fromCodePoint(...[...code.toUpperCase()].map(c=>0x1F1E6+c.charCodeAt(0)-65));
}
function buildKoIcs(){
  const res=koResolved();
  const p=n=>String(n).padStart(2,"0");
  const fmt=dt=>`${dt.getUTCFullYear()}${p(dt.getUTCMonth()+1)}${p(dt.getUTCDate())}T${p(dt.getUTCHours())}${p(dt.getUTCMinutes())}${p(dt.getUTCSeconds())}Z`;
  const stamp=fmt(new Date());
  const esc=s=>String(s).replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\n/g,"\\n");
  const out=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//CdM 2026//Phase finale//FR",
    "CALSCALE:GREGORIAN","METHOD:PUBLISH",
    "X-WR-CALNAME:Coupe du Monde 2026 - Phase finale","X-WR-TIMEZONE:Europe/Paris"];
  KO.forEach(k=>{
    const [Y,Mo,D]=k.d.split("-").map(Number), [h,mi]=k.t.split(":").map(Number);
    const start=new Date(Date.UTC(Y,Mo-1,D,h-2,mi,0)); // Paris CEST = UTC+2
    const end=new Date(start.getTime()+2*3600*1000);
    const r=res[k.id]||{};
    const hName=r.h||slotHint(k.sh), aName=r.a||slotHint(k.sa);
    const hF=(r.h&&TEAMS[r.h])?isoToFlag(TEAMS[r.h][0])+" ":"";
    const aF=(r.a&&TEAMS[r.a])?" "+isoToFlag(TEAMS[r.a][0]):"";
    out.push("BEGIN:VEVENT",
      `UID:cdm2026-ko-${k.id}@worldcup`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:${esc(`${hF}${hName} - ${aName}${aF}`)}`,
      `LOCATION:${esc(k.v)}`,
      `DESCRIPTION:${esc(`Coupe du Monde 2026\nPhase finale - ${ROUND_LABEL[k.r]} (Match ${k.id})\n${k.v}`)}`,
      `CATEGORIES:${esc(ROUND_LABEL[k.r])}`,
      "END:VEVENT");
  });
  out.push("END:VCALENDAR");
  return out.join("\r\n")+"\r\n";
}
function exportKoIcs(){
  const blob=new Blob([buildKoIcs()],{type:"text/calendar;charset=utf-8"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob);
  a.download="coupe_du_monde_2026_phase_finale.ics"; a.click(); URL.revokeObjectURL(a.href);
  toast("Calendrier phase finale (.ics) exporté");
}

/* ============ AUTO-PUSH GIST GITHUB (abonnement Google Agenda) ============ */
// Le token reste local (localStorage de ce navigateur) — jamais inclus dans l'export JSON.
const GIST_KEY="cdm2026_gist_cfg_v1";
const GIST_FILE="coupe_du_monde_2026_phase_finale.ics";
const GIST_DATA_FILE="cdm2026_data.json"; // état complet (résultats, scores, KO, notes) — partagé entre PC
function gistCfg(){ try{return JSON.parse(localStorage.getItem(GIST_KEY))||{};}catch(e){return {};} }
function gistSave(c){ try{localStorage.setItem(GIST_KEY,JSON.stringify(c));}catch(e){} }
// URL « raw » (toujours la dernière version) du fichier de données — lisible sans token, même pour un Gist secret.
function gistDataRawUrl(c){ c=c||gistCfg(); return (c.id&&c.login)?`https://gist.githubusercontent.com/${c.login}/${c.id}/raw/${GIST_DATA_FILE}`:""; }
// Lien de consultation à partager (lecture seule, aucun token requis chez le lecteur).
// Si PUBLIC_DATA_URL est renseignée, le lien = simplement l'adresse du site (court).
function gistViewLink(c){
  const base=`${location.origin}${location.pathname}`;
  if(PUBLIC_DATA_URL) return base;
  const u=gistDataRawUrl(c);
  return u?`${base}?view&data=${encodeURIComponent(u)}`:"";
}
async function gistPush(){
  const c=gistCfg();
  if(!c.token) return {ok:false,msg:"colle d'abord ton token GitHub"};
  const ics=buildKoIcs();
  const now=Date.now();
  const data=JSON.stringify({res:state.res,sco:state.sco,ko:state.ko,notes:state.notes,_savedAt:now},null,2);
  const files={[GIST_FILE]:{content:ics},[GIST_DATA_FILE]:{content:data}};
  const hdr={Authorization:"Bearer "+c.token,Accept:"application/vnd.github+json","Content-Type":"application/json"};
  try{
    const res = c.id
      ? await fetch("https://api.github.com/gists/"+c.id,{method:"PATCH",headers:hdr,body:JSON.stringify({files})})
      : await fetch("https://api.github.com/gists",{method:"POST",headers:hdr,body:JSON.stringify({description:"Coupe du Monde 2026 — Sam Payne (auto)",public:false,files})});
    if(!res.ok){
      if(res.status===404 && c.id){ delete c.id; gistSave(c); return {ok:false,msg:"Gist introuvable — recrée-le (clique encore)"}; }
      return {ok:false,msg:"GitHub a répondu "+res.status+(res.status===401?" (token invalide ou sans scope « gist »)":"")};
    }
    const d=await res.json();
    c.id=d.id; c.login=(d.owner&&d.owner.login)||c.login;
    c.url=`https://gist.githubusercontent.com/${c.login}/${c.id}/raw/${GIST_FILE}`;
    gistSave(c);
    try{ localStorage.setItem(SYNC_KEY, String(now)); }catch(e){} // notre local est désormais à jour avec le Gist
    return {ok:true,url:c.url,viewLink:gistViewLink(c)};
  }catch(e){ return {ok:false,msg:"réseau/CORS bloqué ("+e.message+")"}; }
}
// Retrouve, à partir du seul token, le Gist déjà créé (utile sur un 2e PC) et mémorise son id/login.
async function gistDiscover(){
  const c=gistCfg(); if(!c.token || c.id) return;
  try{
    const res=await fetch("https://api.github.com/gists?per_page=100",{headers:{Authorization:"Bearer "+c.token,Accept:"application/vnd.github+json"}});
    if(!res.ok) return;
    const g=(await res.json()).find(x=>x.files && (x.files[GIST_DATA_FILE]||x.files[GIST_FILE]));
    if(g){ c.id=g.id; c.login=(g.owner&&g.owner.login)||c.login;
      c.url=`https://gist.githubusercontent.com/${c.login}/${c.id}/raw/${GIST_FILE}`; gistSave(c); }
  }catch(e){}
}
// Récupère les données du Gist. rawUrl fourni → mode lecteur ; sinon, côté propriétaire, on lit via l'API (sans cache).
async function gistPull(rawUrl){
  const c=gistCfg();
  try{
    let o;
    if(!rawUrl && c.token && c.id){
      const res=await fetch("https://api.github.com/gists/"+c.id,{headers:{Authorization:"Bearer "+c.token,Accept:"application/vnd.github+json"}});
      if(!res.ok) return {ok:false,msg:"HTTP "+res.status};
      const g=await res.json();
      const f=g.files&&g.files[GIST_DATA_FILE];
      if(!f) return {ok:false,msg:"aucune donnée dans le Gist"};
      o=JSON.parse(f.truncated ? await (await fetch(f.raw_url)).text() : f.content);
    }else{
      const url=rawUrl || gistDataRawUrl(c);
      if(!url) return {ok:false,msg:"pas de Gist configuré"};
      const res=await fetch(url, {cache:"no-store"});
      if(!res.ok) return {ok:false,msg:"HTTP "+res.status};
      o=JSON.parse(await res.text());
    }
    return {ok:true,data:o};
  }catch(e){ return {ok:false,msg:e.message}; }
}
let gistT=null;
function scheduleGistPush(){
  const c=gistCfg(); if(!c.token||!c.auto||!c.id) return; // n'auto-push qu'après une 1re publication réussie
  clearTimeout(gistT);
  gistT=setTimeout(()=>{ gistPush().then(r=>{ const s=$("#gistStatus"); if(s) s.textContent=r.ok?("✓ publié auto · "+new Date().toLocaleTimeString("fr-FR")):("✗ auto : "+r.msg); }); },4000);
}

/* ============ RATINGS ============ */
// Background rgba and accent text color for each note 1-10 (index = note value)
const RCFG = [
  null,
  {bg:'rgba(140,25,25,.40)',  txt:'#e57070', btn:'#7b1515'}, // 1
  {bg:'rgba(175,45,25,.40)',  txt:'#f08060', btn:'#a82a15'}, // 2
  {bg:'rgba(200,100,20,.40)', txt:'#f0a040', btn:'#b85515'}, // 3
  {bg:'rgba(190,145,15,.40)', txt:'#f0c030', btn:'#b08510'}, // 4
  {bg:'rgba(155,155,15,.40)', txt:'#e0e040', btn:'#909010'}, // 5
  {bg:'rgba(90,150,15,.40)',  txt:'#b0e040', btn:'#557010'}, // 6
  {bg:'rgba(25,135,65,.40)',  txt:'#40e090', btn:'#156840'}, // 7
  {bg:'rgba(15,160,100,.40)', txt:'#39d27f', btn:'#0f7a50'}, // 8
  {bg:'rgba(10,185,115,.40)', txt:'#20e890', btn:'#0a9060'}, // 9
  {bg:'rgba(185,145,10,.40)', txt:'#f3c14b', btn:'#9a7a10'}, // 10 gold
];

function ratingRow(id){
  const n=state.notes[id];
  const btns=[1,2,3,4,5,6,7,8,9,10].map(v=>{
    const on=n===v;
    const s=on?` style="background:${RCFG[v].btn};border-color:${RCFG[v].btn}"`:'';
    return `<button class="rb${on?' on':''}"${s} data-note="${id}" data-v="${v}">${v}</button>`;
  }).join('');
  return `<div class="mrating"><span class="rl">Note</span>${btns}${n!=null?`<button class="rclr" data-noteclr="${id}" title="Effacer la note">×</button>`:''}</div>`;
}

/* ============ MOOD CALENDAR (vue mensuelle) ============ */
let MOOD_DAY_DATA={}; // iso → [matchs du jour triés] (pour la popup)
function renderMoodCalendar(){
  const wrap=$("#moodBody"); if(!wrap) return;
  const sub=$("#notesSub"), leg=$("#moodLegend");
  wrap.innerHTML="";

  const noted=Object.keys(state.notes).filter(k=>state.notes[k]!=null).length;
  if(sub) sub.textContent=`${noted} match${noted!==1?'s':''} noté${noted!==1?'s':''} sur 72 · note moyenne : ${noted?( (Object.values(state.notes).filter(v=>v!=null).reduce((a,b)=>a+b,0)/noted).toFixed(1) ):'—'} · survole un jour pour le détail`;

  if(leg){
    leg.innerHTML='<span>1</span>'
      +RCFG.slice(1).map((c,i)=>`<span class="ml-swatch" style="background:${c.btn}" title="${i+1}/10"></span>`).join('')
      +'<span>10</span>';
  }

  // Regrouper les matchs par jour de visionnage (les <10h comptent pour la veille)
  const byDay={};
  MATCHES.forEach(m=>{const vd=viewDate(m.d,m.t);(byDay[vd]=byDay[vd]||[]).push(m);});
  Object.keys(byDay).forEach(k=>byDay[k].sort((a,b)=>effMin(a.t)-effMin(b.t)));
  MOOD_DAY_DATA=byDay;

  const today=todayParisView();
  // Mois présents dans le calendrier
  const months=[]; const seen={};
  Object.keys(byDay).sort().forEach(d=>{const[y,mo]=d.split("-"); const key=y+"-"+mo; if(!seen[key]){seen[key]=1; months.push([+y,+mo]);}});

  const DOW=["lun","mar","mer","jeu","ven","sam","dim"];
  const cont=document.createElement("div"); cont.className="mood-months";
  months.forEach(([y,mo])=>{
    const daysInMonth=new Date(y,mo,0).getDate();
    const startDow=(new Date(y,mo-1,1).getDay()+6)%7; // lundi = 0
    let cells=DOW.map(d=>`<div class="mcal-dow">${d}</div>`).join('');
    for(let i=0;i<startDow;i++) cells+=`<div class="mday blank"></div>`;
    for(let dn=1;dn<=daysInMonth;dn++){
      const iso=`${y}-${String(mo).padStart(2,'0')}-${String(dn).padStart(2,'0')}`;
      const ms=byDay[iso];
      if(!ms){ cells+=`<div class="mday"><span class="md-n">${dn}</span></div>`; continue; }
      const notes=ms.map(m=>state.notes[m.id]).filter(v=>v!=null);
      const avg=notes.length?(notes.reduce((a,b)=>a+b,0)/notes.length):null;
      const avgC=avg!=null?RCFG[Math.max(1,Math.round(avg))]:null;
      const dots=ms.map(m=>{const n=state.notes[m.id]; const c=n!=null?RCFG[n].btn:'rgba(255,255,255,.13)'; return `<span class="md-dot" style="background:${c}"></span>`;}).join('');
      const isT=iso===today;
      cells+=`<div class="mday has${isT?' today-m':''}" data-iso="${iso}">
        <span class="md-n">${dn}</span>
        ${avg!=null?`<span class="md-avg" style="color:${avgC.txt}">${avg.toFixed(1)}</span>`:`<span class="md-avg" style="color:var(--faint);font-size:13px">–</span>`}
        <span class="md-cnt">${ms.length} match${ms.length>1?'s':''}</span>
        <div class="md-dots">${dots}</div>
      </div>`;
    }
    const mdiv=document.createElement("div"); mdiv.className="mood-month";
    mdiv.innerHTML=`<div class="mood-month-hd">${MONTHS_FULL[mo-1]} ${y}</div><div class="mood-cal">${cells}</div>`;
    cont.appendChild(mdiv);
  });
  wrap.appendChild(cont);
}
function showMoodPop(cell){
  const pop=$("#moodPop"); if(!pop) return;
  const ms=MOOD_DAY_DATA[cell.dataset.iso]; if(!ms) return;
  const f=fmtDay(cell.dataset.iso);
  const rows=ms.map(m=>{
    const r=state.res[m.id], n=state.notes[m.id];
    const c=n!=null?RCFG[n]:null;
    const done=r&&r.h!==""&&r.a!=="";
    const sc=done?`${r.h}–${r.a}`:'–';
    return `<div class="mp-m">
      <span class="mp-teams">${flag(m.h)} ${short(m.h)} <span style="color:var(--faint)">v</span> ${short(m.a)} ${flag(m.a)}</span>
      <span class="mp-sc">${sc}</span>
      <span class="mp-note" style="color:${c?c.txt:'var(--faint)'}">${n!=null?n:'·'}</span>
    </div>`;
  }).join('');
  pop.innerHTML=`<div class="mood-pop-hd">${f.dow} ${f.date} · ${ms.length} match${ms.length>1?'s':''}</div>${rows}`;
  pop.classList.add("show");
  pop.style.left="0px"; pop.style.top="0px";
  const rect=cell.getBoundingClientRect(), pw=pop.offsetWidth, ph=pop.offsetHeight;
  let left=rect.left, top=rect.bottom+8;
  if(left+pw>window.innerWidth-12) left=Math.max(12,window.innerWidth-pw-12);
  if(top+ph>window.innerHeight-12) top=Math.max(12,rect.top-ph-8);
  pop.style.left=left+"px"; pop.style.top=top+"px";
}
function hideMoodPop(){ const pop=$("#moodPop"); if(pop) pop.classList.remove("show"); }

/* ============ FILE SYSTEM EXPORTS ============ */
// Rotating timestamped saves in ./CDM/exports — max 3 files, most recent loads on page open.
// Uses File System Access API + IndexedDB to persist the directory handle across reloads.

const _FS_IDB = "cdm2026_payne_fs_v1";

function _fsDb(){
  return new Promise((res,rej)=>{
    const r=indexedDB.open(_FS_IDB,1);
    r.onupgradeneeded=e=>e.target.result.createObjectStore("kv");
    r.onsuccess=e=>res(e.target.result);
    r.onerror=()=>rej(r.error);
  });
}
async function _fsGet(key){
  const db=await _fsDb();
  return new Promise((res,rej)=>{
    const req=db.transaction("kv","readonly").objectStore("kv").get(key);
    req.onsuccess=()=>{res(req.result);db.close();};
    req.onerror=()=>rej(req.error);
  });
}
async function _fsSet(key,val){
  const db=await _fsDb();
  return new Promise((res,rej)=>{
    const tx=db.transaction("kv","readwrite");
    tx.objectStore("kv").put(val,key);
    tx.oncomplete=()=>{res();db.close();};
    tx.onerror=()=>rej(tx.error);
  });
}

// Requires user gesture — prompts for dir if handle is missing or permission lapsed.
async function _getOrPickDir(){
  if(!window.showDirectoryPicker) return null;
  try{
    const h=await _fsGet("dir");
    if(h){
      if(await h.queryPermission({mode:"readwrite"})==="granted") return h;
      if(await h.requestPermission({mode:"readwrite"})==="granted") return h;
    }
  }catch(e){}
  try{
    const dir=await window.showDirectoryPicker({id:"cdm2026exports",mode:"readwrite"});
    await _fsSet("dir",dir);
    return dir;
  }catch(e){return null;}
}

// Silent — no user gesture needed. Used on page load.
async function _getDirSilent(){
  if(!window.showDirectoryPicker) return null;
  try{
    const h=await _fsGet("dir"); if(!h) return null;
    return await h.queryPermission({mode:"readonly"})==="granted" ? h : null;
  }catch(e){return null;}
}

const _FILE_RE=/^mondial-2026-payne_[\dT-]+\.json$/;

async function _listExports(dir){
  const files=[];
  for await(const [name,handle] of dir.entries()){
    if(_FILE_RE.test(name)) files.push({name,handle});
  }
  return files.sort((a,b)=>a.name.localeCompare(b.name)); // oldest first
}

async function exportToDir(){
  const dir=await _getOrPickDir(); if(!dir) return false;
  const files=await _listExports(dir);
  // rotate: delete oldest until below limit
  while(files.length>=3) await dir.removeEntry(files.shift().name);
  const ts=new Date().toISOString().slice(0,19).replace(/:/g,"-");
  const fname=`mondial-2026-payne_${ts}.json`;
  const fh=await dir.getFileHandle(fname,{create:true});
  const wr=await fh.createWritable();
  await wr.write(JSON.stringify(state,null,2));
  await wr.close();
  toast(`Exporté → exports/${fname}`);
  return true;
}

async function loadLatestExport(){
  const dir=await _getDirSilent(); if(!dir) return false;
  try{
    const files=await _listExports(dir); if(!files.length) return false;
    const latest=files[files.length-1];
    const text=await(await latest.handle.getFile()).text();
    const o=JSON.parse(text);
    state={res:o.res||{},sco:o.sco||{},ko:o.ko||{},notes:o.notes||{}};
    saveState();
    toast(`Chargé : ${latest.name}`);
    return true;
  }catch(e){return false;}
}

/* ============ PROGRESS ============ */
function renderProgress(){
  let n=0; MATCHES.forEach(m=>{const r=state.res[m.id]; if(r&&r.h!==""&&r.a!=="") n++;});
  $("#pgN").textContent=n; $("#pgFill").style.width=(n/72*100)+"%";
}
function renderAll(){ renderCal(); renderStandings(); renderScorersLB(); renderKO(); renderMoodCalendar(); renderProgress(); }

/* ============ EVENTS ============ */
function bind(){
  $("#tabs").addEventListener("click",e=>{const b=e.target.closest(".tab"); if(!b) return;
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("on")); b.classList.add("on");
    document.querySelectorAll(".panel").forEach(p=>p.classList.remove("on"));
    $("#p-"+b.dataset.p).classList.add("on"); hideMoodPop();
    // Rafraîchit le panneau ouvert pour qu'il reflète l'état courant (calendrier ↔ phase finale)
    const p=b.dataset.p;
    if(p==="cal") renderCal();
    else if(p==="ko") renderKO();
    else if(p==="stand") renderStandings();
    else if(p==="sco") renderScorersLB();
    else if(p==="notes") renderMoodCalendar();});
  $("#filtState").addEventListener("click",e=>{const b=e.target.closest("button"); if(!b) return;
    $("#filtState").querySelectorAll("button").forEach(x=>x.classList.remove("on")); b.classList.add("on");
    filt.state=b.dataset.f; renderCal();});
  $("#filtPhase").addEventListener("click",e=>{const b=e.target.closest("button"); if(!b) return;
    $("#filtPhase").querySelectorAll("button").forEach(x=>x.classList.remove("on")); b.classList.add("on");
    filt.phase=b.dataset.ph; renderCal();});
  $("#filtGroup").addEventListener("change",e=>{filt.group=e.target.value; renderCal();});
  $("#filtTeam").addEventListener("input",e=>{filt.team=e.target.value; renderCal();});
  $("#calBody").addEventListener("input",e=>{
    if(READ_ONLY) return;
    const sc=e.target.closest("input[data-id]");
    if(sc){const id=+sc.dataset.id,s=sc.dataset.s;
      state.res[id]=state.res[id]||{h:"",a:""}; state.res[id][s]=sc.value;
      saveState();
      renderStandings(); renderScorersLB(); renderProgress(); renderKO();
      refreshCardState(id);
      return;}
    const ko=e.target.closest("input[data-koid]");
    if(ko){const id=+ko.dataset.koid,s=ko.dataset.s;
      state.ko[id]=state.ko[id]||{}; state.ko[id][s]=ko.value;
      saveState(); renderKO(); // maj live du tableau ; le calendrier se rafraîchit au blur (change)
      return;}
    const g=e.target.closest("[data-sc]");
    if(g){const id=+g.dataset.sc,i=+g.dataset.i,k=g.dataset.k;
      state.sco[id]=state.sco[id]||[];
      if(!state.sco[id][i]) state.sco[id][i]={n:"",t:"h",g:1};
      state.sco[id][i][k]= k==="g" ? (+g.value||1) : g.value;
      saveState(); renderScorersLB();
      return;}
  });
  $("#calBody").addEventListener("change",e=>{
    if(READ_ONLY) return;
    const g=e.target.closest("select[data-sc]");
    if(g){const id=+g.dataset.sc,i=+g.dataset.i;
      state.sco[id]=state.sco[id]||[]; if(!state.sco[id][i]) state.sco[id][i]={n:"",t:"h",g:1};
      state.sco[id][i].t=g.value; saveState(); renderScorersLB(); return;}
    const kp=e.target.closest("select[data-kopen]");
    if(kp){const id=+kp.dataset.kopen;
      state.ko[id]=state.ko[id]||{}; state.ko[id].pen=kp.value;
      saveState(); renderKO(); renderCal(); return;}
    // Au blur d'un score (KO ou poule), on rejoue le calendrier pour propager les vainqueurs/équipes des tours suivants
    if(e.target.closest("input[data-koid]")||e.target.closest("input[data-id]")){ renderCal(); return;}
  });
  $("#calBody").addEventListener("click",e=>{
    const ex=e.target.closest("[data-exp]");
    if(ex){const id=+ex.dataset.exp; const box=$("#sco-"+id);
      if(box.classList.contains("open")){box.classList.remove("open");}
      else{renderScorersEditor(id); box.classList.add("open");}
      return;}
    if(READ_ONLY) return;
    const add=e.target.closest("[data-add]");
    if(add){const id=+add.dataset.add; state.sco[id]=state.sco[id]||[];
      state.sco[id].push({n:"",t:"h",g:1}); saveState(); renderScorersEditor(id);
      const ex=$('[data-exp="'+id+'"]'); if(ex) ex.classList.add("has");
      return;}
    const rm=e.target.closest("[data-rm]");
    if(rm){const id=+rm.dataset.rm,i=+rm.dataset.i; state.sco[id].splice(i,1);
      if(!state.sco[id].length){const ex=$('[data-exp="'+id+'"]'); if(ex) ex.classList.remove("has");}
      saveState(); renderScorersEditor(id); renderScorersLB();
      return;}
    const nb=e.target.closest("[data-note]");
    if(nb){const id=+nb.dataset.note,v=+nb.dataset.v;
      state.notes[id]=v; saveState(); refreshCardState(id); renderMoodCalendar();
      return;}
    const nc=e.target.closest("[data-noteclr]");
    if(nc){const id=+nc.dataset.noteclr;
      delete state.notes[id]; saveState(); refreshCardState(id); renderMoodCalendar();
      return;}
  });
  $("#koBody").addEventListener("input",e=>{if(READ_ONLY) return; const el=e.target.closest("[data-ko]"); if(!el) return;
    const id=+el.dataset.ko,k=el.dataset.k; state.ko[id]=state.ko[id]||{}; state.ko[id][k]=el.value;
    saveState(); renderKO();});
  $("#koBody").addEventListener("change",e=>{if(READ_ONLY) return; const el=e.target.closest("select[data-ko]"); if(!el) return;
    const id=+el.dataset.ko; state.ko[id]=state.ko[id]||{}; state.ko[id].pen=el.value; saveState(); renderKO();});
  $("#koView").addEventListener("click",e=>{const b=e.target.closest("button"); if(!b) return;
    $("#koView").querySelectorAll("button").forEach(x=>x.classList.remove("on")); b.classList.add("on");
    if(b.dataset.v==="bracket"){ $("#koBody").style.display="none"; $("#koTableau").style.display="block"; renderTableau(); }
    else { $("#koTableau").style.display="none"; $("#koBody").style.display="block"; }});
  $("#btnKoIcs").addEventListener("click",exportKoIcs);
  $("#btnGistSync").addEventListener("click",()=>{
    const p=$("#gistPanel"); const show=p.style.display==="none";
    p.style.display=show?"block":"none";
    if(show){ const c=gistCfg(); $("#gistToken").value=c.token||""; $("#gistAuto").checked=!!c.auto;
      $("#gistUrl").value=c.url||""; $("#gistViewUrl").value=gistViewLink(c); $("#gistDataUrl").value=gistDataRawUrl(c);
      $("#gistStatus").textContent=c.id?("Gist actif · "+c.id):""; }});
  $("#gistToken").addEventListener("input",e=>{ const c=gistCfg(); c.token=e.target.value.trim(); gistSave(c); });
  $("#gistAuto").addEventListener("change",e=>{ const c=gistCfg(); c.auto=e.target.checked; gistSave(c);
    $("#gistStatus").textContent=e.target.checked?(c.id?"Auto-publication activée":"Auto activée — fais une 1re publication"):"Auto-publication désactivée"; });
  $("#gistPublish").addEventListener("click",async()=>{
    const st=$("#gistStatus"); st.textContent="Publication en cours…";
    const r=await gistPush();
    if(r.ok){ $("#gistUrl").value=r.url; $("#gistViewUrl").value=r.viewLink||gistViewLink(); $("#gistDataUrl").value=gistDataRawUrl();
      st.textContent="✓ Publié — agenda + données synchronisés"; toast("Gist publié"); }
    else { st.textContent="✗ Échec : "+r.msg; }});
  $("#gistFetch").addEventListener("click",async()=>{
    const st=$("#gistStatus");
    if(!gistCfg().token){ st.textContent="Colle d'abord ton token GitHub"; return; }
    st.textContent="Récupération depuis le cloud…";
    await gistDiscover();
    const r=await gistPull();
    if(r.ok && r.data){
      state={res:r.data.res||{},sco:r.data.sco||{},ko:r.data.ko||{},notes:r.data.notes||{}};
      MATCHES.forEach(m=>{ if(m.hs!=null && !state.res[m.id]) state.res[m.id]={h:m.hs,a:m.as}; });
      try{ localStorage.setItem(SKEY,JSON.stringify(state)); localStorage.setItem(SYNC_KEY,String(+r.data._savedAt||Date.now())); }catch(e){}
      renderAll();
      const c=gistCfg(); $("#gistUrl").value=c.url||""; $("#gistViewUrl").value=gistViewLink(c); $("#gistDataUrl").value=gistDataRawUrl(c);
      st.textContent="✓ Données récupérées"; toast("Données récupérées depuis le cloud");
    }else st.textContent="✗ Échec : "+(r.msg||"Gist introuvable");
  });
  $("#gistCopy").addEventListener("click",async()=>{
    const u=$("#gistUrl").value; if(!u){ $("#gistStatus").textContent="Publie d'abord pour générer l'URL"; return; }
    try{ await navigator.clipboard.writeText(u); toast("URL agenda copiée"); }
    catch(e){ const el=$("#gistUrl"); el.focus(); el.select(); }});
  $("#gistCopyView").addEventListener("click",async()=>{
    const u=$("#gistViewUrl").value; if(!u){ $("#gistStatus").textContent="Publie d'abord pour générer le lien"; return; }
    try{ await navigator.clipboard.writeText(u); toast("Lien de consultation copié"); }
    catch(e){ const el=$("#gistViewUrl"); el.focus(); el.select(); }});
  $("#moodBody").addEventListener("mouseover",e=>{const c=e.target.closest(".mday.has"); if(c) showMoodPop(c);});
  $("#moodBody").addEventListener("click",e=>{const c=e.target.closest(".mday.has"); if(c) showMoodPop(c);});
  $("#moodBody").addEventListener("mouseout",e=>{const c=e.target.closest(".mday.has"); if(!c) return;
    if(e.relatedTarget && c.contains(e.relatedTarget)) return; hideMoodPop();});
  $("#btnExport").addEventListener("click",async()=>{
    const ok=await exportToDir();
    if(!ok){
      // Fallback: classic download if File System Access API unavailable
      const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
      const a=document.createElement("a"); a.href=URL.createObjectURL(blob);
      a.download="mondial-2026-payne.json"; a.click(); URL.revokeObjectURL(a.href);
      toast("Sauvegarde exportée");
    }
  });
  $("#btnImport").addEventListener("click",()=>$("#fileImport").click());
  $("#fileImport").addEventListener("change",e=>{const f=e.target.files[0]; if(!f) return;
    const rd=new FileReader(); rd.onload=()=>{try{const o=JSON.parse(rd.result);
      state={res:o.res||{},sco:o.sco||{},ko:o.ko||{},notes:o.notes||{}}; saveState(); renderAll(); toast("Sauvegarde importée");}
      catch(err){toast("Fichier illisible");}}; rd.readAsText(f); e.target.value="";});
  $("#btnReset").addEventListener("click",()=>{
    if(confirm("Effacer tous les scores et buteurs saisis ? (les 20 résultats officiels seront reposés)")){
      state={res:{},sco:{},ko:{},notes:{}}; saveState(); renderAll(); toast("Données effacées");}});
}
function refreshCardState(id){
  const m=MATCHES.find(x=>x.id===id); if(!m) return;
  const old=document.querySelector('input[data-id="'+id+'"]'); if(!old) return;
  const card=old.closest(".match"); const wasOpen=card.querySelector(".scorers").classList.contains("open");
  const fresh=matchCard(m); card.replaceWith(fresh);
  if(wasOpen){renderScorersEditor(id); $("#sco-"+id).classList.add("open"); const ex=$('[data-exp="'+id+'"]'); if(ex&&(state.sco[id]||[]).length) ex.classList.add("has");}
}

/* ============ INIT ============ */
(async function(){
  // Mode consultation : ?view (lecture seule) et/ou ?data=<url raw du Gist> (source des données pour un lecteur)
  const params=new URLSearchParams(location.search);
  const dataSrc = params.get("data") || PUBLIC_DATA_URL || "";
  VIEW_DATA_URL = dataSrc || null;
  // Lecture seule pour un visiteur (pas de token) dès qu'une source de données existe, ou si ?view est présent.
  // ?edit force le mode édition (utile pour TA configuration initiale sur le site en ligne).
  READ_ONLY = !params.has("edit") && ( params.has("view") || (!gistCfg().token && !!dataSrc) );
  if(READ_ONLY) document.body.classList.add("readonly");

  const fg=$("#filtGroup"); Object.keys(GROUPS).forEach(g=>{const o=document.createElement("option"); o.value=g; o.textContent="Groupe "+g; fg.appendChild(o);});
  await loadState();
  // Try to load from the most recent rotating export file (silent — no permission prompt)
  if(!READ_ONLY) await loadLatestExport();

  // Sur un 2e PC, on a le token mais pas encore l'id : on retrouve le Gist existant.
  if(!READ_ONLY && gistCfg().token && !gistCfg().id) await gistDiscover();

  // Synchro Gist : récupère la version partagée et garde la plus récente (« dernière saisie gagne »).
  // Propriétaire (token) → lecture via l'API GitHub (sans cache) ; visiteur → via l'URL « raw ».
  const pull = await gistPull(READ_ONLY ? VIEW_DATA_URL : undefined);
  if(pull.ok && pull.data){
    const remoteAt = +pull.data._savedAt || 0;
    const localAt  = +(localStorage.getItem(SYNC_KEY)||0);
    if(READ_ONLY || remoteAt > localAt){
      state = {res:pull.data.res||{}, sco:pull.data.sco||{}, ko:pull.data.ko||{}, notes:pull.data.notes||{}};
      if(!READ_ONLY){
        try{ localStorage.setItem(SKEY, JSON.stringify(state)); localStorage.setItem(SYNC_KEY, String(remoteAt)); }catch(e){}
        toast("Données synchronisées depuis le Gist");
      }
    }
  }else if(!READ_ONLY && VIEW_DATA_URL===null && gistCfg().id){
    toast("Synchro Gist indisponible ("+pull.msg+")");
  }

  MATCHES.forEach(m=>{ if(m.hs!=null && !state.res[m.id]) state.res[m.id]={h:m.hs,a:m.as}; });
  bind(); renderAll();
  if(READ_ONLY) toast("Mode consultation — lecture seule");
  else if(memFallback) toast("Sauvegarde locale indisponible (localStorage bloqué) — pense à Exporter");
})();
