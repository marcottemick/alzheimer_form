<h1>Ailzheimer Form Detect</h1>
<p>Application utilisant l'intelligence artificielle pour aider au diagnostic précoce de la maladie d'Alzheimer à l'aide d'un questionnaire médical d'une trentaine de questions. Cette solution s'appuie sur un modèle de classification performant, entraîné sur un dataset médical spécifique.</p>

<h2>IA</h2>

<h3>Le dataset</h3>
<p>Le dataset "Alzheimer's Disease Dataset" utilisé contient des données sociologiques, cliniques et neuropsychologiques de patients. Il provient de <a href="https://www.kaggle.com/datasets/rabieelkharoua/alzheimers-disease-dataset" target="_blank">Kaggle</a>.</p>
<h3>Objectif</h3>
<p>Deux approches ont été testées pour générer un modèle de prédiction :</p>
<ul>
<li>**Pipeline personnalisé** : Création d'une pipeline avec une sélection de plusieurs modèles (SVM, Random Forest, etc.) et optimisation des hyperparamètres.</li>
<li>**AutoML** : Utilisation de la bibliothèque TPOT pour générer automatiquement un modèle optimal.</li>
</ul>

<h3>Résultats</h3>
<p>Pour la méthode pipeline, un modèle Random Forest a obtenu un F1-score de 0.95. Cependant, avec AutoML, le modèle final basé sur un Decision Tree a atteint un F1-score de 0.98, le rendant plus performant dans ce contexte. Par conséquent, ce dernier a été retenu pour l'intégration dans l'application.</p>

<h3>App</h3>
<p>L'application a été dockerisée en utilisant une approche multi-conteneurs pour gérer le front, le back et la base de données MongoDB séparément. Un fichier `docker-compose.yml` est utilisé pour orchestrer l'ensemble des services.</p>


<h3>Front</h3>
<p>Le front a été réalisé en <strong>React.js</strong>, avec utilisation de deux extensions, "react-icons" et "react-toastify". <strong>Tailwind</strong> a été utilisé pour réalisé le CSS.</p>

<h3>Back</h3>
<p>Le back a été codé en <strong>Python</strong> avec une API réalisée avec <strong>FastAPI</strong> et un bdd de type noSQL <strong>mongoDB</strong>.</p>
<h3>Tests</h3>
<p>Les tests unitaires du back-end ont été réalisés avec <strong>unittest</strong> et sont automatiquement exécutés à chaque commit via un pipeline CI/CD. Du côté front, des tests end-to-end ont été réalisés avec <strong>Cypress</strong> pour valider les interactions utilisateur avec l'interface.</p>