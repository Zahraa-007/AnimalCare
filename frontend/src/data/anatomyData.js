export const dogAnatomyData = {
  animal: "dog",
  bodyParts: [
    {
      id: "head",
      name: "Head",
      description:
        "The head contains important sensory structures, the skull, and the upper airway. It helps a dog process smell, sound, vision, and communication.",
      availableLayers: ["Skin", "Bones", "Nerves"],
      layers: [
        {
          id: "skin",
          name: "Skin",
          description:
            "The skin forms a protective covering and helps regulate temperature and keep tissues safe from minor injuries.",
          structures: [
            {
              id: "muzzle",
              name: "Muzzle",
              whatIs:
                "The muzzle is the front part of the head around the nose and mouth.",
              function:
                "It helps with scent detection, eating, breathing, and communication.",
              commonInjuries: [
                "Minor cuts",
                "Bruising from impact",
                "Skin irritation",
              ],
              commonProblems: [
                "Dry skin",
                "Cracks",
                "Sensitivity around the nose",
              ],
            },
            {
              id: "nose",
              name: "Nose",
              whatIs: "The nose is the dog’s most sensitive scent organ.",
              function:
                "It helps detect smells and supports airflow and environmental awareness.",
              commonInjuries: ["Minor abrasions", "Cold-weather irritation"],
              commonProblems: ["Dry nose", "Crustiness", "Excessive swelling"],
            },
          ],
        },
        {
          id: "bones",
          name: "Bones",
          description:
            "The skull and facial bones protect the brain and support essential sensory structures.",
          structures: [
            {
              id: "skull",
              name: "Skull",
              whatIs:
                "The skull is the bony framework that protects the brain and supports the face.",
              function:
                "It provides protection, structure, and attachment points for muscles.",
              commonInjuries: [
                "Fractures from trauma",
                "Bruising around the skull",
              ],
              commonProblems: [
                "Congenital anomalies",
                "Dental alignment issues",
              ],
            },
            {
              id: "jaw",
              name: "Jaw",
              whatIs:
                "The jaw includes the lower and upper mouth bones used for chewing and gripping.",
              function:
                "It supports eating, biting, and strong muscle attachment.",
              commonInjuries: ["Tooth fractures", "Jaw strain", "Minor trauma"],
              commonProblems: [
                "Dental disease",
                "Alignment issues",
                "Pain with chewing",
              ],
            },
          ],
        },
        {
          id: "nerves",
          name: "Nerves",
          description:
            "Nerves carry signals for sensation, movement, and reflex responses in the head and face.",
          structures: [
            {
              id: "cranial-nerves",
              name: "Cranial Nerves",
              whatIs:
                "These nerves support smell, vision, hearing, and facial movement.",
              function:
                "They transmit information between the brain and the sensory organs.",
              commonInjuries: ["Nerve irritation", "Trauma-related changes"],
              commonProblems: [
                "Facial weakness",
                "Reduced sensation",
                "Balance changes",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "neck",
      name: "Neck",
      description:
        "The neck connects the head to the body and supports movement, airway control, and balance during movement.",
      availableLayers: ["Skin", "Muscles", "Bones"],
      layers: [
        {
          id: "skin",
          name: "Skin",
          description:
            "The neck skin protects the surface and allows flexible movement without friction.",
          structures: [
            {
              id: "neck-skin",
              name: "Neck Skin",
              whatIs: "The skin over the neck is a flexible protective layer.",
              function:
                "It covers tissues and helps with temperature regulation.",
              commonInjuries: ["Scratches", "Abrasions", "Bites"],
              commonProblems: ["Dryness", "Irritation", "Skin folds"],
            },
          ],
        },
        {
          id: "muscles",
          name: "Muscles",
          description:
            "The neck muscles support head movement and help stabilize the head and shoulders.",
          structures: [
            {
              id: "sternocephalicus",
              name: "Sternocephalicus",
              whatIs: "A major neck muscle group involved in head movement.",
              function: "It helps lower and flex the head and neck.",
              commonInjuries: ["Strain", "Minor tears"],
              commonProblems: [
                "Pain with movement",
                "Stiffness",
                "Reduced flexibility",
              ],
            },
          ],
        },
        {
          id: "bones",
          name: "Bones",
          description:
            "The cervical vertebrae form the support system of the neck and protect the spinal cord.",
          structures: [
            {
              id: "cervical-vertebrae",
              name: "Cervical Vertebrae",
              whatIs:
                "The neck bones that support the head and protect the upper spinal cord.",
              function:
                "They help support the head and allow flexible movement.",
              commonInjuries: [
                "Whiplash-like strain",
                "Fractures",
                "Dislocation",
              ],
              commonProblems: [
                "Pain with movement",
                "Neck stiffness",
                "Reduced mobility",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "chest",
      name: "Chest",
      description:
        "The chest contains the heart and lungs and provides a protective thoracic cage for major organs.",
      availableLayers: ["Skin", "Bones", "Organs"],
      layers: [
        {
          id: "skin",
          name: "Skin",
          description:
            "The chest skin protects the surface and provides flexibility over the rib cage.",
          structures: [
            {
              id: "thoracic-skin",
              name: "Thoracic Skin",
              whatIs: "The outer cover over the chest area.",
              function:
                "It protects soft tissue and helps regulate temperature.",
              commonInjuries: ["Scratches", "Bites", "Abrasions"],
              commonProblems: ["Dryness", "Skin folding", "Field irritation"],
            },
          ],
        },
        {
          id: "bones",
          name: "Bones",
          description:
            "The rib cage surrounds and protects the lungs, heart, and upper organs.",
          structures: [
            {
              id: "ribs",
              name: "Ribs",
              whatIs:
                "The rib bones form the chest wall and protect the thoracic organs.",
              function: "They protect vital organs and help with respiration.",
              commonInjuries: ["Fractures", "Stress fractures"],
              commonProblems: ["Pain with breathing", "Limited chest movement"],
            },
          ],
        },
        {
          id: "organs",
          name: "Organs",
          description:
            "The chest houses the heart and lungs, which are central to circulation and breathing.",
          structures: [
            {
              id: "heart",
              name: "Heart",
              whatIs:
                "The heart is the muscular organ that pumps blood around the body.",
              function:
                "It maintains circulation and delivers oxygen and nutrients.",
              commonInjuries: ["Trauma-associated injury", "Cardiac strain"],
              commonProblems: ["Weak circulation", "Exercise intolerance"],
            },
            {
              id: "lungs",
              name: "Lungs",
              whatIs:
                "The lungs are paired organs used for breathing and gas exchange.",
              function: "They bring in oxygen and release carbon dioxide.",
              commonInjuries: [
                "Pneumonia-related inflammation",
                "Pulmonary trauma",
              ],
              commonProblems: [
                "Labored breathing",
                "Reduced stamina",
                "Coughing",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "abdomen",
      name: "Abdomen",
      description:
        "The abdomen contains digestive organs, helps absorb nutrients, and supports body balance and movement.",
      availableLayers: ["Skin", "Muscles", "Organs"],
      layers: [
        {
          id: "skin",
          name: "Skin",
          description:
            "The abdominal skin protects the area while allowing flexibility and movement.",
          structures: [
            {
              id: "abdominal-skin",
              name: "Abdominal Skin",
              whatIs: "The outer skin covering the belly region.",
              function: "It protects tissues and supports temperature control.",
              commonInjuries: ["Scratches", "Bites", "Cuts"],
              commonProblems: ["Allergies", "Irritation", "Skin fold issues"],
            },
          ],
        },
        {
          id: "muscles",
          name: "Muscles",
          description:
            "Abdominal muscles support posture, trunk movement, and protection of internal organs.",
          structures: [
            {
              id: "abdominal-muscles",
              name: "Abdominal Muscles",
              whatIs: "The trunk muscles that support the abdomen and spine.",
              function:
                "They assist with posture, movement, and pressure control.",
              commonInjuries: ["Strain", "Tears"],
              commonProblems: [
                "Pain with movement",
                "Stiffness",
                "Reduced core control",
              ],
            },
          ],
        },
        {
          id: "organs",
          name: "Organs",
          description:
            "The abdomen contains several organs involved in digestion and nutrient processing.",
          structures: [
            {
              id: "stomach",
              name: "Stomach",
              whatIs: "The stomach stores and begins digesting food.",
              function:
                "It breaks down ingested food before it continues through the digestive tract.",
              commonInjuries: ["Gastric irritation", "Inflammation"],
              commonProblems: ["Upset stomach", "Vomiting", "Poor appetite"],
            },
            {
              id: "liver",
              name: "Liver",
              whatIs:
                "The liver is a large organ involved in digestion, metabolism, and detoxification.",
              function:
                "It processes nutrients and helps filter substances in the body.",
              commonInjuries: ["Trauma-related issues", "Inflammation"],
              commonProblems: ["Digestive disruption", "Poor energy levels"],
            },
          ],
        },
      ],
    },
    {
      id: "spine",
      name: "Spine",
      description:
        "The spine is the main support column for the body and protects the spinal cord, which carries nerve signals.",
      availableLayers: ["Bones", "Nerves", "Muscles"],
      layers: [
        {
          id: "bones",
          name: "Bones",
          description:
            "The vertebrae create the spinal column and protect the central nervous system.",
          structures: [
            {
              id: "vertebrae",
              name: "Vertebrae",
              whatIs: "The individual bones that form the spine.",
              function: "They support the body and protect the spinal cord.",
              commonInjuries: [
                "Compression injuries",
                "Fractures",
                "Displacement",
              ],
              commonProblems: ["Pain", "Limited movement", "Weakness"],
            },
          ],
        },
        {
          id: "nerves",
          name: "Nerves",
          description:
            "Spinal nerves carry messages between the brain and the rest of the body.",
          structures: [
            {
              id: "spinal-cord",
              name: "Spinal Cord",
              whatIs:
                "The main nerve pathway running through the vertebral column.",
              function: "It relays signals between the brain and the body.",
              commonInjuries: ["Compression", "Trauma", "Inflammation"],
              commonProblems: [
                "Weakness",
                "Reduced sensation",
                "Mobility changes",
              ],
            },
          ],
        },
        {
          id: "muscles",
          name: "Muscles",
          description:
            "Muscles alongside the spine help with posture, mobility, and core stability.",
          structures: [
            {
              id: "epaxial-muscles",
              name: "Epaxial Muscles",
              whatIs:
                "Muscles that run along the back and help support posture.",
              function: "They assist with spinal support and movement.",
              commonInjuries: ["Sprains", "Strain", "Tears"],
              commonProblems: [
                "Pain",
                "Reduced back flexibility",
                "Muscle tightness",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "frontLeg",
      name: "Front Leg",
      description:
        "The front leg supports weight-bearing, balance, and movement while helping the dog absorb impact during walking and running.",
      availableLayers: ["Bones", "Muscles", "Skin", "Organs"],
      layers: [
        {
          id: "bones",
          name: "Bones",
          description:
            "The forelimb bones provide structural support and help distribute force as the dog moves across the ground.",
          structures: [
            {
              id: "scapula",
              name: "Scapula",
              shortDescription:
                "The shoulder blade helps connect the forelimb to the body and supports movement of the shoulder region.",
              whatIs:
                "A flat shoulder blade bone that connects the forelimb to the trunk.",
              location:
                "Shoulder region, near the upper chest and forelimb base.",
              function:
                "It helps attach the foreleg to the body and supports shoulder movement and stability.",
              commonProblems: [
                "Fractures can occur with major trauma.",
                "Shoulder pain and stiffness can be associated with strain or injury.",
              ],
              educationalNote:
                "The scapula helps anchor the front limb to the body and allows smooth shoulder movement during walking and running.",
            },
            {
              id: "humerus",
              name: "Humerus",
              shortDescription:
                "The upper foreleg bone links the shoulder to the elbow and helps provide strength for weight-bearing.",
              whatIs: "The upper forelimb bone between the shoulder and elbow.",
              location: "Upper forelimb, between the shoulder and elbow joint.",
              function:
                "It provides support and leverage for movement, pushing, and bearing weight.",
              commonProblems: [
                "Fractures can occur after trauma.",
                "Joint or bone pain can be associated with stress or injury.",
              ],
              educationalNote:
                "The humerus is one of the main bones of the front limb and is important for the dog’s ability to support its body during movement.",
            },
            {
              id: "radius",
              name: "Radius",
              shortDescription:
                "The radius is a major lower forelimb bone that helps support the front leg during weight-bearing.",
              whatIs:
                "The main forearm bone that helps form the lower front leg.",
              location:
                "Lower forelimb, running from the elbow toward the paw.",
              function:
                "It supports weight-bearing and helps stabilize the lower forelimb as the dog steps.",
              commonProblems: [
                "Fractures can occur with trauma.",
                "Pain and limping can be associated with lower limb injury.",
              ],
              educationalNote:
                "The radius helps transfer force from the upper limb to the paw and is important for the dog’s stride and stability.",
            },
            {
              id: "ulna",
              name: "Ulna",
              shortDescription:
                "The ulna helps form the elbow area and contributes to forelimb stability and extension.",
              whatIs:
                "The forearm bone that runs alongside the radius and forms part of the elbow.",
              location:
                "Lower forelimb, alongside the radius and near the elbow joint.",
              function:
                "It contributes to elbow mechanics and helps support the forelimb during extension.",
              commonProblems: [
                "Fractures can occur with trauma.",
                "Elbow pain can be associated with strain or joint irritation.",
              ],
              educationalNote:
                "The ulna helps anchor the elbow joint and is important for smooth front-leg movement and support.",
            },
            {
              id: "carpal-bones",
              name: "Carpal bones",
              shortDescription:
                "These small wrist bones help absorb impact and give the front limb flexibility near the paw.",
              whatIs: "A group of small wrist bones in the lower front leg.",
              location: "Wrist or carpal region, between the forearm and paw.",
              function:
                "They help absorb impact and maintain flexibility and stability near the paw.",
              commonProblems: [
                "Sprains or minor fractures can occur with sudden twisting or impact.",
                "Pain in the wrist area can be associated with overuse or injury.",
              ],
              educationalNote:
                "The carpal bones act as a flexible joint region and help distribute forces when the dog lands or pushes off the ground.",
            },
            {
              id: "metacarpals",
              name: "Metacarpals",
              shortDescription:
                "These bones support the front paw and help distribute weight as the dog walks and runs.",
              whatIs:
                "The bones located in the front paw area that support the foot structure.",
              location: "Front paw area, between the wrist and toes.",
              function:
                "They help carry weight and support the paw during contact with the ground.",
              commonProblems: [
                "Fractures can occur with trauma.",
                "Pain while walking can be associated with a weight-bearing injury.",
              ],
              educationalNote:
                "The metacarpals help spread the body’s weight across the front paw and are important for balance and traction.",
            },
            {
              id: "phalanges",
              name: "Phalanges",
              shortDescription:
                "The toe bones help the paw grip and push off the ground during movement.",
              whatIs: "The toe bones in the front paw.",
              location: "Front toes and paw tips.",
              function:
                "They help the dog grip the ground and distribute force as it walks and runs.",
              commonProblems: [
                "Toe fractures or injuries can occur after trauma.",
                "Pain with pressure can be associated with strain or an injured toe.",
              ],
              educationalNote:
                "The phalanges are important for traction and stable weight transfer through the paw, especially during activity.",
            },
          ],
        },
        {
          id: "muscles",
          name: "Muscles",
          description:
            "Front-leg muscles help with movement, lifting, and stabilization of the shoulder and forearm.",
          structures: [],
        },
        {
          id: "skin",
          name: "Skin",
          description:
            "The skin on the forelimb helps protect soft tissues during contact with the ground and other surfaces.",
          structures: [],
        },
        {
          id: "organs",
          name: "Organs",
          description:
            "This area does not currently include organ-focused educational content in the first anatomy pass.",
          structures: [],
        },
      ],
    },
    {
      id: "hindLeg",
      name: "Hind Leg",
      description:
        "The hind leg provides propulsion, power, and stability, especially during running, jumping, and turning.",
      availableLayers: ["Bones", "Muscles", "Skin", "Organs"],
      layers: [
        {
          id: "bones",
          name: "Bones",
          description:
            "The hind-limb bones support powerful movement and help absorb the forces generated during motion.",
          structures: [
            {
              id: "femur",
              name: "Femur",
              shortDescription:
                "The femur is the main upper hind limb bone and helps power movement from the hip to the knee.",
              whatIs:
                "The upper hind-limb bone that connects the hip and knee.",
              location: "Upper hind limb, from the hip to the knee joint.",
              function:
                "It supports body weight and helps drive the body forward during movement.",
              commonProblems: [
                "Fractures can occur with major trauma.",
                "Pain and weakness can be associated with a hip or limb injury.",
              ],
              educationalNote:
                "The femur is a major weight-bearing bone in the hind limb and is important for propulsion and stability.",
            },
            {
              id: "patella",
              name: "Patella",
              shortDescription:
                "The kneecap helps protect the knee and supports the mechanics of the hind leg during extension.",
              whatIs: "The kneecap that helps protect the knee joint.",
              location: "Front of the knee joint in the hind limb.",
              function:
                "It improves leverage for knee extension and helps stabilize the knee joint.",
              commonProblems: [
                "Patellar luxation can occur and may cause abnormal knee movement.",
                "Fractures or knee pain can be associated with trauma or joint stress.",
              ],
              educationalNote:
                "The patella works with the knee joint to help the dog move efficiently and bear weight on the hind limb.",
            },
            {
              id: "tibia",
              name: "Tibia",
              shortDescription:
                "The tibia is a major lower hind limb bone that helps carry weight and support movement.",
              whatIs:
                "The main lower hind-limb bone that supports weight-bearing.",
              location: "Lower hind limb, between the knee and hock.",
              function:
                "It helps carry weight and support the leg during the stride.",
              commonProblems: [
                "Stress fractures or traumatic fractures can occur.",
                "Pain and limping can be associated with lower limb irritation or overload.",
              ],
              educationalNote:
                "The tibia is one of the key bones involved in hind-limb support and alignment, especially during movement.",
            },
            {
              id: "fibula",
              name: "Fibula",
              shortDescription:
                "The fibula helps support the lower hind limb and works with the tibia to maintain stability.",
              whatIs:
                "A smaller bone running alongside the tibia in the lower hind leg.",
              location: "Lower hind limb, alongside the tibia.",
              function: "It contributes to lower-leg stability and support.",
              commonProblems: [
                "Fractures or strain can occur with trauma.",
                "Instability or discomfort can be associated with lower limb injury.",
              ],
              educationalNote:
                "The fibula works with the tibia to help keep the lower hind limb stable when the dog pushes off the ground.",
            },
            {
              id: "tarsal-bones",
              name: "Tarsal bones",
              shortDescription:
                "These ankle and hock bones help absorb impact and support the hind paw during movement.",
              whatIs: "A group of bones in the ankle and hock region.",
              location: "Hock or ankle region, near the back of the hind limb.",
              function:
                "They help absorb impact and support movement through the hind paw.",
              commonProblems: [
                "Sprains and fractures can occur with trauma or sudden twisting.",
                "Swelling or reduced flexibility can be associated with hock injury.",
              ],
              educationalNote:
                "The tarsal bones help manage the forces generated when the dog lands and pushes off during activity.",
            },
            {
              id: "metatarsals",
              name: "Metatarsals",
              shortDescription:
                "These bones help form the hind paw and spread weight as the dog steps.",
              whatIs:
                "The bones located in the hind paw area that help form the foot.",
              location: "Hind paw area, between the hock and toes.",
              function:
                "They distribute body weight and help with traction during stepping.",
              commonProblems: [
                "Fractures can occur with trauma.",
                "Pain while walking can be associated with weight-bearing injury.",
              ],
              educationalNote:
                "The metatarsals help transfer force from the leg to the ground and are important for balance during movement.",
            },
            {
              id: "phalanges",
              name: "Phalanges",
              shortDescription:
                "The toe bones help the hind paw grip and support push-off during motion.",
              whatIs: "The toe bones in the hind paw.",
              location: "Hind toes and paw tips.",
              function:
                "They support traction and balance during movement and weight transfer.",
              commonProblems: [
                "Toe fractures or pressure injuries can occur after trauma.",
                "Pain with pressure can be associated with a toe or paw injury.",
              ],
              educationalNote:
                "The phalanges contribute to grip and stable contact with the ground, especially when the dog accelerates or turns.",
            },
          ],
        },
        {
          id: "muscles",
          name: "Muscles",
          description:
            "Hind-limb muscles provide power for pushing off the ground and stabilizing the body.",
          structures: [],
        },
        {
          id: "skin",
          name: "Skin",
          description:
            "The skin around the hind leg provides protection and helps manage contact with surfaces.",
          structures: [],
        },
        {
          id: "organs",
          name: "Organs",
          description:
            "This area does not currently include organ-focused educational content in the first anatomy pass.",
          structures: [],
        },
      ],
    },
    {
      id: "paws",
      name: "Paws",
      description:
        "Paws provide traction, balance, and cushioning while a dog walks, runs, and explores the ground.",
      availableLayers: ["Skin", "Bones", "Nerves"],
      layers: [
        {
          id: "skin",
          name: "Skin",
          description:
            "The paw skin is designed for traction and protection against rough surfaces.",
          structures: [
            {
              id: "paw-pad",
              name: "Paw Pads",
              whatIs: "The thick cushioning pads on the bottom of the paws.",
              function: "They absorb impact and provide traction.",
              commonInjuries: ["Burns", "Cracks", "Cuts"],
              commonProblems: ["Soreness", "Dryness", "Surface irritation"],
            },
          ],
        },
        {
          id: "bones",
          name: "Bones",
          description:
            "Paw bones help support body weight and provide structure across the foot.",
          structures: [
            {
              id: "metacarpals",
              name: "Metacarpals",
              whatIs: "The bones that form the front part of the paw.",
              function:
                "They support the paw and help transfer force from the limb.",
              commonInjuries: ["Fractures", "Bruising"],
              commonProblems: ["Lameness", "Pain while walking"],
            },
          ],
        },
        {
          id: "nerves",
          name: "Nerves",
          description:
            "Nerves in the paw provide sensation that helps dogs feel the ground and detect pressure.",
          structures: [
            {
              id: "digital-nerves",
              name: "Digital Nerves",
              whatIs: "Sensory nerves in the toes and paw area.",
              function: "They help the dog feel pressure, texture, and pain.",
              commonInjuries: ["Nerve irritation", "Trauma"],
              commonProblems: ["Reduced sensation", "Pain with pressure"],
            },
          ],
        },
      ],
    },
    {
      id: "tail",
      name: "Tail",
      description:
        "The tail helps with balance, communication, and movement while a dog turns or changes direction.",
      availableLayers: ["Skin", "Muscles", "Bones"],
      layers: [
        {
          id: "skin",
          name: "Skin",
          description:
            "Tail skin is flexible and protective, allowing movement without irritation.",
          structures: [
            {
              id: "tail-skin",
              name: "Tail Skin",
              whatIs: "The skin covering the tail shaft and tip.",
              function:
                "It protects underlying tissues during movement and contact.",
              commonInjuries: ["Cuts", "Abrasions", "Bites"],
              commonProblems: ["Dryness", "Redness", "Flakiness"],
            },
          ],
        },
        {
          id: "muscles",
          name: "Muscles",
          description:
            "Tail muscles help control movement, posture, and emotional expression.",
          structures: [
            {
              id: "caudal-muscles",
              name: "Caudal Muscles",
              whatIs: "The muscles that move the tail in different directions.",
              function: "They help with balance and body language.",
              commonInjuries: ["Strains", "Tears"],
              commonProblems: ["Limited wagging", "Pain with movement"],
            },
          ],
        },
        {
          id: "bones",
          name: "Bones",
          description:
            "The tail is supported by a series of small bones that help maintain flexibility and balance.",
          structures: [
            {
              id: "caudal-vertebrae",
              name: "Caudal Vertebrae",
              whatIs:
                "The small bones at the end of the spine that form the tail.",
              function:
                "They create the flexible structure and support tail movement.",
              commonInjuries: ["Fractures", "Dislocations"],
              commonProblems: ["Reduced wagging", "Pain", "Tail stiffness"],
            },
          ],
        },
      ],
    },
  ],
};

export const getDogBodyPartById = (bodyPartId) =>
  dogAnatomyData.bodyParts.find((part) => part.id === bodyPartId);
