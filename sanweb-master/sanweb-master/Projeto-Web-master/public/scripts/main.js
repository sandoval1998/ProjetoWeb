class Questionario {
  constructor(assunto, numero_de_questoes, questoes,respostas) {
    this.assunto = assunto;
    this.numero_de_questoes = numero_de_questoes;
    
    this.questoes = questoes;
     this.respostas = respostas;
    
  }
}

var questionarios = [];
var btn = [];

var qt_de_questionarios = 0;
function panelChanger(panel){
    
   
    btn[1] = document.getElementById("form").classList;
    btn[2] = document.getElementById("form1").classList;
    btn[3] = document.getElementById("form2").classList;
    btn[4] = document.getElementById("form3").classList;
    btn[5] = document.getElementById("form4").classList;
    btn[6] = document.getElementById("form5_remover").classList;
    btn[7] = document.getElementById("form6_responder").classList;
    btn[8] = document.getElementById('form6').classList;
    btn[9] = document.getElementById('form7_edit').classList;
    btn[10]= document.getElementById('form8_visualizar').classList;
   
    
    for(i=1;i<=10;i++)
        {       
            btn[i].add("hidden");
        }
    
    if(panel == "add")
        btn[1].remove("hidden");
    else if(panel == "remove")
        btn[6].remove("hidden");
    else if (panel == "viewQuestionario")
        {
        btn[8].remove("hidden");  
        }
    else if (panel == "responder")
        {
        btn[7].remove("hidden");
        }
    else if (panel == "visualizar")
        {
            visualizarQuestionarios();
            btn[10].remove("hidden");
        }
}

function visualizarQuestionarios()
{
    

    document.getElementById('form8_visualizar').innerHTML = "";
    for(i=0;i<qt_de_questionarios;i++)
        {
          
            if(questionarios[i]!=null && questionarios[i].assunto != "")
                { 
                    document.getElementById('form8_visualizar').innerHTML += 
                 ('<h2>' + "ASSUNTO: "+ questionarios[i].assunto + '</h2>' +
                   '<h5>' + " Número de questões: " + questionarios[i].numero_de_questoes + '</h5>'
                    );
                    
                }
        }
}

function editarQuestionario()
{
    var form = document.getElementById("form7_edit");
    var assunto = form.ASSUNTO.value;
    
     if(assunto== "")
        {
            alert("Por favor informe o assunto do questionário!");
            return ;
        }
    
    var indiceQuest = buscarQuestionario(assunto);
    
    if(indiceQuest == -1)
        {
            alert("Não existe questionário com o assunto mencionado!");
            return ;
        }
    
    if(questionarios[indiceQuest].numero_de_questoes==1)
        {
           
        }
    else if(questionarios[indiceQuest].numero_de_questoes==3)
        {

        }
    else if(questionarios[indiceQuest].numero_de_questoes==5)
        {

        }
    else if(questionarios[indiceQuest].numero_de_questoes==10)
        {

        }
    
}

