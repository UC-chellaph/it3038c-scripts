function getIP{
(Get-NetIPAddress).ipv4address | Select-String "192*"
}

$IP = getIP
$User = Get-LocalUser
$PowershellVersion = $Host.Version.Major
$Date = Get-Date

$BODY = "This Machine's IP is $IP 
User is $env:username
Hostname is $env:COMPUTERNAME 
Powershell Version $PowershellVersion 
Today's Date is $Date"

Write-Host $Body

function sendMail{
Send-MailMessage -To "chellaph@mail.uc.edu" -From "chellaph@mail.uc.edu" -
Subject "IT3038C Windows SysInfo" -Body $BODY -SmtpServer
smtp.google.com -port 587 -UseSSL -Credential (Get-Credential)
}