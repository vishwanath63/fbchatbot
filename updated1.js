/** This is a sample code for your bot**/
function MessageHandler(context, event) {

// var data = {};
// data["loc"] = event.message.toLowerCase();
// context.sendResponse(JSON.stringify(context));


if(event.message.toLowerCase()=='getdoc'){
           var catalogue = {
              "type": "catalogue",
              "imageaspectratio": "horizontal",
              "msgid": "docDetails",
              "items": [
                {
                  "title": "Dr Naveena's Clinic",
                 "subtitle": "We provide general physician services",
                  "imgurl": "http://petersapparel.parseapp.com/img/item100-thumb.png",
                  "options":[
                    {
                      "type":"url",
                      "title":"View Details",
                      "url":"http://petersapparel.parseapp.com/img/item100-thumb.png"
                    },
                     {
                      "type":"text",
                      "title":"Book An appointment."
                     }
                   ]
                }
                
               
                ]
             };
        context.sendResponse(JSON.stringify(catalogue));
 }else{
      if(event.message.toLowerCase()=='hello'){
         
        }else if(event.message.toLowerCase()=='hi'){
            var quickreply = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Select the department to which your problem is related"
                    },
                "msgid": "Problem",
                "options": [
                    "General Physician",
                    "Ophthalmology",
                    "ENT Specialist",
                    "Neurology",
                    "Gynecology",
                    "Pediatrician",
                    "Gastroenterology",
                    "Orthopedics",
                    "Dermatology",
                    "Oncology"
                    
                ]
             };
             context.sendResponse(JSON.stringify(quickreply));
        }else{
            //context.sendResponse("Hi");
        }
 }
 var dpt=[
                    "General Physician",
                    "Ophthalmology",
                    "ENT Specialist",
                    "Neurology",
                    "Gynecology",
                    "Pediatrician",
                    "Gastroenterology",
                    "Orthopedics",
                    "Dermatology",
                    "Oncology"
     
     ];

if(event.message=='Enter location'&& event.messageobj.refmsgid=='Address'){
    context.sendResponse("Please enter your location");
}
if(event.message=='Book An appointment' && event.messageobj.refmsgid=='docDetails'){
        context.sendResponse("Your Request Has been made. Please stay high until their apporoval");
 }
for(i=0;i<dpt.length;i++){
 if(event.message==dpt[i] && event.messageobj.refmsgid=='Problem'){
    var Loc =  {
                  "type": "quick_reply",
                  "content": {
                    "type": "text",
                    "text": "Choose any one?"
                  },
                  "msgid": "Address",
                  "options": [
                    "Enter location",
                    "quit"
                  ]
                }
         context.sendResponse(JSON.stringify(Loc));
 }
}

}
function EventHandler(context, event) {

}

function HttpResponseHandler(context, event) {
    
}

function DbGetHandler(context, event) {
    
}

function DbPutHandler(context, event) {
   
}
