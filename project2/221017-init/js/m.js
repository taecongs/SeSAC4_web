const smf = {
    init : function(){
        this.vi.init();
    },
    vi : {
        init : function(){
            this.anima();
        },
        anima : function(){

            let f,t;

            t = gsap.timeline();

            gsap.set('.s01 .ff',{scale:0});
            gsap.set('.s01 .b_03',{yPercent:100});
            gsap.set('.s01 .b_01',{scale:0});
            gsap.set('.s01 .b_02',{scale:0});
            gsap.set('.s01 .tbx .im',{y:40,opacity:0});
            gsap.set('.s01 .tbx p',{y:40,opacity:0});
            gsap.set('.s01 .tbx h2',{y:40,opacity:0});

            t.to('.s01 .b_03',
                {
                    yPercent:0,
                    transformOrigin : 'bottom center',
                    duration : .6,
                    delay : .3
                }
            )
            .to('.s01 .b_02',
                {
                    scale:1,
                    transformOrigin : 'bottom center',
                    duration : .6,
                }
            )
            .to('.s01 .b_01',
                {
                    scale:1,
                    transformOrigin : 'bottom center',
                    duration : .6,
                }
            )
            .to('.s01 .tbx .im',
                {
                    y:0,
                    opacity:1,
                    duration : .6,
                },
                "mylabel"
            )
            .to('.s01 .tbx p',
                {
                    y:0,
                    opacity:1,
                    duration : .6,
                },
                "mylabel+=.2"
            )
            .to('.s01 .tbx h2',
                {
                    y:0,
                    opacity:1,
                    duration : .6,
                },
                "mylabel+=.4"
            );

            f = gsap.timeline({
                delay : t.duration(),
                // yoyo : true,
                repeat : -1,
                repeatDelay : 3,
            });
            
            f.to('.s01 .firework .f_01',
                {
                    scale:1,
                    duration : .6,
                }
            )
            .to('.s01 .firework .f_03',
                {
                    scale:1,
                    duration : .6,
                }
            )
            .to('.s01 .firework .f_02',
                {
                    scale:1,
                    duration : .6,
                }
            )
            .to('.s01 .firework .f_04',
                {
                    scale:1,
                    duration : .6,
                }
            )
            .to('.s01 .firework .f_01',
                {
                    scale:0,
                    duration : .6,
                    delay : 3,
                },
                'mylabel'
            )
            .to('.s01 .firework .f_03',
                {
                    scale:0,
                    duration : .6,
                    delay : 3,
                },
                'mylabel'
            )
            .to('.s01 .firework .f_02',
                {
                    scale:0,
                    duration : .6,
                    delay : 3,
                },
                'mylabel'
            )
            .to('.s01 .firework .f_04',
                {
                    scale:0,
                    duration : .6,
                    delay : 3,
                },
                'mylabel'
            )

        }
    }
}