const nodemailer = require('nodemailer')
const newman = require('newman');
var request = require('request');
const creds= require('./creds.json');
    
// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/KalturaAndImpelsysVSVootKids[TOTALCOUNT].postmancollection.json', "utf-8"),  // using this 
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
            "title": "Voot-Kids Automation",
            "text": "Algolia Vs Kaltura & Impelsys VS Voot-Kids Api's",
            "themeColor": "#36a64f",
            "sections": [
                        {
                            "title": `No. Of Iterations `+`${summary.run.stats.iterations.total}`,
                        },
                        {
                            "title": "No. Of API Requests " + `${summary.run.stats.requests.total}` ,
                        },
                        {
                            "title": "No. Of Test Cases " + `${summary.run.stats.assertions.total}` ,
                        },
                        {
                            "title": "No. Of Test Failures " + `${summary.run.stats.assertions.failed}` ,
                        },
                        {
                            "title": "Test Passed details " + `\n\n`  + `${"(1) " + summary.run.executions[1].assertions[0].assertion + `\n\n` + "(2) " + summary.run.executions[2].assertions[0].assertion + `\n` + "(3) " + pass2A + `\n` + "(4) " + pass2B + `\n\n` + "(5) " + pass3 + `\n` + "(6) " + pass3A + `\n` + "(7) " + pass3B + `\n\n` + "(8) " + pass4 + `\n` + "(9) " + pass4A + `\n` + "(10) " + pass4B + `\n` + "(11) " + pass4C + `\n` + "(12) " + pass4D + `\n\n` + "(13) " + pass5 + `\n` + "(14) " + pass5A + `\n` + "(15) " + pass5B + `\n` + "(16) " + pass5C + `\n` + "(17) " + pass5D }` ,
                        },
                        {
                            "title": "Test Pass OR Fail Results " + `${summary.run.stats.assertions.failed}`,
                        }
                    ]
                }

        var pass1 = (summary.run.executions[1].assertions[0].assertion);
        console.log("TEST PASS 1", pass1)
        var pass2 = (summary.run.executions[2].assertions[0].assertion);
        console.log("TEST PASS 2", pass2)
        var pass2A = (summary.run.executions[3].assertions[0].assertion);
        console.log("TEST PASS 2A", pass2A)
        var pass2B = (summary.run.executions[4].assertions[0].assertion);
        console.log("TEST PASS 2B", pass2B)
        var pass3 = (summary.run.executions[5].assertions[0].assertion);
        console.log("TEST PASS 3", pass3)
        var pass3A = (summary.run.executions[6].assertions[0].assertion);
        console.log("TEST PASS 3A", pass3A)
        var pass3B = (summary.run.executions[7].assertions[0].assertion);
        console.log("TEST PASS 3B", pass3B)
        var pass4 = (summary.run.executions[8].assertions[0].assertion);
        console.log("TEST PASS 4", pass4)
        var pass4A = (summary.run.executions[9].assertions[0].assertion);
        console.log("TEST PASS 4A", pass4A)
        var pass4B = (summary.run.executions[10].assertions[0].assertion);
        console.log("TEST PASS 4B", pass4B)
        var pass4C = (summary.run.executions[11].assertions[0].assertion);
        console.log("TEST PASS 4C", pass4C)
        var pass4D = (summary.run.executions[12].assertions[0].assertion);
        console.log("TEST PASS 4D", pass4D)
        var pass5 = (summary.run.executions[14].assertions[0].assertion);
        console.log("TEST PASS 5", pass5)
        var pass5A = (summary.run.executions[15].assertions[0].assertion);
        console.log("TEST PASS 5A", pass5A)
        var pass5B = (summary.run.executions[16].assertions[0].assertion);
        console.log("TEST PASS 5B", pass5B)
        var pass5C = (summary.run.executions[17].assertions[0].assertion);
        console.log("TEST PASS 5C", pass5C)
        var pass5D = (summary.run.executions[18].assertions[0].assertion);
        console.log("TEST PASS 5D", pass5D)

        x.sections[0].value = summary.run.stats.iterations.total
        x.sections[1].value = summary.run.stats.requests.total
        x.sections[2].value = summary.run.stats.assertions.total
        x.sections[3].value = summary.run.stats.assertions.failed
        x.sections[4].value = "(1) " + pass1 + `\n\n` + "(2) " + pass2 + `\n` + "(3) " + pass2A + `\n` + "(4) " + pass2B + `\n\n` + "(5) " + pass3 + `\n` + "(6) " + pass3A + `\n` + "(7) " + pass3B + `\n\n` + "(8) " + pass4 + `\n` + "(9) " + pass4A + `\n` + "(10) " + pass4B + `\n` + "(11) " + pass4C + `\n` + "(12) " + pass4D + `\n\n` + "(13) " + pass5 + `\n` + "(14) " + pass5A + `\n` + "(15) " + pass5B + `\n` + "(16) " + pass5C + `\n` + "(17) " + pass5D ; // for Slack

        let errorFlag = x.sections[3].value;
        errorFlag = parseInt(errorFlag);
        let errorColor = 'green';
        if (errorFlag > 0) {
            errorColor = 'red';
        }

        var y = x;
        var summary = summary.run.failures;

        var testFailedGmail = testFailedSlack = '';
        for (i = 0; i < summary.length; i++) {
            var failsList = JSON.stringify(summary[i].error.test);
            console.log("Test Failed => ", summary[i].error.test)
            testFailedGmail += `${i + 1}. ${summary[i].error.test}<br>`;
            testFailedSlack += `${i + 1}. ${summary[i].error.test}\n \n`;
        }
        y.sections[5].value = testFailedGmail;
        x.sections[5].value = testFailedSlack;

        let failTestGmail =  testFailedGmail;
        if (errorFlag > 0) {
            failTestGmail = testFailedGmail 
        } else {
            failTestGmail = "||=========== Total Counts all tests are successfully passed! ============||"
        }
        if (errorFlag > 0) {
            testFailedSlack 
        } else {
            x.sections[5].value = "All tests are successfully passed! :slightly_smiling_face:"
        }        
        var options = {
            'method': 'POST',
            //'url': 'https://hooks.slack.com/services/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',  // webhook of ChaniAutomation
            //'url': creds.slackUrl_WD,  // webhook of Webdunia #tests
            'url': creds.TeamsUrl_Tests,
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
                to: "chaitanya.shastry@webdunia.net, cshastry@moravia.com, chaitanyashastry1@gmail.com",
                //to: creds.to,                           //"cshastry@moravia.com"//"voot.kids@webdunia.net",  //"chaitanya.shastry@webdunia.net", //  "amit.neema@webdunia.net",
                //cc: creds.cc, // list of receivers
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
                  Please find Kaltura & Impelsys VS Voot-Kids Api's Total Count Tests reports.<br><br>

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
                                   <td colspan="2" style="font-size: 20px;font-weight: bold;text-align: center;">Kaltura & Impelsys VS Voot-Kids Api's Total Count</td>
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
                                  <td colspan="2" align="center" style="font-size: 20px;font-weight: bold;">Test passed details </td>
                               </tr>
                               <tr>
                                  <td colspan="2" align="center" style="color:green;font-weight: bold;" >${y.sections[4].value = pass1}</td>
                               </tr>
                               <tr>
                                  <td colspan="2" align="center" style="color:green;font-weight: bold;" >${y.sections[4].value = pass2}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsCharacters.json?limit=8&offSet=0">${y.sections[4].value = pass2A}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsCharacters.json?limit=8&offSet=0">${y.sections[4].value = pass2B}</a></td>
                               </tr>
                               <tr>
                                  <td colspan="2" align="center" style="color:green;font-weight: bold;" >${y.sections[4].value = pass3}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsMovies.json?limit=8&offSet=0">${y.sections[4].value = pass3A}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsMovies.json?limit=8&offSet=0">${y.sections[4].value = pass3B}</a></td>
                               </tr>
                               <tr>
                                  <td colspan="2" align="center" style="color:green;font-weight: bold;" >${y.sections[4].value = pass4}</td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/ks/v1/allKidsAudios.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass4A}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/ks/v1/allKidsAudios.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass4B}</a></td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsAudios.json?limit=8&offSet=0">${y.sections[4].value = pass4C}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsAudios.json?limit=8&offSet=0">${y.sections[4].value = pass4D}</a></td>
                               </tr>
                               <tr>
                                  <td colspan="2" align="center" style="color:green;font-weight: bold;" >${y.sections[4].value = pass5}</td>
                               </tr>
                               <tr>
                               <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/ebook/v1/allKidsEbooks.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass5A}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/ebook/v1/allKidsEbooks.json?pageSize=8&pageIndex=0">${y.sections[4].value = pass5B}</a></td>
                               </tr>
                               <tr>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://apiuat.vootkids.com/app/curated/v1/kidsEbooks.json?limit=8&offSet=0">${y.sections[4].value = pass5C}</a></td>
                                  <td style="text-align: center;font-weight: bold;"><a href="https://api.vootkids.com/app/curated/v1/kidsEbooks.json?limit=8&offSet=0">${y.sections[4].value = pass5D}</a></td>   
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