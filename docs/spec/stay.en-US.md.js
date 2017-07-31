webpackJsonp([52,219],{1308:function(e,t){e.exports={content:["article",{},["h2","Overlays"],["p",["img",{"class":"preview-img",align:"right",alt:"good example",description:"As the user clicks delete, a success message and an undo button are displayed. When the user does nothing within one minute or click the undo button, the message and the button disappear.",src:"https://os.alipayobjects.com/rmsportal/woHOTIZeXCYmtkv.png",good:""}]],["p",["img",{"class":"preview-img",align:"right",alt:"good example (special case)",description:"If the undo operation is invalid, the Popconfirm is displayed after clicking the delete button. The user can stay on the page to double confirm.",src:"https://os.alipayobjects.com/rmsportal/hDlhNscVtHdvvgu.png",good:""}]],["p",["img",{"class":"preview-img",align:"right",alt:"bad example",description:"\nAbusing the Modal can neither bring the context into the popup, which is prone to interrupt the user\u2019s flow, nor allow the user to undo the change.",src:"https://os.alipayobjects.com/rmsportal/JEcWKBYlMcYIowX.png",bad:""}]],["p","Double-confirm overlay: Using the Modal to double confirm should be avoided, while affording an opportunity to undo is preferred."],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"example of Detail Overlay ",description:"Click the eye icon to see more information.",src:"https://os.alipayobjects.com/rmsportal/WIhhhXExyQBsZwj.png"}]],["p","Detail Overlay: Allows an overlay to present additional information when the user clicks or hovers over a link or section of content."],["blockquote",["p","Note that when a mouseover event occurs to trigger the Detail Overlay, 0.5-second delay needs to be added, and when the mouse is out, the overlay needs to be closed immediately."]],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"example of Input Overlay",description:"Click the edit icon to trigger the Input Overlay. Click the outside of it to preserve the input and close it.",src:"https://os.alipayobjects.com/rmsportal/YehbrRkldqWsezo.png"}]],["p","Input Overlay: Let the user enter small amounts of text on the overlay."],["p",["br"]],["hr"],["h2","Inlays"],["p",["img",{"class":"preview-img",align:"right",alt:"example of List Inlay",src:"https://os.alipayobjects.com/rmsportal/bHCqDMqXhZvKbve.png"}]],["p","List Inlay: Works as an effective way to hide detail until needed \u2014 while at the same time preserving space on the page for high-level overview information."],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"example of Tabs",src:"https://os.alipayobjects.com/rmsportal/MsVyvEIJtlxZWBL.png"}]],["p","Tabs: Provides additional panels of information accessible by tab controls."],["p",["br"]],["hr"],["h2","Virtual Pages"],["p","In the process of interaction design, Overlays allow you to bring additional interactions or content in a layer above the cur- rent page. Inlays allow you to do this within the page itself. However, another powerful approach to keeping users engaged on the current page is to create a virtual page. That is to say, we create the illusion of a larger virtual page. "],["p","Virtual Scrolling and Pagination, more on ",["a",{title:null,href:"/docs/pattern/list#\u663e\u793a\u957f\u5217\u8868"},"Patterns\uff0fLists\uff0fShow Long Lists"]],["p","Carousel, more on ",["a",{title:null,href:"/docs/pattern/list#\u663e\u793a\u56fe\u7247"},"Patterns\uff0fLists\uff0fShow Images"]],["p",["br"]],["hr"],["h2","Process Flows"],["p","It has long been common practice on the Web to turn each step into a separate page. While this may be the simplest way break down the problem, it may not lead to the best solution. For some Process Flows it makes sense to keep the user on the same page throughout the process."],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"example of Responsive Disclosure",src:"https://os.alipayobjects.com/rmsportal/xpynnwXnfCpGHvn.png"}]],["p","Responsive Disclosure: Make the experience for selecting painless by providing disclosures as quickly as possible, and doing it all in a single-page interface."],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"example of Configurator Process",src:"https://os.alipayobjects.com/rmsportal/EBVLFAwHHjiXtIJ.png"}]],["p","Configurator Process: Provides a configurator that allows users to help them accomplish the task or build their own product."],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"example of Dialog Overlay Process",src:"https://os.alipayobjects.com/rmsportal/xcYosQncDPuFxhS.png"}]],["p","Dialog Overlay Process: Any page switch is an interruption to the user\u2019s mental flow. In addition, any context switch is a chance for a user to leave the site. But sometimes the step-by-step flow is necessary."]],meta:{category:"Principles",order:6,title:"Stay on the Page",filename:"docs/spec/stay.en-US.md"},description:["section",["p","Solve most of problems on the same page and avoid a new one, because the page refresh and forwarding can lead to change blindness, in addition to disrupting the user\u2019s mental flow."],["blockquote",["p",["strong"," Change Blindness"]," is a surprising perceptual phenomenon that occurs when a change in a visual stimulus is introduced and the observer does not notice it. People's poor ability to detect changes has been argued to reflect fundamental limitations of human attention\uff0cfrom the term of Change blindness, Wikipedia."],["p",["strong"," Flow"],", also known as the zone, is the mental state of operation in which a person performing an activity is fully immersed in a feeling of energized focus, full involvement, and enjoyment in the process of the activity, from the term of Flow, Wikipedia"]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Overlays",title:"Overlays"},"Overlays"]],["li",["a",{className:"bisheng-toc-h2",href:"#Inlays",title:"Inlays"},"Inlays"]],["li",["a",{className:"bisheng-toc-h2",href:"#Virtual-Pages",title:"Virtual Pages"},"Virtual Pages"]],["li",["a",{className:"bisheng-toc-h2",href:"#Process-Flows",title:"Process Flows"},"Process Flows"]]]}}});