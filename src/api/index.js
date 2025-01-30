const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const client = require('./db'); // Import the client from db.js
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Server running on NeonDB!');
});

app.get('/api', async (req, res) => {
  res.send('API working on NeonDB!');
});
app.get('/api/students', async (req, res) => {
	const studentsData = [
    {
        "department": "Centre for Computer Science and Applications",
        "programmes": [
            {
                "programme": "Bachelor of Computer Application (BCA)",
                "semesters": [
                    {
                        "semester": "2nd Semester",
                        "students": [
                            {
                                "name": "AAYUSHRI HAZARIKA"
                            },
                            {
                                "name": "ABHISHEK BEHERA"
                            },
                            {
                                "name": "Ahmed Faisal Ahmed Al-sabri"
                            },
                            {
                                "name": "Akshita Thapa"
                            },
                            {
                                "name": "Andy Ricardo Deposi"
                            },
                            {
                                "name": "ANIKET TOPNO"
                            },
                            {
                                "name": "Ankita Kumari"
                            },
                            {
                                "name": "Anuj Rai"
                            },
                            {
                                "name": "ANURAG PRIYAM CHUTIA"
                            },
                            {
                                "name": "Arijit Sarkar"
                            },
                            {
                                "name": "ARYA BORAH"
                            },
                            {
                                "name": "ARYAN SHARMA"
                            },
                            {
                                "name": "Asish Sahu"
                            },
                            {
                                "name": "BARBI GOGOI"
                            },
                            {
                                "name": "BIDYOT BIKASH BORUAH"
                            },
                            {
                                "name": "BINIT SONOWAL"
                            },
                            {
                                "name": "Bondita Boruah"
                            },
                            {
                                "name": "Chanuj duarah"
                            },
                            {
                                "name": "Chenkham chowlu"
                            },
                            {
                                "name": "CHINMOY SONOWAL"
                            },
                            {
                                "name": "CHINNAY MILI"
                            },
                            {
                                "name": "Debasish borthakur"
                            },
                            {
                                "name": "DERION SONOWAL"
                            },
                            {
                                "name": "DIGBIJOY SENAPOTI"
                            },
                            {
                                "name": "DRUB NAMASUDRA"
                            },
                            {
                                "name": "Farhana Khanam"
                            },
                            {
                                "name": "GAYATRI SAIKIA"
                            },
                            {
                                "name": "Gouri Saikia"
                            },
                            {
                                "name": "Hari Sah"
                            },
                            {
                                "name": "HARSHIT RAJGURU"
                            },
                            {
                                "name": "Ishandeep Sensua"
                            },
                            {
                                "name": "Ishpita chutia"
                            },
                            {
                                "name": "Jagannath Baba"
                            },
                            {
                                "name": "Jhorna gogoi"
                            },
                            {
                                "name": "Jyotishmoy Barman"
                            },
                            {
                                "name": "LUCETA BORDOLOI"
                            },
                            {
                                "name": "Mehdi Hassan"
                            },
                            {
                                "name": "Miss. Sheshadree Dasgupta"
                            },
                            {
                                "name": "MOHARNAVA GOGOI"
                            },
                            {
                                "name": "Mondeep Gogoi"
                            },
                            {
                                "name": "Mousamraj Phukon"
                            },
                            {
                                "name": "Nabidul Hassan Duha"
                            },
                            {
                                "name": "NIKHIL HAZARIKA"
                            },
                            {
                                "name": "Nilutpal Saikia Borah"
                            },
                            {
                                "name": "Nisanta Sonowal"
                            },
                            {
                                "name": "NISHA SINGH"
                            },
                            {
                                "name": "PADMA PALASH SAUD"
                            },
                            {
                                "name": "POOJA KALITA"
                            },
                            {
                                "name": "Prerona Rajowar"
                            },
                            {
                                "name": "Progyan Boruah"
                            },
                            {
                                "name": "Raman Upadhyaya"
                            },
                            {
                                "name": "RAVI SHARMA"
                            },
                            {
                                "name": "RISHI RAJ SHARMA"
                            },
                            {
                                "name": "Rishiraj Gorh"
                            },
                            {
                                "name": "Rohit Thongam"
                            },
                            {
                                "name": "Sahista Hussain"
                            },
                            {
                                "name": "Sayantani Mazumder"
                            },
                            {
                                "name": "SHUBHAM KUMAR SHAH"
                            },
                            {
                                "name": "SMEETA PAUL"
                            },
                            {
                                "name": "SOYONIKA GOGOI"
                            },
                            {
                                "name": "Susmriti Bora"
                            },
                            {
                                "name": "TINA GOGOI"
                            },
                            {
                                "name": "trishna saikia"
                            },
                            {
                                "name": "UMESH SAHU"
                            }
                        ]
                    },
                    {
                        "semester": "4th Semester",
                        "students": [
                            {
                                "name": "Abhijit Saha"
                            },
                            {
                                "name": "ABHINOV DUTTA"
                            },
                            {
                                "name": "Abinash sut"
                            },
                            {
                                "name": "ADITYA UPADHAYAYA"
                            },
                            {
                                "name": "Akash Dhar"
                            },
                            {
                                "name": "Amar Saikia"
                            },
                            {
                                "name": "Amit Rai"
                            },
                            {
                                "name": "Ankita Buragohain"
                            },
                            {
                                "name": "Ankur hazarika"
                            },
                            {
                                "name": "Ankur Kumar Rajak"
                            },
                            {
                                "name": "Ankurjyoti Gogoi"
                            },
                            {
                                "name": "Anusuya Hazarika"
                            },
                            {
                                "name": "Aryan Saikia"
                            },
                            {
                                "name": "Ayush Sharma"
                            },
                            {
                                "name": "BANAMALI THENGAL"
                            },
                            {
                                "name": "Bhaskar Jyoti Gogoi"
                            },
                            {
                                "name": "BINAYAK UPADHYAY"
                            },
                            {
                                "name": "BISHAL KUMAR GUPTA"
                            },
                            {
                                "name": "Bondeep Senchoa"
                            },
                            {
                                "name": "Brinchi Gogoi"
                            },
                            {
                                "name": "CHANDRA KAMAL GOGOI"
                            },
                            {
                                "name": "DARSHANA KONCH"
                            },
                            {
                                "name": "DEBLINA DAS"
                            },
                            {
                                "name": "Deepjyoti Mazumder"
                            },
                            {
                                "name": "DIBAKAR PHUKON"
                            },
                            {
                                "name": "Dibyajyoti Das"
                            },
                            {
                                "name": "Disha Gupta"
                            },
                            {
                                "name": "Eddla Edwin"
                            },
                            {
                                "name": "Farhaz Rahman"
                            },
                            {
                                "name": "Franshu Lohar"
                            },
                            {
                                "name": "Gangutri gogoi"
                            },
                            {
                                "name": "GARGI PRIYA DEVI"
                            },
                            {
                                "name": "Gaurav dehingia"
                            },
                            {
                                "name": "Gayatri Gogoi"
                            },
                            {
                                "name": "Guddu hazarika"
                            },
                            {
                                "name": "Harsh Raut"
                            },
                            {
                                "name": "Jeet sonowal"
                            },
                            {
                                "name": "JITUPARNA DIHINGIA"
                            },
                            {
                                "name": "KANGKANA PEGU"
                            },
                            {
                                "name": "Karanraj Karmakar"
                            },
                            {
                                "name": "Khusboo Siddique"
                            },
                            {
                                "name": "Khushi Ghosh"
                            },
                            {
                                "name": "Kongkon bora"
                            },
                            {
                                "name": "MALOBIKA GOGOI"
                            },
                            {
                                "name": "Manas Pratim Puzari"
                            },
                            {
                                "name": "MANASH GOGOI"
                            },
                            {
                                "name": "Manash Pratim Gogoi"
                            },
                            {
                                "name": "Md Sahid Ahmed"
                            },
                            {
                                "name": "MD SAHID ALI"
                            },
                            {
                                "name": "MINHAJ IYAN"
                            },
                            {
                                "name": "Mohit Newar"
                            },
                            {
                                "name": "MOUSOM BURAGOHAIN"
                            },
                            {
                                "name": "Mrigankar Gohain"
                            },
                            {
                                "name": "Munmi Borah"
                            },
                            {
                                "name": "Muskan Kumari Shah"
                            },
                            {
                                "name": "NANDINI KARMAKAR"
                            },
                            {
                                "name": "Pakbom Doke Lendo"
                            },
                            {
                                "name": "Parash Rai"
                            },
                            {
                                "name": "Parsi majumdar"
                            },
                            {
                                "name": "PAWAN SHARMA"
                            },
                            {
                                "name": "PILOT MACHIYA DEORI"
                            },
                            {
                                "name": "Pratyush Priyam Borah"
                            },
                            {
                                "name": "PRINCE SONOWAL"
                            },
                            {
                                "name": "PRITOM CHETIA"
                            },
                            {
                                "name": "Priya Gupta"
                            },
                            {
                                "name": "Priyam Gogoi"
                            },
                            {
                                "name": "PRIYANUJ KALITA"
                            },
                            {
                                "name": "Priyom Kashyop"
                            },
                            {
                                "name": "Puja Thakuria"
                            },
                            {
                                "name": "RAHUL BHATTARAI CHETRY"
                            },
                            {
                                "name": "Rahul Chetia"
                            },
                            {
                                "name": "Rahul Nath"
                            },
                            {
                                "name": "Rishav Ritom Dutta"
                            },
                            {
                                "name": "Rohit yadav"
                            },
                            {
                                "name": "Roshan Mishra"
                            },
                            {
                                "name": "Samarjit Patar"
                            },
                            {
                                "name": "samudra deka"
                            },
                            {
                                "name": "SANCHITA GOGOI"
                            },
                            {
                                "name": "Sanjana Chetri"
                            },
                            {
                                "name": "Sanskriti goswami"
                            },
                            {
                                "name": "Sasanka Talukdar"
                            },
                            {
                                "name": "SAURAV SINGH YADAV"
                            },
                            {
                                "name": "Shanu Das"
                            },
                            {
                                "name": "Subrata Borthakur"
                            },
                            {
                                "name": "Suhail Ansari"
                            },
                            {
                                "name": "SUJATA SAHU"
                            },
                            {
                                "name": "sunayana saikia"
                            },
                            {
                                "name": "Tanish Dey"
                            },
                            {
                                "name": "Tejas Kumar Thakur"
                            },
                            {
                                "name": "Tejaswini Phukan"
                            },
                            {
                                "name": "Trisha Biswas"
                            },
                            {
                                "name": "URMILA TASA"
                            },
                            {
                                "name": "Utkarsh Singh"
                            }
                        ]
                    },
                    {
                        "semester": "6th Semester",
                        "students": [
                            {
                                "name": "ABHISHEK SARMAH"
                            },
                            {
                                "name": "Aditya Karmakar"
                            },
                            {
                                "name": "Arghajit Saha"
                            },
                            {
                                "name": "Asif Ansari"
                            },
                            {
                                "name": "Atanu Bhattacharjee"
                            },
                            {
                                "name": "BASTAB BORAH"
                            },
                            {
                                "name": "BEDANTA BORAH"
                            },
                            {
                                "name": "Bibek Biswas"
                            },
                            {
                                "name": "Chinmoy Gogoi"
                            },
                            {
                                "name": "DISHANTA DEKA"
                            },
                            {
                                "name": "Gaurav Debnath"
                            },
                            {
                                "name": "Gitarthi Chetia"
                            },
                            {
                                "name": "GOURAV SHARMA"
                            },
                            {
                                "name": "HIRUJ BORUAH"
                            },
                            {
                                "name": "HOMSON RANGPHAR"
                            },
                            {
                                "name": "Jiban Jyoti Das"
                            },
                            {
                                "name": "Jyotishman Phukan"
                            },
                            {
                                "name": "KABIR DEHINGIA"
                            },
                            {
                                "name": "KALYAN KUMAR GUPTA"
                            },
                            {
                                "name": "KARTIK SARKAR"
                            },
                            {
                                "name": "KOUSTAVMONI SAIKIA"
                            },
                            {
                                "name": "LAKHYA JYOTI DAS"
                            },
                            {
                                "name": "Mahil Sonowal"
                            },
                            {
                                "name": "Md Sahebullah"
                            },
                            {
                                "name": "Mohid Ali"
                            },
                            {
                                "name": "Mrinabh Baruah"
                            },
                            {
                                "name": "Mrinmoy Hatiboruah"
                            },
                            {
                                "name": "Muktadir Amin Ullah"
                            },
                            {
                                "name": "NAYANMONI DEHINGIA"
                            },
                            {
                                "name": "Nikhil shah"
                            },
                            {
                                "name": "NIRAJNIL DUTTA"
                            },
                            {
                                "name": "Nishtha Rani Borphookan"
                            },
                            {
                                "name": "NIWAS BARUAH"
                            },
                            {
                                "name": "Pankaj Singh ghatwal"
                            },
                            {
                                "name": "Praduniya Pran Konwar"
                            },
                            {
                                "name": "Pragati Kalia"
                            },
                            {
                                "name": "Pragyan Chetia"
                            },
                            {
                                "name": "PRIYAM JYOTI BARUAH"
                            },
                            {
                                "name": "Probal Jyoti Hazarika"
                            },
                            {
                                "name": "Ranjit Das"
                            },
                            {
                                "name": "Shaloni Kalwar"
                            },
                            {
                                "name": "SHAN NARZARY"
                            },
                            {
                                "name": "Spondon gogoi"
                            },
                            {
                                "name": "Sushmita Konwar"
                            },
                            {
                                "name": "Swastika Jaiswal"
                            }
                        ]
                    }
                ]
            },
            {
                "programme": "Master of Computer Application (MCA)",
                "semesters": [
                    {
                        "semester": "2nd Semester",
                        "students": [
                            {
                                "name": "Abhilash Mahanta"
                            },
                            {
                                "name": "Abhinab Dowerah"
                            },
                            {
                                "name": "ADITYA GOGOI"
                            },
                            {
                                "name": "Akash Phukan"
                            },
                            {
                                "name": "Anubhav Bora"
                            },
                            {
                                "name": "Ashish Phukan"
                            },
                            {
                                "name": "Ayan Anjal Borah"
                            },
                            {
                                "name": "Barnam Bora"
                            },
                            {
                                "name": "Bhagayashree Gogoi"
                            },
                            {
                                "name": "Bhargab Rudra Kalita"
                            },
                            {
                                "name": "Bhushita Mahanta"
                            },
                            {
                                "name": "Bishal Borah"
                            },
                            {
                                "name": "BISHAL PAUL"
                            },
                            {
                                "name": "Biswajit Borgohain"
                            },
                            {
                                "name": "DHANSHRI CHETIA"
                            },
                            {
                                "name": "GILBERT KIPTALAM KIPKECH"
                            },
                            {
                                "name": "Himon Gogoi"
                            },
                            {
                                "name": "JYOTIRMOY BHUYAN"
                            },
                            {
                                "name": "Kalyan Borgohain"
                            },
                            {
                                "name": "MD YASIN MUSFIC HUSSAIN"
                            },
                            {
                                "name": "Mithuraj Boruah"
                            },
                            {
                                "name": "Pratiksha Baruah"
                            },
                            {
                                "name": "PRINCE KUMAR GUPTA"
                            },
                            {
                                "name": "Pritish Sarkar"
                            },
                            {
                                "name": "Prodyumna Borgohain"
                            },
                            {
                                "name": "RITURAJ BORAH"
                            },
                            {
                                "name": "Rohit Prasad Sharma"
                            },
                            {
                                "name": "SABA RAUSHAN HUSSAIN"
                            },
                            {
                                "name": "Sanjana Sharma"
                            },
                            {
                                "name": "SHAHIDA AFRIN KHAN"
                            },
                            {
                                "name": "SUSMITA BURAGOHAIN"
                            }
                        ]
                    },
                    {
                        "semester": "4th Semester",
                        "students": [
                            {
                                "name": "ABHISHEK GAUTAM PHUKAN"
                            },
                            {
                                "name": "ADITYA BORGOHAIN"
                            },
                            {
                                "name": "Anup Deka"
                            },
                            {
                                "name": "Ashraful Alam"
                            },
                            {
                                "name": "Bikash Barman"
                            },
                            {
                                "name": "DEBAJIT DUTTA"
                            },
                            {
                                "name": "Debangshu Goswami"
                            },
                            {
                                "name": "DEVAPRATIM DUTTA"
                            },
                            {
                                "name": "Dipankar Gogoi"
                            },
                            {
                                "name": "Gaurav Swargiary"
                            },
                            {
                                "name": "Ihtisham Hazarika"
                            },
                            {
                                "name": "jayanta saikia"
                            },
                            {
                                "name": "MANASH JYOTI BORA"
                            },
                            {
                                "name": "MANASI GOHAIN"
                            },
                            {
                                "name": "Meghna gogoi"
                            },
                            {
                                "name": "Musaddique Ahmad"
                            },
                            {
                                "name": "Namrata Gogoi"
                            },
                            {
                                "name": "Pallab Rajbongshi"
                            },
                            {
                                "name": "PALLAV KALITA"
                            },
                            {
                                "name": "Paranav gogoi"
                            },
                            {
                                "name": "PRADHUMNA GAUDEL"
                            },
                            {
                                "name": "PRAGYAN BARUAH"
                            },
                            {
                                "name": "Prakash Jyoti Rajkonwar"
                            },
                            {
                                "name": "Prantor Bordoloi"
                            },
                            {
                                "name": "PUROBI HANDIQUE"
                            },
                            {
                                "name": "Rahul Thongam"
                            },
                            {
                                "name": "Rajdeep Nandi"
                            },
                            {
                                "name": "Satabdi Saikia"
                            },
                            {
                                "name": "SIDDARTH BARUAH"
                            },
                            {
                                "name": "SOURAV JYOTI DAS"
                            },
                            {
                                "name": "Tanzilur Rahman"
                            },
                            {
                                "name": "Viraj sonowal"
                            }
                        ]
                    }
                ]
            },
            {
                "programme": "Post Graduate Diploma in Computer Application (PGDCA)",
                "semesters": [
                    {
                        "semester": "2nd Semester",
                        "students": [
                            {
                                "name": "Anannya Saikia"
                            },
                            {
                                "name": "BARAKHA BORGOHAIN"
                            },
                            {
                                "name": "Bedabrat Chetia"
                            },
                            {
                                "name": "Bhargab chetia"
                            },
                            {
                                "name": "BIJOY LAKHI DAS"
                            },
                            {
                                "name": "BIKIRAJA KONWAR"
                            },
                            {
                                "name": "CHAYAJYOTI GOGOI"
                            },
                            {
                                "name": "Chintu Gogoi"
                            },
                            {
                                "name": "DINA NATH MILI"
                            },
                            {
                                "name": "Dipanwita Boruah"
                            },
                            {
                                "name": "GAURANGA SONOWAL"
                            },
                            {
                                "name": "HEMANGA RAJ GOGOI"
                            },
                            {
                                "name": "Hemangi Hazarika"
                            },
                            {
                                "name": "HIMANJAL DAS"
                            },
                            {
                                "name": "JAHNABI SONOWAL"
                            },
                            {
                                "name": "Jibon konwar"
                            },
                            {
                                "name": "JITPAL GOGOI"
                            },
                            {
                                "name": "JUBIN DEKARI"
                            },
                            {
                                "name": "KINCHITA BORUAH"
                            },
                            {
                                "name": "kirandeep chetia"
                            },
                            {
                                "name": "MADHUSMITA SONOWAL"
                            },
                            {
                                "name": "MANASH PROTIM DUARAH"
                            },
                            {
                                "name": "Mhachamo Murry"
                            },
                            {
                                "name": "MONDEEP BORUAH"
                            },
                            {
                                "name": "NAMITA RAIDINGIA"
                            },
                            {
                                "name": "NANG TESA PHALUNG"
                            },
                            {
                                "name": "Niharika Konwar"
                            },
                            {
                                "name": "Nirupam Buragohain"
                            },
                            {
                                "name": "Nivedita Ghosh"
                            },
                            {
                                "name": "PAL PHUKAN"
                            },
                            {
                                "name": "PRARTHANA SENCHOWA"
                            },
                            {
                                "name": "PUBALI DUWARAH"
                            },
                            {
                                "name": "SAUNDARJYA KASHYAP"
                            },
                            {
                                "name": "SAURAV HALDER"
                            },
                            {
                                "name": "SHANIA AZMI RAHMAN"
                            },
                            {
                                "name": "Showbhik jyoti borah"
                            },
                            {
                                "name": "Sudip Deb"
                            },
                            {
                                "name": "SUNAYANA NEOG"
                            },
                            {
                                "name": "SUPRIYA SAIKIA"
                            },
                            {
                                "name": "Twinkle Patgiri"
                            },
                            {
                                "name": "Udeshna borah"
                            },
                            {
                                "name": "Yuktashree Hazarika"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
	res.json(studentsData);
});
// GET endpoint to fetch all notifications
app.get('/api/notific', async (req, res) => {
  const query = 'SELECT * FROM notifications;'; // Corrected SQL query
  try {
    const result = await client.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error getting notifications:', err.message);
    res.status(500).json({ message: 'Error getting notifications' });
  }
});

// POST endpoint to insert a new notification
app.post('/api/notific', async (req, res) => {
  const { title, message, link } = req.body;

  // Ensure required fields are provided
  if (!title || !message) {
    return res.status(400).json({ error: 'Title and message are required' });
  }

  // SQL query to insert the notification
  const query = `
    INSERT INTO notifications (title, message, link)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  try {
    // Execute the query using parameters to avoid SQL injection
    const result = await client.query(query, [title, message, link]);

    // Respond with the newly inserted notification
    res.status(201).json({ notification: result.rows[0] });
  } catch (err) {
    console.error('Error inserting notification:', err.message);
    res.status(500).json({ error: 'Failed to insert notification' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
