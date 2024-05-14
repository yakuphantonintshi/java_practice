var friendsList = [];

        function addFriend() {
            // Get the entered name and last name
            let firstName = document.getElementById("firstName").value.trim();
            let lastName = document.getElementById("lastName").value.trim();

            // Check if both fields are filled
            if (firstName !== "" && lastName !== "") {
                // Create an object with the name and last name
                let friend = {
                    firstName: firstName,
                    lastName: lastName
                };

                // Push the friend object into the friendsList array
                friendsList.push(friend);

                // Log the updated friendsList (for demonstration)
                console.log("Friends List:", friendsList);

                // Clear the input fields
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";

            }
        }

        function clearFields() {
            // Clear the input fields
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
        }