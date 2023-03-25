// import propTypes from 'prop-types';
import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className('px-3 py-1.5 border flex items-center', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        '!bg-white': outline,
        '!text-blue-500': outline && primary,
        '!text-gray-900': outline && secondary,
        '!text-green-500': outline && success,
        '!text-yellow-400': outline && warning,
        '!text-red-500': outline && danger,
    },
        rest.className);

    return <button {...rest} className={classes}>{children}</button>
}

// Button.propTypes = {
//     checkVariationValue: ({ primary, secondary, success, warning, danger }) => {

//         // Number(undefined) = NaN
//         // Number(!!undefined) = 0

//         if (Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger) > 1) {
//             // checking ca maxim o valoare e pe true
//             return new Error(`props cu true prea multe pe `)
//         }
//     }
// }

export default Button;