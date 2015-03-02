
if(process.env.NODE_ENV.toUpperCase()=='DEVELOPMENT'){
Kadira.connect('j4myCPmtwBG3HPZis', '8a9764f6-4dbb-46ef-8db8-e80cb8b6355c');
}
else if(process.env.NODE_ENV.toUpperCase()=='PRODUCTION'){
  Kadira.connect('ATEHjQ3xLSCw9DYpr', 'a6f00003-983d-4502-84c4-a7d11646b9e0');
}
else{
  throw 'error: Kadira trying to connect to dev or prod but failing, see server directory in the app'
}