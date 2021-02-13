from datetime import date

myYear = int(input('What year were you born in?: '))
while myYear < 1910:
    print("You're not that old")
    myYear = int(input('Please enter your real year of Birth >.< : '))

myMonth = int(input('What month were you born in?: '))
while myMonth > 12:
    print("There's only 12 months in a Year")
    myMonth = int(input('What month were you born in?: '))

myDay = int(input('What day were you born on?: '))
while myDay > 31:
    print("There can be a maximum of 31 days in a month")
    myMonth = int(input('What day were you born on?: '))

DoB = date(myYear, myMonth, myDay)


def calculateAge(birthdate):
    age = float((date.today() - birthdate).days)
    return age


def daysToSeconds(days):
    seconds = float(days*86400)
    return seconds


ageInDays = calculateAge(DoB)
ageInSeconds = daysToSeconds(ageInDays)
print(ageInDays, ' Days')
print(ageInSeconds, ' Seconds')
