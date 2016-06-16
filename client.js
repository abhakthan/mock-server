var mockServerClient = require('mockserver-client');
var mockClient = mockServerClient.mockServerClient;
/*
mockClient("localhost", 1080).mockAnyResponse(
{
  "httpRequest": {
    "method": "POST",
    "path": "/usidentityfraudservicev2",
    "headers": [],
    "body": {
      "type": "XPATH",
      "value": "//*[local-name()='InitialRequest']"
    }
  },"httpResponse": {
    "statusCode": 403,
    "body": "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><soap:Fault><faultcode xmlns:ns1=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd\">ns1:InvalidSecurity</faultcode><faultstring>An error was discovered processing the &lt;wsse:Security> header</faultstring></soap:Fault></soap:Body></soap:Envelope>",
    "cookies": [],
    "headers": [
      {
        "name": "Content-Type",
        "values": "text/xml"
      }
    ],
    "delay": {
        "timeUnit": "MICROSECONDS",
        "value": 2000
    }
 }, "times" : {"unlimited": true}

});
*/


mockClient("localhost", 1080).mockAnyResponse(
{
  "httpRequest": {
    "method": "POST",
    "path": "/usidentityfraudservicev2",
    "headers": [],
    "body": {
      "type": "XPATH",
      "value": "//*[local-name()='InitialRequest']"
    }
  },"httpResponse": {
    "statusCode": 200,
    "body": "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><InitialResponse xmlns=\"http://eid.equifax.com/soap/schema/usidentityfraudservice/v2\" xmlns:ns2=\"http://eid.equifax.com/soap/schema/identityfraudservice/v2\" transactionKey=\"1136000000810008\" transactionStatus=\"RESUBMIT\"><ProductResponses><IdentityVerificationAndProofing productStatus=\"RESUBMIT\"><IdentityProofing><Quiz quizId=\"1\"><ns2:Question questionId=\"1\"><ns2:QuestionText>Your credit file indicates you may have a mortgage loan, opened in or around May 1992. Who is the credit provider for this account?</ns2:QuestionText><ns2:AnswerChoice answerId=\"1\" correctAnswer=\"false\">MAGNA FUNDING CORPORATION</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"2\" correctAnswer=\"false\">REGIONS MORTGAGE INC</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"3\" correctAnswer=\"false\">STATE FARM BANK</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"4\" correctAnswer=\"false\">UNITED FUNDING MORTGAGE LOAN CORPORATION</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"5\" correctAnswer=\"true\">NONE OF THE ABOVE</ns2:AnswerChoice></ns2:Question><ns2:Question questionId=\"2\"><ns2:QuestionText>What is your total scheduled monthly payment for the above-referenced mortgage?</ns2:QuestionText><ns2:AnswerChoice answerId=\"1\" correctAnswer=\"false\">$25 - $124</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"2\" correctAnswer=\"false\">$125 - $224</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"3\" correctAnswer=\"false\">$225 - $324</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"4\" correctAnswer=\"false\">$325 - $424</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"5\" correctAnswer=\"true\">NONE OF THE ABOVE</ns2:AnswerChoice></ns2:Question><ns2:Question questionId=\"3\"><ns2:QuestionText>Your credit file indicates you may have an auto loan/lease, opened in or around September 2007. Who is the credit provider for this account?</ns2:QuestionText><ns2:AnswerChoice answerId=\"1\" correctAnswer=\"false\">E-LOAN</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"2\" correctAnswer=\"false\">INFINITI FINANCE SERVICES     </ns2:AnswerChoice><ns2:AnswerChoice answerId=\"3\" correctAnswer=\"false\">PARKWAY WEST CHEVROLET</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"4\" correctAnswer=\"true\">THE TORONTO-DOMINION BANK</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"5\" correctAnswer=\"false\">NONE OF THE ABOVE</ns2:AnswerChoice></ns2:Question><ns2:Question questionId=\"4\"><ns2:QuestionText>What is the total monthly payment for the above-referenced account?</ns2:QuestionText><ns2:AnswerChoice answerId=\"1\" correctAnswer=\"false\">$75 - $124</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"2\" correctAnswer=\"false\">$125 - $174</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"3\" correctAnswer=\"false\">$175 - $224</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"4\" correctAnswer=\"true\">$225 - $274</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"5\" correctAnswer=\"false\">NONE OF THE ABOVE</ns2:AnswerChoice></ns2:Question><ns2:Question questionId=\"5\"><ns2:QuestionText>On which of the following streets have you lived?</ns2:QuestionText><ns2:AnswerChoice answerId=\"1\" correctAnswer=\"false\">LARK CT</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"2\" correctAnswer=\"false\">LLOYD DR SE</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"3\" correctAnswer=\"false\">LOVERS LN NE</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"4\" correctAnswer=\"false\">SUE LN</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"5\" correctAnswer=\"true\">NONE OF THE ABOVE</ns2:AnswerChoice></ns2:Question><ns2:Question questionId=\"6\"><ns2:QuestionText>Which of the following is either your current or your previous telephone number?</ns2:QuestionText><ns2:AnswerChoice answerId=\"1\" correctAnswer=\"false\">404-427-9775</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"2\" correctAnswer=\"false\">404-556-3817</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"3\" correctAnswer=\"false\">404-556-7533</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"4\" correctAnswer=\"true\">770-427-2181</ns2:AnswerChoice><ns2:AnswerChoice answerId=\"5\" correctAnswer=\"false\">NONE OF THE ABOVE</ns2:AnswerChoice></ns2:Question></Quiz></IdentityProofing></IdentityVerificationAndProofing></ProductResponses></InitialResponse></soap:Body></soap:Envelope>"
    ,
    "cookies": [],
    "headers": [
      {
        "name": "Content-Type",
        "values": "text/xml"
      }
    ],
    "delay": {
        "timeUnit": "MICROSECONDS",
        "value": 2000
    }
 }, "times" : {"unlimited": true}

});


