// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./parser","./tokenizer","./types"],function(a,h,k,b){Object.defineProperty(a,"Keywords",{enumerable:!0,get:()=>b.Keywords});a.ParsingError=b.ParsingError;Object.defineProperty(a,"ParsingErrorCodes",{enumerable:!0,get:()=>b.ParsingErrorCodes});Object.defineProperty(a,"Syntax",{enumerable:!0,get:()=>b.Syntax});Object.defineProperty(a,"TokenType",{enumerable:!0,get:()=>b.TokenType});a.assignmentOperators=b.assignmentOperators;a.binaryOperators=b.binaryOperators;a.isArrayExpression=
b.isArrayExpression;a.isAssignmentExpression=b.isAssignmentExpression;a.isBinaryExpression=b.isBinaryExpression;a.isBlockComment=b.isBlockComment;a.isBlockStatement=b.isBlockStatement;a.isBreakStatement=b.isBreakStatement;a.isCallExpression=b.isCallExpression;a.isContinueStatement=b.isContinueStatement;a.isEmptyStatement=b.isEmptyStatement;a.isExpression=b.isExpression;a.isExpressionStatement=b.isExpressionStatement;a.isForInStatement=b.isForInStatement;a.isForStatement=b.isForStatement;a.isFunctionDeclaration=
b.isFunctionDeclaration;a.isIdentifier=b.isIdentifier;a.isIfStatement=b.isIfStatement;a.isLiteral=b.isLiteral;a.isLogicalExpression=b.isLogicalExpression;a.isMemberExpression=b.isMemberExpression;a.isObjectExpression=b.isObjectExpression;a.isProgram=b.isProgram;a.isProperty=b.isProperty;a.isReturnStatement=b.isReturnStatement;a.isStatement=b.isStatement;a.isTemplateElement=b.isTemplateElement;a.isTemplateLiteral=b.isTemplateLiteral;a.isUnaryExpression=b.isUnaryExpression;a.isUpdateExpression=b.isUpdateExpression;
a.isVariableDeclaration=b.isVariableDeclaration;a.isVariableDeclarator=b.isVariableDeclarator;a.logicalOperators=b.logicalOperators;a.operatorPrecedence=b.operatorPrecedence;a.parsingErrorMessages=b.parsingErrorMessages;a.rokenNames=b.rokenNames;a.unaryOperators=b.unaryOperators;a.updateOperators=b.updateOperators;a.parse=function(c,d,f){return(new h.Parser(c,d,f)).parseScript()};a.tokenize=function(c,d,f){c=new k.Tokenizer(c,d);d=[];let g=void 0;try{let e;for(;e=c.getNextToken();)f&&(e=f(e)),d.push(e)}catch(e){c.errorHandler.tolerate(e)}c.errorHandler.tolerant&&
(g=c.errors());return{tokens:d,errors:g}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});