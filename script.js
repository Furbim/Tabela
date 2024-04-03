function adicionarListeners(classe, elementoClasse) {
    var elementos = document.querySelectorAll(classe);

    elementos.forEach(function (elemento) {

        elemento.addEventListener('mouseover', function() {
            
            expandir(elementoClasse);
        });

        elemento.addEventListener('mouseout', function() {
            contrair(elementoClasse);
        });
    });
}

function expandir(classe) {
    var elements = document.querySelectorAll(classe);

    elements.forEach(function(el) {
        el.classList.add("classe_expandir");
    });
}

function contrair(classe) {
    var elements = document.querySelectorAll(classe);

    elements.forEach(function(el) {
        el.classList.remove("classe_expandir");
    });
}

adicionarListeners('.C_nm', '.Nm');
adicionarListeners('.C_mta', '.Mta');
adicionarListeners('.C_sm', '.Sm');
adicionarListeners('.C_om', '.Om');
adicionarListeners('.C_lt', '.Lt');
adicionarListeners('.C_gn', '.Gn');
adicionarListeners('.C_mtat', '.Mtat');
adicionarListeners('.C_ha', '.Ha');
adicionarListeners('.C_mt', '.Mt');
adicionarListeners('.C_ac', '.Ac');
adicionarListeners('.C_one', '.c_one');
adicionarListeners('.C_two', '.c_two');
adicionarListeners('.C_three', '.c_three');
adicionarListeners('.C_four', '.c_four');
adicionarListeners('.C_five', '.c_five');
adicionarListeners('.C_six', '.c_six');
adicionarListeners('.C_seven', '.c_seven');
adicionarListeners('.C_eight', '.c_eight');
adicionarListeners('.C_nine', '.c_nine');
adicionarListeners('.C_ten', '.c_ten');
adicionarListeners('.C_eleven', '.c_eleven');
adicionarListeners('.C_twelve', '.c_twelve');
adicionarListeners('.C_thirteen', '.c_thirteen');
adicionarListeners('.C_fourteen', '.c_fourteen');
adicionarListeners('.C_fifteen', '.c_fifteen');
adicionarListeners('.C_sixteen', '.c_sixteen');
adicionarListeners('.C_seventeen', '.c_seventeen');
adicionarListeners('.C_eighteen', '.c_eighteen');


function copyContent(element) {
    var destinationCell = document.getElementById('destinationCell');
    var clone = element.cloneNode(true);
    clone.style.width = '140px'; 
    clone.style.height = '140px';

    var innerDivs = clone.querySelectorAll('.innerDiv');
    innerDivs.forEach(function (innerDiv, index) {
      innerDiv.style.fontSize = index === 0 ? '16px' : (index === 1 ? '60px' : '18px');
    });

    destinationCell.innerHTML = '';
    destinationCell.appendChild(clone);
  }
  
  function resetDestination() {
    var destinationCell = document.getElementById('destinationCell');
    destinationCell.innerHTML = '';
  }