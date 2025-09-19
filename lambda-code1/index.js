const mysql = require('mysql2/promise');

exports.handler = async (event, context) => {
  let connection;
  try {
    const body = JSON.parse(event.body);

    // Connect to MySQL
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    // Insert student record
    await connection.execute(
      "INSERT INTO students (name, email, mobile) VALUES (?, ?, ?)",
      [body.name, body.email, body.mobile]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Student registered successfully!",
        requestId: context.awsRequestId   // ✅ request ID for CloudWatch
      })
    };

  } catch (err) {
    console.error("DB Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error registering student",
        error: err.message,
        requestId: context.awsRequestId
      })
    };
  } finally {
    if (connection) await connection.end();
  }
};