function buscarQuestionario(name)
{
    
    for (i=0;i<qt_de_questionarios;i++)
        {
            if(name.toUpperCase()==questionarios[i].assunto.toUpperCase())
                {
                    return i;
                }
        }
    
    return -1;
}
var last_indice = -1;
function verificarRespostas()
{
    btn[7].add("hidden");
    var pontuacao = 0;
    
    var form = document.getElementById("form6");
    var respostas = [];
    console.log(form.RESPOSTA1.value);
    
    respostas[0]= form.RESPOSTA1.value;
    respostas[1]= form.RESPOSTA2.value;
    respostas[2]= form.RESPOSTA3.value;
    respostas[3]= form.RESPOSTA4.value;
    respostas[4]= form.RESPOSTA5.value;
    respostas[5]= form.RESPOSTA6.value;
    respostas[6]= form.RESPOSTA7.value;
    respostas[7]= form.RESPOSTA8.value;
    respostas[8]= form.RESPOSTA9.value;
    respostas[9]= form.RESPOSTA10.value;
    
    for(i=0;i<questionarios[last_indice].numero_de_questoes;i++)
        {
            if(respostas[i].toUpperCase() == questionarios[last_indice].respostas[i].toUpperCase())
                {
                    pontuacao += 10;
                }
        }
    pontuacao = pontuacao/questionarios[last_indice].numero_de_questoes;
    alert("SUA NOTA: " + pontuacao);
    
    btn[8].add("hidden");
    resetFormulario();
    last_indice = -1;
}
function responderQuestionario()
{
    
    var form = document.getElementById("form6_responder");
    var assunto = form.ASSUNTO_responder.value;
    
     if(assunto== "")
        {
            alert("Por favor informe o assunto do questionário!");
            resetFormulario();
            return ;
        }
    
    var indiceQuest = buscarQuestionario(assunto);
    
    if(indiceQuest == -1)
        {
            alert("Não existe questionário com o assunto mencionado!");
            resetFormulario();
            return ;
        }
    
    
    btn[8].remove("hidden");
    btn[7].add("hidden");
    
    last_indice = indiceQuest;
    
    document.getElementById('form6').innerHTML += ('<div class="hidden" id="div1">' + '<h2>' +"Questão 1" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[0]+ '</h4>' + "Resposta:"  +'<input type="text" id="RESPOSTA1"/>'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div2">' + '<h2>' +"Questão 2" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[1]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA2">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div3">' + '<h2>' +"Questão 3" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[2]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA3">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div4">' + '<h2>' +"Questão 4" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[3]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA4">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div5">' + '<h2>' +"Questão 5" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[4]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA5">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div6">' + '<h2>' +"Questão 6" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[5]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA6">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div7">' + '<h2>' +"Questão 7" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[6]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA7">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div8">' + '<h2>' +"Questão 8" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[7]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA8">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div9">' + '<h2>' +"Questão 9" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[8]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA9">'+ '</div>'
                                                   
                                                   +'<div class="hidden" id="div10">' + '<h2>' +"Questão 10" + '</h2>' +
                                                   '<h4>' + "Enunciado: " +questionarios[indiceQuest].questoes[9]+ '</h4>' + "Resposta:" + '<input type="text" id="RESPOSTA10">'+ '</div>'     
                                                  );
    
    removeHiddenQuestions(questionarios[indiceQuest].numero_de_questoes);
        
    
    document.getElementById('form6').innerHTML += ('<div>' + '<button type="submit" value="Responder" id="responder" onClick="verificarRespostas()" style="margin-top: 1vw;"> Responder questionário </button>' + '</div>');
   
    resetFormulario();
    
}
function removeHiddenQuestions(numero_de_questoes)
{
    var questions = [];
    
    questions[0] = document.getElementById('div1').classList;
    questions[1] = document.getElementById('div2').classList;
    questions[2] = document.getElementById('div3').classList;
    questions[3] = document.getElementById('div4').classList;
    questions[4] = document.getElementById('div5').classList;
    questions[5] = document.getElementById('div6').classList;
    questions[6] = document.getElementById('div7').classList;
    questions[7] = document.getElementById('div8').classList;
    questions[8] = document.getElementById('div9').classList;
    questions[9] = document.getElementById('div10').classList;
    
    
    for(i=0;i<numero_de_questoes;i++)
        {
        questions[i].remove("hidden");
        }  
}
function removerQuestionario()
{
    var form = document.getElementById("form5_remover");
    var assunto = form.ASSUNTO_remover.value;
    
    if(assunto== "")
        {
            alert("Por favor informe o assunto do questionário!");
            resetFormulario();
            return ;
        }
    
    var indiceQuest = buscarQuestionario(assunto);
    
    if(indiceQuest == -1)
        {
            alert("Não existe questionário com o assunto mencionado!");
            resetFormulario();
            return ;
        }
    
    alert("Questionário removido com sucesso !");
    questionarios[indiceQuest].assunto = "";
    btn[6].add("hidden");
    resetFormulario();
}

