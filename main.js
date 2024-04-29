/* Selecciona el tipo de evento y despliega el Div correspondiente*/

const barrio = document.getElementById('barrio');

barrio.addEventListener("change", function () {
  const areaSS = document.getElementById('areaSS');

    if (barrio.value === "San Sebastian") {
      areaSS.style.display = "block";
    } else areaSS.style.display = "";
  });


function descargarPDF() {
    const element = document.body;
    const botonDescargarPDF = document.getElementById("botonDescargarPDF");
    botonDescargarPDF.style.display = "none";
    const inputFoto1 = document.getElementById("inputFoto");
    inputFoto1.style.display = "none";
    const inputFoto2 = document.getElementById("inputFoto2");
    inputFoto2.style.display = "none";
    const inputFoto3 = document.getElementById("inputFoto3");
    inputFoto3.style.display = "none";

    const barrioTit = document.getElementById('barrio');
    const loteTit = document.getElementById('lote');
    const fechaTit = document.getElementById('date');

    html2pdf()
      .from(element)
      .save(barrioTit.value + " " + " L" + loteTit.value + " " + fechaTit.value + '.pdf');
  };


  function mostrarFoto(event) {
    var archivo = event.target.files[0];
    var vistaPrevia = document.getElementById("vistaPrevia");
  
    if (archivo) {
      var lector = new FileReader();
  
      lector.onload = function(e) {
        vistaPrevia.style.display = "flex";
        vistaPrevia.innerHTML = '<img src="' + e.target.result + '">';
      };
  
      lector.readAsDataURL(archivo);
    } else {
      vistaPrevia.innerHTML = "No se seleccionó ninguna foto";
    }
  }

  
  function mostrarFoto2(event) {
    var archivo = event.target.files[0];
    var vistaPrevia2 = document.getElementById("vistaPrevia2");
  
    if (archivo) {
      var lector = new FileReader();
  
      lector.onload = function(e) {
        vistaPrevia2.style.display = "flex";
        vistaPrevia2.innerHTML = '<img src="' + e.target.result + '">';
      };
  
      lector.readAsDataURL(archivo);
    } else {
      vistaPrevia2.innerHTML = "No se seleccionó ninguna foto";
    }
  }

  function agregarDiv() {
    // Crear el nuevo div
    var nuevoDiv2 = document.createElement("div");
    nuevoDiv2.id = "nuevoDiv2";
    
    var nuevoDiv = document.createElement("div");
    nuevoDiv.id = "nuevoDiv";
    
      // Agregar campos al formulario
      var tituloTipo = document.createElement("label");
      tituloTipo.textContent = "Tipo:";
      var inputTipo = document.createElement("input");
      inputTipo.type = "text";

      var tituloMarca = document.createElement("label");
      tituloMarca.textContent = "Marca:";
      var inputMarca = document.createElement("input");
      inputMarca.type = "text";

      var tituloColor = document.createElement("label");
      tituloColor.textContent = "Color:";
      var inputColor = document.createElement("input");
      inputColor.type = "text";
      
      var tituloObser = document.createElement("label");
      tituloObser.textContent = "Observaciones:";
      var textArea = document.createElement("textarea");
      textArea.type = "textarea";


      // Agregar campos al formulario
      nuevoDiv.appendChild(tituloTipo);
      nuevoDiv.appendChild(inputTipo);
      nuevoDiv.appendChild(tituloMarca);
      nuevoDiv.appendChild(inputMarca);
      nuevoDiv.appendChild(tituloColor);
      nuevoDiv.appendChild(inputColor);
      nuevoDiv.appendChild(tituloObser);
      nuevoDiv.appendChild(textArea);
      
      // Agregar formulario al nuevo div
      nuevoDiv2.appendChild(nuevoDiv);


    // Agregar el nuevo div al contenedor
    var contenedorDivs = document.getElementById("contenedorDivs");
    contenedorDivs.appendChild(nuevoDiv);
  }

  function mostrarFoto3(event) {
    var archivo = event.target.files[0];
    var vistaPrevia3 = document.getElementById("vistaPrevia3");
  
    if (archivo) {
      var lector = new FileReader();
  
      lector.onload = function(e) {
        vistaPrevia3.style.display = "flex";
        vistaPrevia3.innerHTML = '<img src="' + e.target.result + '">';
      };
  
      lector.readAsDataURL(archivo);
    } else {
      vistaPrevia3.innerHTML = "No se seleccionó ninguna foto";
    }
  }