mockClient("localhost", 1080).mockAnyResponse(
{
  "httpRequest": {
    "method": "POST",
    "path": "/usidentityfraudservicev2",
    "headers": [],
    "body": {
      "type": "XPATH",
      "value": "//*[local-name()='SubsequentRequest']"
    }
  },"httpResponse": {
    "statusCode": 200,
    "body": "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><SubsequentResponse xmlns=\"http://eid.equifax.com/soap/schema/usidentityfraudservice/v2\" xmlns:ns2=\"http://eid.equifax.com/soap/schema/identityfraudservice/v2\" transactionKey=\"1136000000770022\" transactionStatus=\"COMPLETED\"><ProductResponses><IdentityVerificationAndProofing productStatus=\"COMPLETED\"><IdentityVerification><VerificationAssessment><Scores><IdentityScore>886</IdentityScore></Scores><Detail><ns2:Name>MatchAssessment</ns2:Name><ns2:Value>D</ns2:Value></Detail><Detail><ns2:Name>FraudIndicator</ns2:Name><ns2:Value></ns2:Value></Detail></VerificationAssessment></IdentityVerification><IdentityProofing><ProofingAssessment><Scores><InteractiveQueryScore>35</InteractiveQueryScore></Scores></ProofingAssessment></IdentityProofing><OverallScore>6</OverallScore><Reason><Code>18</Code></Reason><Reason><Code>48</Code></Reason><Reason><Code>4F</Code></Reason><Reason><Code>4L</Code></Reason><Reason><Code>4N</Code></Reason><Reason><Code>4S</Code></Reason><Reason><Code>6P</Code></Reason><Reason><Code>A6</Code></Reason><Reason><Code>AY</Code></Reason><Reason><Code>NC</Code></Reason><Reason><Code>P5</Code></Reason><Reason><Code>T2</Code></Reason><Decision>Y</Decision></IdentityVerificationAndProofing></ProductResponses><ReferenceData><Detail><ns2:Name>CustomerID</ns2:Name><ns2:Value>test</ns2:Value></Detail></ReferenceData></SubsequentResponse></soap:Body></soap:Envelope>"
    ,
    "cookies": [],
    "headers": [
      {
        "name": "Content-Type",
        "values": "text/xml"
      }
    ],
    "delay": {
        "timeUnit": "MICROSECONDS",
        "value": 1000
    }
 }, "times" : {"unlimited": true}

});

mockClient("localhost", 1080).mockAnyResponse(
{
  "httpRequest": {
    "method": "POST",
    "path": "/fraudsolutions/xmlgateway/preciseid"
  },
  "httpResponse": {
    "statusCode": 200,
    "body": "<Experian xmlns=\"http://www.experian.com/NetConnectResponse\"> <FraudSolutions> <Response> <Products> <PreciseIDServer> <PIDXMLVersion>06.00</PIDXMLVersion> <SessionID>5A2C817EC7313B91981C13952CB15BB2.pidd2v-1606091112290212415983616</SessionID> <Header> <ReportDate>06092016</ReportDate> <ReportTime>111229</ReportTime> <ProductOption>06</ProductOption> <Subcode>2464720</Subcode> </Header> <Messages> <Message> <Number>57</Number> <Text>0150</Text> <AddrMismatch>Y</AddrMismatch> </Message> </Messages> <Summary> <TransactionID>13605222</TransactionID> <InitialDecision>R10</InitialDecision> <FinalDecision>ACC</FinalDecision> <Scores> <PreciseIDScore>486</PreciseIDScore> <PreciseIDScorecard>AC OPEN V2</PreciseIDScorecard> <ValidationScore>000773</ValidationScore> <ValidationScorecard>AC OPEN VAL V2</ValidationScorecard> <VerificationScore>000749</VerificationScore> <VerificationScorecard>AC OPEN ID THEFT V2</VerificationScorecard> <FPDScore>000179</FPDScore> <FPDScorecard>AC OPEN FPD V2</FPDScorecard> <ComplianceDescription>No Compliance Code</ComplianceDescription> <MostLikelyFraudType code=\"FPD\"/> <Reasons> <Reason code=\"B201\"/> <Reason code=\"B101\"/> <Reason code=\"B399\"/> <Reason code=\"B405\"/> <Reason code=\"B405\"/> </Reasons> </Scores> </Summary> </PreciseIDServer> </Products> </Response> </FraudSolutions> </Experian>",
    "headers": [
      {
        "name": "Content-Type",
        "values": "application/octet"
      }
    ],
    "delay": {
      "timeUnit": "MICROSECONDS",
      "value": 4000
    }
  },
  "times": {
    "unlimited": true
  }

});