const nodemailer = require('nodemailer')
const newman = require('newman');
var request = require('request');
const creds= require('./creds.json');

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/KalturaAndImpelsys VS VootKids [TOTAL COUNT2].postman_collection.json', "utf-8"),  // using this 
    environment: require('./environments/TotalCountTest.postmanenvironment.json', "utf-8"),// using this 
    reporters: ['cli', 'htmlextra'],
    reporter: { htmlextra: { browserTitle: "V-K Total Count Report", title: "Voot Kids Total Count Testing", titleSize: "5", darkTheme: "darkTheme ", export: './reports/totalCountReport.html' } },
    insecure: true, // allow self-signed certs, required in postman too
    timeout: 180000  // set time out
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        let x = {
            "title": "Total Count Tests Report",
            "text": "Hello Team,\n\n"+"Please find Algolia Vs Kaltura & Impelsys Vs Voot-Kids Api's Total Count Tests report",
            "themeColor": "#19D9FD",  
            "mrkdwn": true,         
            "sections":[
                         {
                             "title": `<pre><ul><li><h2>No. Of Iterations = `+`${summary.run.stats.iterations.total}`,
                         },
                         {
                             "title": "<pre><ul><li><h2>No. Of API Requests = " +`${summary.run.stats.requests.total}` ,
                         },
                         {
                             "title": "<pre><ul><li><h2>No. Of Test Cases = " +`${summary.run.stats.assertions.total}` ,
                         },
                         {
                             "title": "<pre><ul><li><h2>No. Of Test Failures = " +`${summary.run.stats.assertions.failed}` ,
                         },
                         {
                             "title": "<pre><ul><li><h2>Test Report details " +`\n`+`${"(1) " + summary.run.executions[1].assertions[0].assertion + `\n` + "(2) " + summary.run.executions[2].assertions[0].assertion +`\n\n` + "(3) " + summary.run.executions[3].assertions[0].assertion + `\n` + "(4) " + summary.run.executions[4].assertions[0].assertion + `\n` + "(5) " + summary.run.executions[5].assertions[0].assertion + `\n` + "(6) " + summary.run.executions[6].assertions[0].assertion + `\n\n` + "(7) " + summary.run.executions[7].assertions[0].assertion + `\n` + "(8) " + summary.run.executions[8].assertions[0].assertion + `\n` + "(9) " + summary.run.executions[9].assertions[0].assertion + `\n` + "(10) " + summary.run.executions[10].assertions[0].assertion + `\n\n` + "(11) " + summary.run.executions[11].assertions[0].assertion + `\n` + "(12) " + summary.run.executions[12].assertions[0].assertion + `\n` + "(13) " + summary.run.executions[13].assertions[0].assertion + `\n` + "(14) " + summary.run.executions[14].assertions[0].assertion + `\n` + "(15) " + summary.run.executions[15].assertions[0].assertion + `\n` + "(16) " + summary.run.executions[16].assertions[0].assertion + `\n\n` + "(17) " + summary.run.executions[18].assertions[0].assertion + `\n` + "(18) " + summary.run.executions[19].assertions[0].assertion + `\n` + "(19) " + summary.run.executions[20].assertions[0].assertion + `\n` + "(20) " + summary.run.executions[21].assertions[0].assertion + `\n` + "(21) " + summary.run.executions[22].assertions[0].assertion + `\n` + "(22) " + summary.run.executions[23].assertions[0].assertion}` ,
                         },
                         {
                             "title": "<pre><ul><li><h2>Test Pass OR Fail Results",
                         }
                       ]
                }


        var pass1A = (summary.run.executions[1].assertions[0].assertion);
        console.log("TEST PASS 1", pass1A)
        var pass1B = (summary.run.executions[2].assertions[0].assertion);
        console.log("TEST PASS 2", pass1B)
        var pass2A = (summary.run.executions[3].assertions[0].assertion);
        console.log("TEST PASS 2A", pass2A)
        var pass2B = (summary.run.executions[4].assertions[0].assertion);
        console.log("TEST PASS 2B", pass2B)
        var pass2C = (summary.run.executions[5].assertions[0].assertion);
        console.log("TEST PASS 3", pass2C)
        var pass2D = (summary.run.executions[6].assertions[0].assertion);
        console.log("TEST PASS 3A", pass2D)
        var pass3A = (summary.run.executions[7].assertions[0].assertion);
        console.log("TEST PASS 3B", pass3A)
        var pass3B = (summary.run.executions[8].assertions[0].assertion);
        console.log("TEST PASS 4", pass3B)
        var pass3C = (summary.run.executions[9].assertions[0].assertion);
        console.log("TEST PASS 4A", pass3C)
        var pass3D = (summary.run.executions[10].assertions[0].assertion);
        console.log("TEST PASS 4B", pass3D)
        var pass4A = (summary.run.executions[11].assertions[0].assertion);
        console.log("TEST PASS 4C", pass4A)
        var pass4B = (summary.run.executions[12].assertions[0].assertion);
        console.log("TEST PASS 4D", pass4B)
        var pass4C = (summary.run.executions[13].assertions[0].assertion);
        console.log("TEST PASS 5", pass4C)
        var pass4D = (summary.run.executions[14].assertions[0].assertion);
        console.log("TEST PASS 5A", pass4D)
        var pass4E = (summary.run.executions[15].assertions[0].assertion);
        console.log("TEST PASS 5B", pass4E)
        var pass4F = (summary.run.executions[16].assertions[0].assertion);
        console.log("TEST PASS 5C", pass4F)
        var pass5A = (summary.run.executions[18].assertions[0].assertion);
        console.log("TEST PASS 5D", pass5A)
        var pass5B = (summary.run.executions[19].assertions[0].assertion);
        console.log("TEST PASS 5D", pass5B)
        var pass5C = (summary.run.executions[20].assertions[0].assertion);
        console.log("TEST PASS 5D", pass5C)
        var pass5D = (summary.run.executions[21].assertions[0].assertion);
        console.log("TEST PASS 5D", pass5D)
        var pass5E = (summary.run.executions[22].assertions[0].assertion);
        console.log("TEST PASS 5D", pass5E)
        var pass5F = (summary.run.executions[23].assertions[0].assertion);
        console.log("TEST PASS 5D", pass5F)

        x.sections[0].value = summary.run.stats.iterations.total
        x.sections[1].value = summary.run.stats.requests.total
        x.sections[2].value = summary.run.stats.assertions.total
        x.sections[3].value = summary.run.stats.assertions.failed
        x.sections[4].value = "(1) " + pass1A + `\n` + "(2) " + pass1B +`\n\n` + "(3) " + pass2A + `\n` + "(4) " + pass2B + `\n` + "(5) " + pass2C + `\n` + "(6) " + pass2D + `\n\n` + "(7) " + pass3A + `\n` + "(8) " + pass3B + `\n` + "(9) " + pass3C + `\n` + "(10) " + pass3D + `\n\n` + "(11) " + pass4A + `\n` + "(12) " + pass4B + `\n` + "(13) " + pass4C + `\n` + "(14) " + pass4D + `\n` + "(15) " + pass4E + `\n` + "(16) " + pass4F + `\n\n` + "(17) " + pass5A + `\n` + "(18) " + pass5B + `\n` + "(19) " + pass5C + `\n` + "(20) " + pass5D + `\n` + "(21) " + pass5E + `\n` + "(22) " + pass5F; // for Slack

        let errorFlag = x.sections[3].value;
        errorFlag = parseInt(errorFlag);
        let errorColor = 'green';
        if (errorFlag > 0) {
            errorColor = 'red';
        }

    var y = x;
    var summary = summary.run.failures;
    var testFailedGmail = testFailedTeams = '';

        for (i = 0; i < summary.length; i++) {
            var failsList = JSON.stringify(summary[i].error.test);
            console.log("Test Failed => ", summary[i].error.test)
            testFailedGmail += `${i + 1}. ${summary[i].error.test}<br>`;
            testFailedTeams += `${i + 1}. ${summary[i].error.test}`+` (FAIL)\n`;
        }
        y.sections[5].value = testFailedGmail;
        x.sections[5].title += `\n${testFailedTeams}\n`;

        let failTestGmail =  testFailedGmail;
        if (errorFlag > 0) {
            failTestGmail = testFailedGmail 
        } else {
            failTestGmail = "||=========== Total Counts all tests are successfully passed! ============||"
        }
        if (errorFlag > 0) {
            testFailedTeams 
        } else {
            x.sections[5].title = "All tests are successfully passed!"
        }        
        var options = {
            'method': 'POST',
            'url': creds.TeamsUrl_Tests,// Chani test teams webhook
            //'url': creds.TeamsUrl_VK_Tests,// Main url for reporting in teams group 
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(x)
        };

        async function main() {
            let transporter = nodemailer.createTransport({
                host: creds.host,
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: creds.username, // RWS moravia user
                    pass: creds.password // user password
                },
                tls: {
                    ciphers: 'SSLv3'
                }
            });

            let info = await transporter.sendMail({
                from: '"Voot-Kids Automation" cshastry@moravia.com', // sender address
                //to: " cshastry@moravia.com, chaitanyashastry1@gmail.com",
                to: creds.to,                           //"cshastry@moravia.com"
                cc: creds.cc, // list of receivers
                subject: "Total Count Tests", // Subject line
                attachments: [
                    {   // html report as an attachment
                        filename: 'totalCountReport.html',
                        path: './reports/totalCountReport.html',
                        contentType: 'text/html'
                    }],
                html:
                    `<!DOCTYPE html>
                <text>
                  Hello Team,<br>
                  Please find Algolia Vs Kaltura & Impelsys VS Voot-Kids Api's Total Count Tests reports.<br><br>

                </text>

                <html>
                   <head>
                       <title>total count test</title>
                        <!--[if !mso]><!== -->
                        <meta content="IE=edge" http-equiv="X-UA-Compatible">
                        <!--<![endif]-->
                        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
                        <meta content="width=device-width, initial-scale=1.0" name="viewport">
                        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
                        <!--[if mso]>
                        <style type="text/css">
                        body, table, td, font, a, span {font-family: 'AvenirNext-Regular','Arial', sans-serif !important;}
                        </style>
                        <![endif]-->
                   </head>
                   <style type="text/css">
                     body {
                           font-family: 'Roboto', sans-serif;
                           margin: 0;
                           padding: 0;
                           -webkit-text-size-adjust: 100%;
                           -ms-text-size-adjust: 100%;
                           color:black;
                       }
                       img {
                        vertical-align: middle;
                        border: 0;
                        height: auto;
                        line-height: 100%;
                        outline: none;
                        text-decoration: none;
                        -ms-interpolation-mode: bicubic;
                    }
                   </style>
                   <body>
                       <table width="640" border="1" align="center" cellpadding="8" cellspacing="0" bgcolor="#FFFFFF" style="border: 1px solid lightgray;">
                           <tbody>
                               <tr>
                                   <td colspan="2" align="center"><img src="https://www.vootkids.com/assets/images/logo-home-masti-me-achi.png" style="width:210px;"></td>
                               </tr>
                               <tr>
                                   <td colspan="2" style="font-size: 20px;font-weight: bold;text-align: center;">Algolia Vs Kaltura & Impelsys VS Voot-Kids Api's Total Count</td>
                               </tr>
                               <tr>
                                   <td width="320" style="text-align: center;color:green;font-weight: bold;">No. Of Iterations</td>
                                   <td style="text-align: center;color:green;font-weight: bold;">${y.sections[0].value}</td>
                               </tr>
                               <tr>
                                   <td width="320" style="text-align: center;color:green;font-weight: bold;">No. Of API Requests</td>
                                   <td style="text-align: center;color:green;font-weight: bold;">${y.sections[1].value}</td>
                               </tr>
                               <tr>
                                   <td width="320" style="text-align: center;color:green;font-weight: bold;">No. Of Test Cases</td>
                                   <td style="text-align: center;color:green;font-weight: bold;">${y.sections[2].value}</td>
                               </tr>
                               <tr>
                                   <td width="320" style="text-align: center;color:green;font-weight: bold;">No. Of Test Failures</td>
                                   <td style="text-align: center;color:${errorColor};font-weight: bold;">${y.sections[3].value}</td>
                               </tr>
                               <tr>
                                  <td colspan="2" align="center" style="font-size: 20px;font-weight: bold;">Test Report details </td>
                               </tr>
                               <tr>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass1A}</td>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass1B}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass2A}</td>
                                  <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass2B}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsCharacters.json?limit=8&offSet=0">${y.sections[4].value = pass2C}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsCharacters.json?limit=8&offSet=0">${y.sections[4].value = pass2D}</a></td>
                               </tr>
                               <tr>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass3A}</td>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass3B}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsMovies.json?limit=8&offSet=0">${y.sections[4].value = pass3C}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsMovies.json?limit=8&offSet=0">${y.sections[4].value = pass3D}</a></td>
                               </tr>
                               <tr>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass4A}</td>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass4B}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/ks/v1/allKidsAudios.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass4C}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/ks/v1/allKidsAudios.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass4D}</a></td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsAudios.json?limit=8&offSet=0">${y.sections[4].value = pass4E}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsAudios.json?limit=8&offSet=0">${y.sections[4].value = pass4F}</a></td>
                               </tr>
                               <tr>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass5A}</td>
                                 <td style="text-align: center;color: green;font-weight: bold;" >${y.sections[4].value = pass5B}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/ebook/v1/allKidsEbooks.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass5C}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/ebook/v1/allKidsEbooks.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass5D}</a></td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsEbooks.json?limit=8&offSet=0">${y.sections[4].value = pass5E}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsEbooks.json?limit=8&offSet=0">${y.sections[4].value = pass5F}</a></td>   
                               </tr>                                                                                              
                               <tr>
                                   <td colspan="2" align="center" style="font-size: 20px;font-weight: bold;">Test Pass OR Fail Results</td>
                               </tr>
                               <tr>
                                   <td colspan="2" style="color:${errorColor};font-weight: bold;" >${failTestGmail}</td>
                               </tr>
                               <tr>
                                   <td colspan="2" style="color:blue;font-weight: bold;font-style: italic" >NOTE: Do not directly click on attachment, Kindly download and see the report for details</td>
                               </tr>
                           </tbody>
                       </table>
                   </body>
               </html>` // html body end
            });
            console.log("Message sent: %s", info.messageId);
        }
        main().catch(console.error);
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
        console.log('collection run completed.');
    }
});