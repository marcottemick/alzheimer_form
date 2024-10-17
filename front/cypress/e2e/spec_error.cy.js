describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1700, 900);
    cy.visit("http://localhost:3000");
    cy.contains("Ailzheimer Form Detect");

    cy.contains("Informations personnelles");
    cy.get("#FirstName").should("have.value", "").clear().type("John");
    cy.get("#Name").clear().type("Doe");
    cy.get("#Age").clear().type("60");
    cy.get("#Gender").select("Homme");
    cy.get("#Ethnicity").select("Caucasien");
    cy.get("#EducationLevel").select("Collège");

    cy.get('[data-testid="arrow-forward"]').click();
    cy.contains("Facteurs liés au style de vie");
    cy.get("#BMI").clear().type("0");
    cy.get("input[name='Smoking'][value='0']").check();
    cy.get("#AlcoholConsumption").clear().type("20");
    cy.get("#PhysicalActivity").clear().type("5");
    cy.get("#DietQuality").clear().type("5");
    cy.get("#SleepQuality").clear().type("7");

    cy.get('[data-testid="arrow-forward"]').click();
    cy.contains("Antécédents familiaux");
    cy.get("input[name='FamilyHistoryAlzheimers'][value='0']").check();
    cy.get("input[name='CardiovascularDisease'][value='0']").check();
    cy.get("input[name='Diabetes'][value='0']").check();
    cy.get("input[name='Depression'][value='0']").check();
    cy.get("input[name='HeadInjury'][value='0']").check();
    cy.get("input[name='Hypertension'][value='0']").check();

    cy.get('[data-testid="arrow-forward"]').click();
    cy.contains("Analyses médicales");
    cy.get("#SystolicBP").clear().type("150");
    cy.get("#DiastolicBP").clear().type("100");
    cy.get("#CholesterolTotal").clear().type("200");
    cy.get("#CholesterolLDL").clear().type("200");
    cy.get("#CholesterolHDL").clear().type("100");
    cy.get("#CholesterolTriglycerides").clear().type("20");

    cy.get('[data-testid="arrow-forward"]').click();
    cy.contains("Tests cognitifs");
    cy.get("#MMSE").clear().type("16");
    cy.get("#FunctionalAssessment").clear().type("0");
    cy.get("input[name='MemoryComplaints'][value='0']").check();
    cy.get("input[name='BehavioralProblems'][value='0']").check();
    cy.get("#ADL").clear().type("0");

    cy.get('[data-testid="arrow-forward"]').click();
    cy.contains("Symptômes");
    cy.get("input[name='Confusion'][value='1']").check();
    cy.get("input[name='Disorientation'][value='0']").check();
    cy.get("input[name='PersonalityChanges'][value='1']").check();
    cy.get("input[name='DifficultyCompletingTasks'][value='0']").check();
    // cy.get("input[name='Forgetfulness'][value='0']").check();

    cy.get('[data-testid="arrow-forward"]').click();
    cy.contains("Récapitulation des informations");
    cy.contains("Pas de valeur");
    cy.contains("Analyser").click();
    cy.contains("Une ou plusieurs informations sont manquantes !");
    cy.contains("Une ou plusieurs informations sont manquantes !").click();

    cy.contains("Antécédents").click();

    cy.get("input[type='text']").clear();
    cy.contains("Valider").click();
    cy.contains("Aucun(e) patient(e) sélectionné(e) !")
    cy.contains("Aucun(e) patient(e) sélectionné(e) !").click();


    cy.get("input[type='text']").clear().type("test test");
    cy.contains("Valider").click();
    cy.contains("Le patient(e) demandé(e) n'est pas présent(e) dans notre base de donnée !")
    cy.contains("Le patient(e) demandé(e) n'est pas présent(e) dans notre base de donnée !").click();
  
  })
})