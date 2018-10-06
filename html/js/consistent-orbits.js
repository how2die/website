const getCssRule = ruleName => {
    const styleSheets = document.styleSheets;
    for (let i=0; i < styleSheets.length; i++) {
        for (let j=0; j < styleSheets[i].cssRules.length; j++) {
            let rule = styleSheets[i].cssRules[j];
            if (rule.name == ruleName && rule.type == CSSRule.KEYFRAMES_RULE) {
                return rule;
            }
        }
    }
}

const consistentOrbit = (orbitName, milliseconds) => {	
    const cssRule = getCssRule(orbitName);
    const startDegrees = ((Date.now()%milliseconds)/milliseconds)*360;
    const endDegrees = 360+startDegrees;

    cssRule.deleteRule("0%");
    cssRule.deleteRule("100%");
    cssRule.appendRule("0% { transform:rotate("+startDegrees+"deg) } ");
    cssRule.appendRule("100% { transform:rotate("+endDegrees+"deg) } ");
}

consistentOrbit("orbitA", 6000);
consistentOrbit("orbitB", 12000);
consistentOrbit("orbitC", 15000);
consistentOrbit("orbitD", 18000);
consistentOrbit("orbitE", 21000);
