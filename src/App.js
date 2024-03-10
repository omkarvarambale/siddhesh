import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ChatBot  from 'react-simple-chatbot';


function App() {

const steps = [{
  id:'Greet',
  message:'Hello,Welcome to Chat Bot !!!',
   trigger:'AskName'
},
{
  id:'AskName',
  message:'Please Enter Your Name  ',
  trigger:'waiting1'
},
{
  id:'waiting1',
  user:true,
  trigger:'Name'
},
{
  id:'Name',
  message:'Hii {previousValue},please select your issue  ',
  trigger:'issues'
},
{
  id:'issues',
  options:[
    {value:'Course Enquiry',label:'Course Enquiry',trigger:'choose course'},
    {value:'Fee Issue',label:'Fee Issue',trigger:'Fee'},
    {value:'Contact Options',label:'Contact us',trigger:'contact'},
    {value:'Contact Options',label:'Other',trigger:'contact'}
    
  ],
},
{
  id:'choose course',
  message:'choose among the following Courses',
  trigger:'Course Enquiry'

},
{
  id:'contact',
  message:'Choose your preferable contact Option  ',
  trigger:'Contact Options'

},
{
  id:'Fee',
  message:'Choose Among Following Fee Issues',
  trigger:'Fee Issue'

},


{
  id:'Fee Issue',
  
  options:[
    {value:'Cross Due Date',label:'Cross Due Date',trigger:'Cross Due Date'},
    {value:'Scholarship Issue',label:'Scholarship Issue',trigger:'Scholarship Issue'},
    {value:'Contact Options',label:'Contact us',trigger:'contact'},
  
  ],

 
 
},
{
  id:'Cross Due Date',
  message:'Thanks for telling your cross Due Date issue',
  trigger:'contact'
},
{
  id:'Scholarship Issue',
  message:'Thanks for telling your Scholarship Issue issue',
  trigger:'contact'
},




{
  id:'Course Enquiry',
  
  options:[
    
    {value:'React',label:'React',trigger:'React'},
    {value:'.NET',label:'.NET',trigger:'.NET'},
    {value:'JAVA',label:'JAVA',trigger:'JAVA'},
    {value:'PHP',label:'PHP',trigger:'PHP'},
    {value:'Figma',label:'Figma',trigger:'Figma'},
  ],

 
 
},
{
  id:'Fee Issue',
 
  options:[
    {value:'Refund',label:'Refund',trigger:'Refund'},
    {value:'Scholarship',label:'Scholarship',trigger:'Scholarship Issue'},
    {value:'Dues',label:'Dues',trigger:'Dues'},
    ],
},

{
  id:'Refund',
  message:'Thanks for telling your Refund issue',

  trigger:'contact'
},
{
  id:'Dues',
  message:'Thanks for telling your Dues issue',

  trigger:'contact'
},

//----------------contact options Trigger------------------------------

{
  id:'Contact Options',
 
  options:[
    {value:'Mobile',label:'Mobile',trigger:'contactmob'},
    {value:'Mail',label:'Mail',trigger:'contactmail'},
  ],
},
{
  id:'contactmob',
  message:'enter your mobile number',
 trigger:'Mobile'
},
{
  id:'contactmail',
  message:'enter your Mail Address',
 trigger:'Mail'
},
{
  id:'Mobile',
  user:true,
 trigger:'mob'
},
{
  id:'mob',
 message:'We get your contact no as {previousValue} our Support Will Contact you soon ...',
 trigger:'thanku'
},



{
  id:'Mail',
  user:true,
 trigger:'mail'
},
{
  id:'mail',
  message:'We get your Mail Address as {previousValue} our Support Will Contact you soon ...',
 trigger:'thanku'
},


//--------------------------------------------------------------
//-------------course options ---------------------------------
{
  id:'React',
  message:'Thanks for telling your React issue',
  trigger:'contact'
},

{
  id:'.NET',
  message:'Thanks for telling your .NET issue',
  trigger:'contact'
},
{
  id:'JAVA',
  message:'Thanks for telling your JAVA issue',
  trigger:'contact'
},
{
  id:'PHP',
  message:'Thanks for telling your PHP issue',
  trigger:'contact'
},
{
  id:'Figma',
  message:'Thanks for telling your Figma issue',
  trigger:'contact'
},
//--------------------------------------------------------

//-----------Thanku Trigger-------------------------------
{
  id:'thanku',
  message:'We Will Get Back To you Soon! Thank You! ',
  end:true
}

//--------------------------------------------------------

];


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Chief</h1>
        <div style={{marginLeft:'1275px',marginTop:'100px'}} >
      <ChatBot steps={steps} />
        </div>
      </header>
    </div>
  );
}

export default App;
