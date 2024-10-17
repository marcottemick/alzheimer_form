<h1>Ailzheimer Form Detect</h1>

<p>Application permettant le diagnostic d'alzheimer d'une personne grâce à un formulaire d'une trentaine de questions.</p>

<h2>IA</h2>
<h3>Le dataset</h3>
<p>Le dataset "Alzheimer's Disease Dataset" provient de <a href="https://www.kaggle.com/datasets/rabieelkharoua/alzheimers-disease-dataset">Kaggle</a>. Une rapide EDA a été fait pour vérifier l'absence de valeurs nulles.</p>
<h3>Objectif</h3>
<p>Génération d'un algorithme d'intelligence artificielle à partir du dataset téléchargé. Pour cela deux méthodes ont été utilisées:</p>
<ul>
<li>Pipeline : sélection de plusieurs modèles avec test de plusieurs hyperparamètres. </li>
<li>AutoML : utilisation de la bibliothèque tpot pour générer un modèle de classification.</li>
<h3>Résultats</h3>
<p>Pour la méthode de génération avec un pipeline, c'est un modèle basé sur "random forest" qui sort avec un f1 score de 0.95. Pour la méthode basée sur l'autoML, c'est un modèle basé sur "desicion tree" qui sort avec un f1 score de 0.98. C'est ce dernier qui est utilisé pour l'application</p>