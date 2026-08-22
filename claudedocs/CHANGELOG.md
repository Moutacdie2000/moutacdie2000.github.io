# Changelog

## [fix/maj-experiences-portfolio] 2026-08-22 - Mise a jour des experiences professionnelles

### Why
Le portfolio affichait plusieurs informations perimees ou inexactes, incoherentes avec le jeu de CV :
- la plateforme Corextreme etait annoncee a "16+ services" alors qu'elle compte 35 microservices ;
- la mission de formateur IFP-T etait affichee "en cours" alors qu'elle s'est terminee en mars 2026 ;
- la raison sociale "Global Technologies & Associates" etait fausse (le nom officiel est "Global Technology & Associates", au singulier) ;
- la mission ALORI ne mentionnait que le projet de microfinance, sans SkillsOri (skillsori.com), realisation plus recente et plus significative.

### How
Correction des donnees de la constante `EXPERIENCE` dans `index.html` (le site est une page unique dont le contenu est pilote par des tableaux JS). Aucune modification de structure, de style ni de logique de rendu : seules les chaines de caracteres des experiences ont change.

### What changed (Changelog)
- Modifie : `index.html` - entree Corextreme : "16+ services" devient "35 microservices", ajout de deux puces (orchestration Kubernetes, infrastructure AWS / IAM).
- Modifie : `index.html` - entree ALORI : intitule passe a "Cloud Engineer AWS & Developpeur Full-stack", ajout de SkillsOri (Django/DRF, Next.js 16/React 19, architecture serverless AWS, CI/CD OIDC sans cle statique).
- Modifie : `index.html` - entree IFP-T : "Oct. 2025 - Present" devient "Oct. 2025 - Mars 2026".
- Modifie : `index.html` - entree GTA : raison sociale corrigee au singulier.

### Retrocompatibilite
- [x] Aucune structure de donnees modifiee (meme schema `[titre, entreprise, dates, [puces]]`)
- [x] Aucun fichier deplace ou supprime, aucun import a mettre a jour
- [x] Rendu verifie dans le navigateur : les 6 experiences s'affichent, contenu corrige confirme dans le DOM
- [x] Aucune erreur console
- [x] Site statique : pas de build a executer

### Notes for next session
Le meme jeu de faits est propage dans les 6 CV de `portfolio/cv/`. Toute nouvelle mise a jour doit toucher les deux endroits pour rester coherente.
SkillsOri n'a pas de carte dans la section Projets : les 18 cartes exigent toutes un depot GitHub public (`repo:`), or SkillsOri est un projet client sur GitLab prive. L'ajouter demanderait de rendre le champ `repo` optionnel dans la fonction de rendu.
