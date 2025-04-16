const mockTests = {
    "JEE Main": {
        questions: [
            {
                question: "What is the value of sin(90°)?",
                options: ["0", "0.5", "1", "-1"],
                answer: "1"
            },
            {
                question: "The unit of resistance is?",
                options: ["Ohm", "Ampere", "Volt", "Watt"],
                answer: "Ohm"
            }
        ]
    },
    "EAMCET": {
        questions: [
            {
                question: "Which gas is used in the manufacture of urea?",
                options: ["Oxygen", "Ammonia", "Carbon dioxide", "Nitrogen"],
                answer: "Ammonia"
            },
            {
                question: "Speed = Distance / ____?",
                options: ["Mass", "Time", "Area", "Volume"],
                answer: "Time"
            }
        ]
    },
    "NEET": {
        questions: [
            {
                question: "Which part of the brain controls breathing?",
                options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
                answer: "Medulla oblongata"
            },
            {
                question: "Which blood cells help in clotting?",
                options: ["RBC", "WBC", "Platelets", "Plasma"],
                answer: "Platelets"
            }
        ]
    },
    "CLAT": {
        questions: [
            {
                question: "Which Article of the Constitution provides Right to Equality?",
                options: ["Article 14", "Article 21", "Article 19", "Article 370"],
                answer: "Article 14"
            },
            {
                question: "Which is the highest court in India?",
                options: ["High Court", "District Court", "Supreme Court", "Session Court"],
                answer: "Supreme Court"
            }
        ]
    },
    "NCHM JEE": {
        questions: [
            {
                question: "Which of these is a cold soup?",
                options: ["Minestrone", "Gazpacho", "Tom Yum", "Miso"],
                answer: "Gazpacho"
            },
            {
                question: "The term ‘al dente’ is associated with which type of food?",
                options: ["Rice", "Pasta", "Bread", "Soup"],
                answer: "Pasta"
            }
        ]
    },
    "VITEEE": {
        questions: [
            {
                question: "If the distance between the planes 8x+12y−14z=2 and 4x+6y−7z=2 can be expressed as 1/√N, then the value of N(N+1)/2 is",
                options: ["4950", "5050", "5150", "5151"],
                answer: "5151"
            },
            {
                question: "The value of 'a' for which the lines (x−2)/1 = (y−9)/2 = (z−13)/1 and (x−a)/−1 = (y−7)/2 = (z+2)/−3 intersect is",
                options: ["-5", "3", "5", "2"],
                answer: "3"
            },
            {
                question: "If the points (1,2,3) and (2,−1,0) lie on the opposite sides of the plane 2x+3y−2z=k then?",
                options: ["1<k<2", "k>2", "k<1 or k>2", "k<1"],
                answer: "1<k<2"
            },
            {
              question: "In a hurdle race, a player has to cross 10 hurdles. The probability that he will clear each hurdle is 5/6. Then, the probability that he will knock down fewer than 2 hurdles is?",
              options: ["5^9/(2x6^9)", "5^10/(2x6^10)", "5^9/(2x6^10)", "5^10/(2x6^9)"],
              answer: "5^10/(2x6^9)"
            },
            {
              question: "If X follows Binomial distribution with mean 3 and variance 2, then P(X≥8) is equal to:",
              options: ["17/3^9", "18/3^9", "19/3^9", "20/3^9"],
              answer: "19/3^9"
            },
            {
              question: "It is given that the events A and B are such that P(A)=1/4, P(A|B)=1/2 and P(B|A)=2/3. Then P(B) is",
              options: ["1/6", "1/2", "1/4", "1/3"],
              answer: "1/3"
            },
            {
              question: "The volume of the parallelepiped whose edges are represented by a = 2i−3j+4k, b = i+2j−k and c = 3i−j+2k is",
              options: ["7", "9", "6", "5"],
              answer: "7"
            },
            {
              question: "If ((a×b)×(c×d))·(a×d)=0, then which of the following is always true?",
              options: [
                "a, b, c, d are necessarily coplanar",
                "either a or d must lie in the plane of b and c",
                "either b or c must lie in the plane of a and d",
                "either a or b must lie in the plane of c and d"
              ],
              answer: "either b or c must lie in the plane of a and d"
            },
            {
              question: "Solve: (D² + 6D + 8)y = e^(−2x)",
              options: [
                "y = Ae^4x + Be^2x + (1/2)xe^(−2x)",
                "y = Ae^4x − Be^−2x + (1/2)xe^(−2x)",
                "y = Ae^4x − Be^−2x + 12xe^(−2x)",
                "y = Ae^(−4x) + Be^(−2x) + (1/2)xe^(−2x)"
              ],
              answer: "y = Ae^(−4x) + Be^(−2x) + (1/2)xe^(−2x)"
            },
            {
              question: "1 Joule in a system with unit mass = 10kg, length = 1km, time = 1min is equal to?",
              options: ["360", "3.6", "3.6 x 10^5", "3.6 x 10^-5"],
              answer: "3.6 x 10^-5"
            },
            {
              question: "Two bodies are projected at 30° and 60°. Ratio of their horizontal ranges?",
              options: ["1:1", "1:2", "2:3", "2:5"],
              answer: "1:1"
            },
            {
              question: "Identify the correct statement.",
              options: [
                "Static friction depends on area of contact",
                "Kinetic friction depends on area of contact",
                "Coeff. of kinetic friction > static friction",
                "Coeff. of kinetic friction < static friction"
              ],
              answer: "Coeff. of kinetic friction < static friction"
            },
            {
              question: "Work done in moving a charge of 2×10⁸ C across 36V is?",
              options: ["7.2x10⁹", "72x10⁹", "7.2x10³", "72x10³"],
              answer: "7.2x10⁹"
            },
            {
              question: "Which acid is found in vinegar?",
              options: ["Hydrochloric", "Citric", "Acetic", "Nitric"],
              answer: "Acetic"
            },
            {
              question: "pH of neutral solution is?",
              options: ["0", "7", "14", "1"],
              answer: "7"
            },
            {
              question: "Choose the correct spelling:",
              options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
              answer: "Accommodate"
            },
            {
              question: "Antonym of 'honest'?",
              options: ["Truthful", "Sincere", "Liar", "Dishonest"],
              answer: "Dishonest"
            },
            {
              question: "Fill in the blank: She _____ to school every day.",
              options: ["go", "goes", "going", "gone"],
              answer: "goes"
            },
            {
              question: "What is the plural of 'mouse'?",
              options: ["Mouses", "Mouse", "Mice", "Mices"],
              answer: "Mice"
            },
            {
              question: "What is the Turing Test used to measure?",
              options: ["Memory", "Intelligence", "Machine learning", "Robotics"],
              answer: "Intelligence"
            },
            {
              question: "Which language is most used for AI?",
              options: ["Python", "C", "Java", "HTML"],
              answer: "Python"
            },
            {
              question: "AI stands for?",
              options: ["Artificial Instinct", "Automated Intelligence", "Artificial Intelligence", "Auto Info"],
              answer: "Artificial Intelligence"
            },
            {
              question: "Who is known as the father of AI?",
              options: ["Turing", "John McCarthy", "Einstein", "Newton"],
              answer: "John McCarthy"
            },
            {
              question: "Which is an application of AI?",
              options: ["Washing machine", "Siri", "Light bulb", "Hammer"],
              answer: "Siri"
            }
          ],
          timer: 120
        }
      };