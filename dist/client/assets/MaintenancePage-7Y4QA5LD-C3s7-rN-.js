import{$i as e,Kr as t,cr as n}from"./shared-home-E7MZ7Gej.js";var r=t(),i=`https://cdn.assets.salla.network/prod/stores/images/construction-01.png`,a=[[`twitter`,`sicon-x`],[`snapchat`,`sicon-snapchat`],[`youtube`,`sicon-youtube`],[`tiktok`,`sicon-tiktok`],[`facebook`,`sicon-facebook`],[`instagram`,`sicon-instagram`]],o=`
.s-maintenance{display:flex;flex-direction:column;align-items:center;width:100%;height:100vh;height:100dvh;overflow-y:auto;color:#a3a3a3;background:#fff;filter:grayscale(100%);box-sizing:border-box}
.s-maintenance *{box-sizing:border-box}
.s-maintenance .mt-container{width:100%;max-width:1200px;margin:auto 0;padding:0 15px}
.s-maintenance .mt-panel{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}
.s-maintenance .mt-message{width:100%;padding-inline-start:80px;animation:revealMtBlock 1.5s forwards}
.s-maintenance .mt-title{display:flex;align-items:center;margin:0 0 20px}
.s-maintenance .mt-logo{display:block;flex-shrink:0;width:80px;height:80px;margin-inline-end:20px;border-radius:50%;overflow:hidden;box-shadow:0 0 5px rgb(0 0 0 / 10%)}
.s-maintenance .mt-logo img{display:block;width:100%;height:100%;object-fit:cover}
.s-maintenance .mt-title h1{font-size:2.25rem;line-height:1;margin:0;color:#666}
.s-maintenance .mt-content p{margin:0;white-space:pre-line}
.s-maintenance .mt-contact-list{display:inline-block;list-style:none;width:100%;max-width:500px;margin:20px 0 0;padding:20px 0 0;border-top:1px solid #eee}
.s-maintenance .mt-contact-list li{display:inline-block;margin-inline-end:10px}
.s-maintenance .mt-contact-list a{display:inline-flex;align-items:center;padding:5px;color:rgb(102 102 102 / 80%);text-decoration:none;font-size:1.25rem}
.s-maintenance .mt-contact-list a:hover{color:#666}
.s-maintenance .mt-contact--btn{padding:3px 20px 5px;border-radius:20px;color:#fff!important;background:rgb(102 102 102 / 80%);font-size:1rem!important}
.s-maintenance .mt-contact--btn:hover{background:#666}
.s-maintenance .mt-contact--btn i{margin-inline-end:10px}
.s-maintenance .thumb{width:100%;animation:revealMtBlock 1.5s .1s forwards;opacity:0}
.s-maintenance .thumb img{display:block;width:100%;max-width:450px;margin:0 auto}
@media (max-width:1024px){
.s-maintenance{padding:40px 0 10px}
.s-maintenance .mt-panel{flex-direction:column}
.s-maintenance .mt-message{order:2;text-align:center;padding:0;margin:50px 0 0}
.s-maintenance .mt-title{flex-direction:column;margin-bottom:30px}
.s-maintenance .mt-logo{margin:0 0 10px}
.s-maintenance .mt-title h1{font-size:1.5rem}
}
@media (max-width:640px){.s-maintenance .thumb img{width:80%}}
@keyframes revealMtBlock{from{opacity:0;transform:translateY(50%)}to{opacity:1;transform:translateY(0)}}
`;function s({store:e,arabic:t}){let{t:i}=n(),o=e?.contacts?.mobile,s=a.flatMap(([t,n])=>{let r=e?.social?.[t];return r?[{key:t,icon:n,href:r}]:[]});return!o&&s.length===0?null:(0,r.jsxs)(`ul`,{className:`mt-contact-list`,children:[o&&(0,r.jsx)(`li`,{children:(0,r.jsxs)(`a`,{href:`tel:${o}`,className:`mt-contact--btn`,children:[(0,r.jsx)(`i`,{className:`sicon-phone`,"aria-hidden":`true`}),i(`common.elements.contact_us`,{defaultValue:t?`تواصل معنا`:`Contact us`})]})}),s.map(({key:e,icon:t,href:n})=>(0,r.jsx)(`li`,{children:(0,r.jsx)(`a`,{href:n,target:`_blank`,rel:`noreferrer`,"aria-label":e,children:(0,r.jsx)(`i`,{className:t,"aria-hidden":`true`})})},e))]})}function c(){let{settings:t,locale:a}=e(),{t:c}=n(),l=t.store,u=t.maintenance_details,d=a.startsWith(`ar`),f=u?.title||c(`pages.maintenance.title`,{defaultValue:d?`المتجر قيد الصيانة`:`Store under maintenance`});return(0,r.jsxs)(`div`,{className:`s-maintenance`,"data-testid":`store-maintenance-page`,children:[(0,r.jsx)(`style`,{children:o}),(0,r.jsx)(`div`,{className:`mt-container`,children:(0,r.jsxs)(`section`,{className:`mt-panel`,children:[(0,r.jsxs)(`div`,{className:`mt-message`,children:[(0,r.jsxs)(`div`,{className:`mt-title`,children:[l?.logo&&(0,r.jsx)(`span`,{className:`mt-logo`,children:(0,r.jsx)(`img`,{src:l.logo,alt:l.name||c(`common.elements.store_logo`,{defaultValue:d?`شعار المتجر`:`Store logo`})})}),(0,r.jsx)(`h1`,{children:f})]}),(0,r.jsx)(`div`,{className:`mt-content`,children:u?.message?(0,r.jsx)(`p`,{children:u.message}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`p`,{children:c(`pages.maintenance.message`,{defaultValue:d?`عذرا عزيزي العميل، المتجر حاليا قيد الصيانة و سنعاود العمل خلال فترة وجيزة`:`Sorry, the store is under maintenance and will be back shortly.`})}),(0,r.jsx)(`p`,{children:c(`pages.maintenance.thanks`,{defaultValue:d?`شكرا لتفهمكم`:`Thank you for your understanding.`})})]})}),(0,r.jsx)(s,{store:l,arabic:d})]}),(0,r.jsx)(`div`,{className:`thumb`,children:(0,r.jsx)(`img`,{src:i,alt:``})})]})})]})}export{c as MaintenancePage};