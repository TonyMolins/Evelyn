        /**
         * Created by LABUSER on 8/25/2015.
         */
        var myFirebaseRef = new Firebase("https://boiling-fire-3557.firebaseio.com/");
        var thingy = function(){};
        $(function() {
            $('form').submit(function() {
                name = $('#name').val();
                height = $('#height').val();
                gender = $('#gender').val();
                weight = $('#weight').val();
                hairColor = $('#hairColor').val();
                dateBorn = $('#dateBorn').val();
                timeBorn = $('#timeBorn').val();
                eyeColor = $('#eyeColor').val();
                console.log(gender);
                event.preventDefault();

                myFirebaseRef.push({
                    answers: {
                        aName: name,
                        gender: gender,
                        height: height,
                        weight: weight,
                        hairColor: hairColor,
                        dateBorn: dateBorn,
                        timeBorn: timeBorn,
                        eyeColor: eyeColor
                    }
                },
                    function(error, dummy){
                        if (error) throw error;
                        else window.location = "http://timtrousdale.github.io/Evelynn/success";
                    });
            });
        });

