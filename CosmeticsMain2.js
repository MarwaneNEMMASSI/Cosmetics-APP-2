    let nom = document.getElementById("ProductName").value;
    let nomDemarque = document.getElementById("ListeDeMarques").options[document.getElementById("ListeDeMarques").selectedIndex].text;
    let prix = document.getElementById("Prix").value;
    let date = document.getElementById("Date").value;
    let typeDeproduit = document.getElementById("TypesDeProduits").options[document.getElementById("TypesDeProduits").selectedIndex].text;
    let Action = ""
    let promotion
    let checkNom = /^[a-zA-Z\s]{1,30}$/

    document.getElementById("ListeDeMarques").addEventListener('change', function ListeDeMarquesValidation(){

        if(document.getElementById("ListeDeMarques").selectedIndex == 0)
        {
            document.getElementById("ListeDeMarques").classList.add("invalid")
            document.getElementById("ListeDeMarques").classList.remove("valid")
        }
        else
            {
                document.getElementById("ListeDeMarques").classList.add("valid")
                document.getElementById("ListeDeMarques").classList.remove("invalid")
            }
    })

    document.getElementById("TypesDeProduits").addEventListener('change', function TypeDeProduitsValidation(){

        if(document.getElementById("TypesDeProduits").selectedIndex == 0)
        {
            document.getElementById("TypesDeProduits").classList.add("invalid")
            document.getElementById("TypesDeProduits").classList.remove("valid")
        }
        else
            {
                document.getElementById("TypesDeProduits").classList.add("valid")
                document.getElementById("TypesDeProduits").classList.remove("invalid")
            }
    })
    
    document.getElementById("Prix").addEventListener('input', function PriceValidation(){
        let prix = document.getElementById("Prix").value;
        if(prix != "")
            {
                document.getElementById("Prix").classList.add("valid")
                document.getElementById("Prix").classList.remove("invalid")   
            }
            else
                {
                    document.getElementById("Prix").classList.add("invalid")
                    document.getElementById("Prix").classList.remove("valid")
                    Y = false  
                }       
    })

    document.getElementById("Date").addEventListener('change', function DateValidation(){
        let date = document.getElementById("Date").value;
        if(!date)
            {
                document.getElementById("Date").classList.add("invalid")
                document.getElementById("Date").classList.remove("valid")
            }
            else
                {
                    document.getElementById("Date").classList.add("valid")
                    document.getElementById("Date").classList.remove("invalid")
                }
    })

document.getElementById("ProductName").addEventListener('input', function NameValidation(){
    
    let checkNom = /^[a-zA-Z\s]{1,30}$/
    let nom = document.getElementById("ProductName").value;

    if(!checkNom.test(nom))
    {
        document.getElementById("ProductName").classList.remove("valid")
        document.getElementById("ProductName").classList.add("invalid")
    }
        else
            {
                document.getElementById("ProductName").classList.remove("invalid")
                document.getElementById("ProductName").classList.add("valid")
            }
})

document.getElementById("ajouter").addEventListener('click', function Add(){
    
    let nom = document.getElementById("ProductName").value;
    let nomDemarque = document.getElementById("ListeDeMarques").options[document.getElementById("ListeDeMarques").selectedIndex].text;
    let prix = document.getElementById("Prix").value;
    let date = document.getElementById("Date").value;
    let typeDeproduit = document.getElementById("TypesDeProduits").options[document.getElementById("TypesDeProduits").selectedIndex].text;
    let Action = ""
    let promotion

    if(document.getElementById("oui").checked)
        {
            promotion = "Oui"
        }
        else if(document.getElementById("non").checked)
            {
                promotion = "Non"
            } 
    
    let Tableau = [nom, nomDemarque, prix, date, typeDeproduit, promotion, Action]
    if(document.getElementById("ProductName").classList.contains("valid") && promotion != undefined && nomDemarque != document.getElementById("ListeDeMarques").options[0] && typeDeproduit != document.getElementById("TypesDeProduits").options[0] && prix != "" && date != "")
    {
        for( let j = 0; j < 1; j++)
        {
            let TableBody = document.getElementById("body")
            let i = 0;
            let row = document.createElement("tr")

            for( i = 0; i <= 6; i++)
                {
                    let cell = document.createElement("td")
                    let TableData = document.createTextNode(Tableau[i])
                    let ModifyButton = document.createElement("button")
                    ModifyButton.innerHTML = "Modify"
                    ModifyButton.classList.add("modify")
                    let DeleteButton = document.createElement("button")
                    DeleteButton.innerHTML = "Delete"
                    DeleteButton.classList.add("delete")

                    if(i == 6)
                    {
                        
                        cell.appendChild(ModifyButton)
                        cell.appendChild(DeleteButton)
                        
                        
                    }

                    cell.appendChild(TableData)
                    row.appendChild(cell)
                }
                TableBody.appendChild(row)

                
        }
                
                document.getElementById("formulaire").reset()
                document.getElementById("AddButtonErrorMessage").innerHTML =""       
    }
        else
            {
                document.getElementById("AddButtonErrorMessage").innerHTML = "Veuillez remplir tous les champs"
            }
})

