const { Citation } = require('@blockzilla101/citation')
const citation = new Citation()
// Optional: width and height can be set in the constructor too
// new Citation(<width>, <height>)

// citation.title = 'M.O.A. CITATION';
// citation.reasion = 'Protocol Violated.\nEntry Permit: Invalid Name';
// citation.penalty = 'WARNING ISSUED - NO PENALTY';
// citation.penalty = 'LAST WARNING - NO PENALTY';
// citation.penalty = 'PENALTY ASSESSED - xxx';
// citation.width = 450 
// citation.height = 200

citation.title = 'ESOTERICITY CITATION';
citation.reason = 'Protocol Violated.\nSkill issue';
citation.penalty = 'WARNING ISSUED - NO SKILL';
citation.width = 300;
citation.height = 300;
citation.resizeReason = true;

const fps = 30;

// Modified from library default implementation.
// Generates a roughly 3s animation at 30fps for making telegram stickers with (with additional upscaling
//  + conversion to .webm done manually for now).
function frameGen(increments = 10) {
    const yOffsets = [];

    const startPause = 10;
    const betweenStopsPause = 5;
    const endPause = 50;

    // Uses magic consts for now as the citation object's internal measurements are private :(
    const startingPoint = 34;
    const stopOne = 172;
    const stopTwo = 266;

    for (let i = 0; i < startPause; i++) {
        yOffsets.push(startingPoint);
    }

    yOffsets.push(startingPoint);

    for (let i = startingPoint + increments; i < stopOne; i += increments) {
        yOffsets.push(i);
    }

    for (let i = 0; i < betweenStopsPause; i++) {
        yOffsets.push(stopOne);
    }

    for (let i = stopOne + increments; i < stopTwo; i += increments) {
        yOffsets.push(i);
    }

    for (let i = 0; i < betweenStopsPause; i++) {
        yOffsets.push(stopTwo);
    }

    for (let i = stopTwo + increments; i < citation.height; i += increments) {
        yOffsets.push(i);
    }

    for (let i = 0; i < endPause; i++) {
        yOffsets.push(citation.height);
    }

    return yOffsets;
}


citation.render('citation.png');
// for a gif
citation.render('citation.gif', true, fps, frameGen());