var new_assunto;
var new_number;
function enviarQuestionario()
{
     var questoes = [];
     var respostas = [];
     if(new_number==1)
        {
           var form = document.getElementById("form1");
           
             
            questoes[0]= form.QUESTAO1.value;
            
            
            respostas[0]=form.QUESTAO1.value;
           
           
        }
    else if (new_number=="3")
        {
            var form = document.getElementById("form2");
            questoes[0]= form.QUESTAO1.value;
            questoes[1]= form.QUESTAO2.value;
            questoes[2]= form.QUESTAO3.value;
            
            
            respostas[0]=form.QUESTAO1.value;
            respostas[1]=form.QUESTAO1.value;
            respostas[2]=form.QUESTAO2.value;
           
            
        }
    else if(new_number=="5")
        {
           var form = document.getElementById("form3");
          
            questoes[0]= form.QUESTAO1.value;
            questoes[1]= form.QUESTAO2.value;
            questoes[2]= form.QUESTAO3.value;
            questoes[3]= form.QUESTAO4.value;
            questoes[4]= form.QUESTAO5.value;
            
            
            respostas[0]=form.QUESTAO1.value;
            respostas[1]=form.QUESTAO2.value;
            respostas[2]=form.QUESTAO2.value;
            respostas[3]=form.QUESTAO3.value;
            respostas[4]=form.QUESTAO4.value;
            
        }
    else if(new_number=="10")
        {
             var form = document.getElementById("form4");
          
            questoes[0]= form.QUESTAO1.value;
            questoes[1]= form.QUESTAO2.value;
            questoes[2]= form.QUESTAO3.value;
            questoes[3]= form.QUESTAO4.value;
            questoes[4]= form.QUESTAO5.value;
            questoes[5]= form.QUESTAO6.value;
            questoes[6]= form.QUESTAO7.value;
            questoes[7]= form.QUESTAO8.value;
            questoes[8]= form.QUESTAO9.value;
            questoes[9]= form.QUESTAO10.value;
            
            
            respostas[0]=form.QUESTAO1.value;
            respostas[1]=form.QUESTAO2.value;
            respostas[2]=form.QUESTAO3.value;
            respostas[3]=form.QUESTAO4.value;
            respostas[4]=form.QUESTAO5.value;
            respostas[5]=form.QUESTAO6.value;
            respostas[6]=form.QUESTAO7.value;
            respostas[7]=form.QUESTAO8.value;
            respostas[8]=form.QUESTAO9.value;
            respostas[9]=form.QUESTAO10.value;
        
        }
    
    questionarios[qt_de_questionarios] = new Object();
    questionarios[qt_de_questionarios] = new Questionario(new_assunto,new_number,questoes,respostas);
    qt_de_questionarios++;
    
    new_assunto = "";
    questoes = "";
    for(i=1;i<=8;i++)
        {       
            btn[i].add("hidden");
        }
    resetFormulario();
}
function numero_de_questoes()
{
  var select = document.getElementById("addSelect");
  var form = document.getElementById("form");
  var value1 = select.options[select.selectedIndex].value;
  var assunto = form.ASSUNTO.value;
    
    console.log(form.ASSUNTO);
  if(assunto == ""){
      alert("Informe o assunto do questionário a ser criado!");
      resetFormulario();
      return ;
  }
    
  var indice = buscarQuestionario(assunto);
    
    if(indice != -1)
        {
            alert("Já existe um questionário desse assunto!!");
            resetFormulario();
            return ;
        }
    
    new_assunto = assunto;
    new_number = value1;
    
    if(value1==1)
        {
            btn[1].add("hidden");
            btn[2].remove("hidden");
        }
    else if (value1=="3")
        {
            btn[1].add("hidden");
            btn[3].remove("hidden");
        }
    else if(value1=="5")
        {
           
            btn[1].add("hidden");
            btn[4].remove("hidden");
        }
    else if(value1=="10")
        {
            
            btn[1].add("hidden");
            btn[5].remove("hidden");
        }
    
    resetFormulario();
}

    
function resetFormulario(){
 
  document.getElementById("QUESTAO1").value = "";
  document.getElementById("QUESTAO2").value = "";
  document.getElementById("QUESTAO3").value = "";
  document.getElementById("QUESTAO4").value = "";
  document.getElementById("QUESTAO5").value = "";
  document.getElementById("QUESTAO6").value = "";
  document.getElementById("QUESTAO7").value = "";
  document.getElementById("QUESTAO8").value = "";
  document.getElementById("QUESTAO9").value = "";
  document.getElementById("QUESTAO10").value = "";
    
  document.getElementById("RESPOSTA1").value = "";
  document.getElementById("RESPOSTA2").value = "";
  document.getElementById("RESPOSTA3").value = "";
  document.getElementById("RESPOSTA4").value = "";
  document.getElementById("RESPOSTA5").value = "";
  document.getElementById("RESPOSTA6").value = "";
  document.getElementById("RESPOSTA7").value = "";
  document.getElementById("RESPOSTA8").value = "";
  document.getElementById("RESPOSTA9").value = "";
  document.getElementById("RESPOSTA10").value = "";
    
  document.getElementById("ASSUNTO_remover").value = "";
    document.getElementById("ASSUNTO_responder").value = "";
  document.getElementById("ASSUNTO").value = "";
     
}