const BLOCO_A = /[SAL]-\d\d\d-[0123]/i;
const BLOCO_A2 = /[SAL]\d\d\d-[0123]/i;
const BLOCO_B = /[SAL]\d\d\d/i;

const reset = () => {
    ["A", "B"].forEach((x) => {
        $("#bloco" + x).text("Bloco " + x);
        $("#bloco" + x).css('background-color', 'initial');
    });

    ["1", "2", "3"].forEach((x) => {
        $("#torre" + x).text("Torre " + x);
        $("#torre" + x).css('background-color', 'initial');
    });
};

$(document).ready(() => {
    $("#update").on('click', () => {
        reset();

        const sala = $("#salaText").val();

        if(BLOCO_A.test(sala)) {
            const andar = sala.split('-')[1].charAt(0);
            const torre = sala.split('-')[2];

            if(torre != "0") {
                $("#torre" + torre).css({
                    transition: 'background-color 0.5s ease-in-out',
                    "background-color": "#4db6ac"
                });

                $("#torre" + torre).text("Torre " + torre + ", Andar " + andar);
            } else {
                $("#blocoA").css({
                    transition: 'background-color 0.5s ease-in-out',
                    "background-color": "#4db6ac"
                });
                $("#blocoA").text("Bloco A, Andar " + andar);
            }
        } else if (BLOCO_A2.test(sala)) {
            const andar = sala.split('-')[0].charAt(1);
            const torre = sala.split('-')[1];

            if(torre != "0") {
                $("#torre" + torre).css({
                    transition: 'background-color 0.5s ease-in-out',
                    "background-color": "#4db6ac"
                });

                $("#torre" + torre).text("Torre " + torre + ", Andar " + andar);
            } else {
                $("#blocoA").css({
                    transition: 'background-color 0.5s ease-in-out',
                    "background-color": "#4db6ac"
                });
                $("#blocoA").text("Bloco A, Andar " + andar);
            }
        } else if(BLOCO_B.test(sala)) {
            const andar = sala.charAt(1);
            $("#blocoB").css({
                transition: 'background-color 0.5s ease-in-out',
                "background-color": "#4db6ac"
            });
            $("#blocoB").text("Bloco B, Andar " + andar);
        } else {
            alert("Não foi possível decifrar o nome da sala! >:(");
        }
    });
});
