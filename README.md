# Hom'Eat
[![Code Climate](https://codeclimate.com/github/daganM/Hom-Eat/badges/gpa.svg)](https://codeclimate.com/github/daganM/Hom-Eat)
##Team

- min. 1 dev back : Dagan MENEZ
- min. 1 dev front : Romain RICHARD
- min. 1 ui : Margaux JESTIN
- min. 1 ux : Emile MICHALET

##Roadmap

- Pitch :

    Hom'eat est une application de partage de repas, sur le même principe que Blablacar, entre inconnus. L'hôte va poster sur le site une annonce avec le nombre de places disponible à sa table ainsi que le repas qu'il souhaite partager. De plus, il va créer une liste de courses et cela va permettre de fixer un prix pour pouvoir s'inscrire à la table. Les réservations vont donc payer les courses à faire. À l'heure et au jour donné, les invités viennent chez l'hôte, aident pour faire à manger, ou non, et partagent ce moment tous ensemble.

- Expression du métier :
 - liste des besoins, actions

- Proto :
 - zoning, ux

- Alpha :
 - roadmap, développement pragmatique du métier, dev back/front

- Alpha test :

- Web design :
 - ui, ux, animation

- Beta :
 - dev back/front

- Beta test :

- Production, com, marketing... :

###Local internet connection needs

To serve confirmation emails (so that you can login after creating an account) and to create a place (it uses Google Maps API), you need to have a working internet connection on your computer.

###Local mailer development params (Requires Google account)

 To make the mailing options work in local (needed for signing up), create a file in config like this  : `config/local_env.yml`. The local_env.yml name is recognized by git (thanks to the .gitignore file) to be ignored in commits, to ensure passwords in this file won't be pushed to GitHub and seen by everyone.
 In this file, enter :
 ```ruby
 GMAIL_USERNAME: 'your.mail@gmail.com'
 GMAIL_PASSWORD: 'passwd'
```
After this configuration, try sending a mail from the app (for example by creating an account).  
If you received the confirmation email into the mailbox of the entered user email, things go on ! Nothing more to do !

But if you have a `Net::SMTPAuthenticationError` error, Google needs a last operation from your part. Check your configuration Google mailbox (Gmail). You should've received an email from Google. It may be asking you to authorize less secure apps. You need to authorize them by clicking the link inside of it (or go here : https://www.google.com/settings/security/lesssecureapps).  

**WARNING : This operation is not available for Google accounts using two-steps authentication !!**  

When you've done that, it should work. Launch your server, go to `http://localhost:3000/users/confirmation/new` and type the email address of the account you've created before. Then, you should have received confirmation instructions in your mailbox !
