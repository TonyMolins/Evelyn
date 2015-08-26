        /**
         * Created by LABUSER on 8/25/2015.
         */
        $(document).ready(function() {
            var myFirebaseRef = new Firebase("https://boiling-fire-3557.firebaseio.com/");
            var thingy = function () {
            };
            $("#name").focus(function () {
                $('.blank, .height, .gender, .weight, .hairColor, .dateBorn, .timeBorn, .eyeColor').css({display: "none"});
                $('.name').css({display: "inline-block"});
            });
            $("#height").focus(function () {
                $('.blank, .name, .gender, .weight, .hairColor, .dateBorn, .timeBorn, .eyeColor').css({display: "none"});
                $('.height').css({display: "inline-block"});
            });
            $("#gender").focus(function () {
                $('.blank, .height, .name, .weight, .hairColor, .dateBorn, .timeBorn, .eyeColor').css({display: "none"});
                $('.gender').css({display: "inline-block"});
            });
            $("#weight").focus(function () {
                $('.blank, .height, .gender, .name, .hairColor, .dateBorn, .timeBorn, .eyeColor').css({display: "none"});
                $('.weight').css({display: "inline-block"});
            });
            $("#hairColor").focus(function () {
                $('.blank, .height, .gender, .weight, .name, .dateBorn, .timeBorn, .eyeColor').css({display: "none"});
                $('.hairColor').css({display: "inline-block"});
            });
            $("#dateBorn").focus(function () {
                $('.blank, .height, .gender, .weight, .hairColor, .name, .timeBorn, .eyeColor').css({display: "none"});
                $('.dateBorn').css({display: "inline-block"});
            });
            $("#timeBorn").focus(function () {
                $('.blank, .height, .gender, .weight, .hairColor, .dateBorn, .name, .eyeColor').css({display: "none"});
                $('.timeBorn').css({display: "inline-block"});
            });
            $("#eyeColor").focus(function () {
                $('.blank, .height, .gender, .weight, .hairColor, .dateBorn, .timeBorn, .name').css({display: "none"});
                $('.eyeColor').css({display: "block"});
            });


            $(function () {
                $('form').submit(function () {
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
                        function (error, dummy) {
                            if (error) {
                                $(".error").css({visibility: "visible"})
                            } else window.location = "http://timtrousdale.github.io/Evelynn/success";
                        });
                });
            });
        });

