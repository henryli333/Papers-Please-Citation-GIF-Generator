const { Citation } = require('@blockzilla101/citation')
const citation = new Citation()
// Optional: width and height can be set in the constructor too
// new Citation(<width>, <height>)

citation.title = 'M.O.A. CITATION';
citation.reason = 'Protocol Violated.\nEntry Permit: Invalid Name';
citation.penalty = 'LAST WARNING - NO PENALTY';
citation.width = 450 
citation.height = 200
citation.resizeReason = true // whether to truncate the reason instead of expanding to fit it

const fps = 30;

citation.render('citation.png')
// for a gif
citation.render('citation.gif', true, fps)