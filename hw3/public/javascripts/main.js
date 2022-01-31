$(document).ready(function(){
    // this hides the order conformation message until the order button is pressed
    $(function(){
        $("#orderConfirmation").hide();
    });

    //this function runs when the order button 
    $("#orderButton").click(function(){
        
        // puts all text input, quantity, and instructions into variables
        let instructions = $("#notes").val();
        let quantity = $("#option").val();
        let toppings = $('input[name = "toppings"]:checked').val();

        //Informs the customer that that the product contains dairy the word vegan is detected
        if(instructions.includes("vegan")){
            alert("Warning this product contains dairy!");
        }
        //Displays the order details if the user does not request dairy
        else{
            $("#submissionInputs").slideUp(600);
            $("#orderConfirmation").delay(600).slideDown(600);
            
            $("#Topping_Details").text("Topping Details: " + toppings);
            
            $("#Quantity_Details").text("Quantity Details: " + quantity);
            
            $("#Instruction_Details").text("Instructions Details: " + instructions);
        }  
    })

    //changes the text of the button to the selected month
    $(".month").click(function(){
        let month = $(this).text();
        $("#monthButton").text(month);
    })


})