function deleteRow(e)
{
if(e.target.classList.contains("delete"))
    {
    let btn = e.target;
    btn.closest("tr").remove()
    }
}
let TableElement = document.querySelector("tbody")
TableElement.addEventListener('click', deleteRow)

function modifyRow(e)
{
    let Tableau2 = []
    let btn = e.target


    if(e.target.classList.contains("modify"))
       
    btn.closest("tr").classList.add("targeted")
    document.getElementById("modifier").classList.remove("display")

    for(let i = 0; i <= 5; i++)
    {   
        Tableau2.push(btn.closest("tr").cells[i].innerHTML)
    }
        document.getElementById("ProductName").value = Tableau2[0]
        document.getElementById("ListeDeMarques").options[document.getElementById("ListeDeMarques").selectedIndex].text = Tableau2[1]
        document.getElementById("Prix").value = Tableau2[2]
        document.getElementById("Date").value = Tableau2[3]
        document.getElementById("TypesDeProduits").options[document.getElementById("TypesDeProduits").selectedIndex].text = Tableau2[4]
        if(Tableau2[5] == "Oui")
            {
                document.getElementById("oui").checked = true
            }
            else if(Tableau2[5] == "Non")
                {
                    document.getElementById("non").checked = true
                }

        document.getElementById("modifier").addEventListener('click', function remodify(){
            let promotion
            let nomDemarque = document.getElementById("ListeDeMarques").options[document.getElementById("ListeDeMarques").selectedIndex].text;
            let prix = document.getElementById("Prix").value;
            let date = document.getElementById("Date").value;
            let typeDeproduit = document.getElementById("TypesDeProduits").options[document.getElementById("TypesDeProduits").selectedIndex].text;
            
        if(document.getElementById("oui").checked)
            {
                promotion = "Oui"
            }
            else if(document.getElementById("non").checked)
                {
                    promotion = "Non"
                } 
   
            if(btn.closest("tr").classList.contains("targeted") && document.getElementById("ProductName").classList.contains("valid") && promotion != undefined && nomDemarque != document.getElementById("ListeDeMarques").options[0] && typeDeproduit != document.getElementById("TypesDeProduits").options[0] && prix != "" && date != "")
            {
                btn.closest("tr").cells[0].innerHTML = document.getElementById("ProductName").value
                btn.closest("tr").cells[1].innerHTML = document.getElementById("ListeDeMarques").options[document.getElementById("ListeDeMarques").selectedIndex].text
                btn.closest("tr").cells[2].innerHTML = document.getElementById("Prix").value
                btn.closest("tr").cells[3].innerHTML = document.getElementById("Date").value
                btn.closest("tr").cells[4].innerHTML = document.getElementById("TypesDeProduits").options[document.getElementById("TypesDeProduits").selectedIndex].text 
                btn.closest("tr").cells[5].innerHTML = promotion

                btn.closest("tr").classList.remove("targeted")
                document.getElementById("ModifyButtonErrorMessage").innerHTML = ""
                document.getElementById("modifier").classList.add("display")
            }
            else
            {
                document.getElementById("ModifyButtonErrorMessage").innerHTML = "Veuillez remplir tous les champs"
            }
        
    })
}
TableElement.addEventListener('click', modifyRow)