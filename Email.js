const EMAIL_PATTERN = RegExp("^[a-z0-9]+([+._-][a-z0-9]+){0,1}@[a-z0-9]+[.][a-z]{2,4}([.][a-z]{2,4}){0,1}$");

let validMails = ["abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com", "abc111@abc.com", "abc-100@abc.net",
    "abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com", "abc+100@gmail.com"];

let invalidMails = ["abc", "abc@.com.my", "abc123@gmail.a", "abc123@.com.com", ".abc@abc.com", "abc()*@gmail.com", "abc@%*.com", "abc..2002@gmail.com"
    , "abc.@gmail.com", "abc@abc@gmail.com", "abc@gmail.com.1a", ".abc@gmail.com.aa.au"];



let validateAllValidMails=validMails.every(email=>EMAIL_PATTERN.test(email))
console.log("Has all  valid mail id verified as valid mail id:"+validateAllValidMails)

let validateAllInValidMails=invalidMails.every(email=>EMAIL_PATTERN.test(email)==false)
console.log("Has all  Invalid mail id verified as invalid mail id:"+validateAllInValidMails)