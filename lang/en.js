module.exports = {

    rMeridiem: /^(\d{1,2})(:(\d{1,2}))?([:.](\d{1,2}))?\s*([ap]m)/,
        rHourMinute: /^(\d{1,2})(:(\d{1,2}))([:.](\d{1,2}))?/,
    rDays: /\b(sun(day)?|mon(day)?|tues(day)?|wed(nesday)?|thur(sday|s)?|fri(day)?|sat(urday)?)s?\b/,
    rPast: {
    last: /^last\b/,
        yesterday: /^yes(terday)?\b/,
        ago: /^ago\b/,
        all: /\b(last|yesterday|ago)\b/
},
    rFuture:{
        tomorrow: /^tom(orrow)?\b/
    },
    rDayMod: {
        morning: /morning\b/,
            next: /^next\b/,
            tonight: /^tonight\b/,
            noon: /^noon\b/,
            afternoon: /^afternoon\b/,
            night: /^night\b/,
            evening: /^evening\b/,
            midnight: /^midnight\b/,
            all: /\b(morning|noon|afternoon|night|evening|midnight)\b/
    },
    rUnit:{
        second: /^s(ec|econd)?s?/,
            minute: /^m(in|inute)?s?/,
            hour: /^h(r|our)s?/,
            week: /^w(k|eek)s?/,
            month: /^mon(th)?(es|s)?\b/,
            year: /^y(r|ear)s?/,
            day: /^d(ay)?s?/
    },
    structure: [ 'space', '_next', 'last', 'ago', 'dayByName', 'yesterday', 'tomorrow', 'noon', 'midnight',
        'night', 'afternoon', 'morning', 'tonight', 'meridiem', 'hourminute', 'week', 'month', 'year', 'second',
        'minute', 'hour', 'day', 'number', 'string', 'other' ]
};