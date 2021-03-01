from datetime import date

# For Year
thisYear = date.today().year
while True:
    try:
        myYear = int(input('What year were you born in?: '))
        while myYear < 1910 or myYear > thisYear:
            myYear = int(input('Please enter your real year of Birth >.< : '))
    except ValueError:
        print("Please enter a numeric value only")
        # Return to Start of Loop
        continue
    else:
        # age is a number: So break loop
        break

# For Month

while True:
    try:
        myMonth = int(input('What month were you born in?: '))
        while myMonth < 1 or myMonth > 12:
            myMonth = int(input('There are only 12 months in a year. Please enter your real month of birth : '))
    except ValueError:
        print("Please enter a numeric value only")
        # Return to Start of Loop
        continue
    else:
        # age is a number: So break loop
        break

# For Day

while True:
    try:
        myDay = int(input('What day were you born on?: '))
        while myDay > 31 or myDay < 1:
            myDay = int(input('There are at most 31 days in a month. Please enter your real date of birth : '))
            
        DoB = date(myYear, myMonth, myDay)
    except ValueError:
        print("Uh oh. One of your inputs wasn't valid. Please try again. This program only accepts numeric values.")
        # Return to Start of Loop
        continue
    else:
        # age is a number: So break loop
        break




def calculateAge(birthdate):
    age = float((date.today() - birthdate).days)
    return age


def daysToSeconds(days):
    seconds = float(days * 86400)
    return seconds


ageInDays = calculateAge(DoB)
ageInSeconds = daysToSeconds(ageInDays)
print(ageInDays, ' Days')
print(ageInSeconds, ' Seconds')
