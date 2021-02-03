#!/bin/bash
#This script emails the user their user, IP, hostname and today's date. 
emailaddress=chellaph@mail.uc.edu
altemail=prateekchellani@gmail.com
today=$(date +"%d-%m-%Y %H:%M:%S")
ip=$(ip a | grep "dynamic ens192"| awk '{print $2}')

content="User is $USER
Server Name is $HOSTNAME
IP Address is $ip
Date and Time is $today"

#content=$line1+$line2+$line3+$line4
echo "Email will contain: $content"
mail -s "IT3038C Linux IP" $emailaddress <<< $(echo -e $content)
mail -s "IT3038C Linux IP" $altemail <<< $(echo -e $content)
