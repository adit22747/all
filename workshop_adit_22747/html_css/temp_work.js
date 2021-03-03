
            function home(){
                document.getElementById('value').innerHTML="We deliver value scientifically through a data-driven model of operational excellence and a sharp focus on using new-age technologies to provide seamless services and dependable deliveries.As a leader in the technology and product engineering space, we work with some of the world's best Independent Software Vendors (ISVs). Our solutions are focused on modern technologies, and are enabled by a scientific, data-driven system called DecisionMines™ for Digital Excellence. This unique model de-risks our approach, provides better predictability, and ensures a better value per unit cost to our clients.";
            
                var image_x = document.getElementById('extra');
                image_x.parentNode.removeChild(image_x);
            }

            function prod(){
                document.getElementById('value').innerHTML="<ul><li>Skill assessment engine</li><li>hackerrail</li><li>tech recruitment solution</li><li>Customer intelligence tools</li><li>Business Intelligence tools</li></ul>";
                var elem = document.createElement("img");
                elem.setAttribute("src", "./skills.png");
                elem.setAttribute("height", "768");
                elem.setAttribute("width", "1024");
                elem.setAttribute('id','extra');

                document.getElementById("add_on").appendChild(elem);
                
            
            }

            function ser(){
                document.getElementById('value').innerHTML="Our services include business technology , consulting services, product enginnering services, training services, online course process services, business & knowledge process services."
                var image_x = document.getElementById('extra');
                image_x.parentNode.removeChild(image_x);
            
            }

            function con(){
                document.getElementById('value').innerHTML="<ul style='list-style-type:none;'><li>Address:12, saragarsan circle, ahmedabad-sarkhej highway, gandhinagar</li><li>Phone no:02658595726</li><li>Email address:einquriy@einfo.com</li>";
            
                var image_x = document.getElementById('extra');
                image_x.parentNode.removeChild(image_x);
            
            }
     