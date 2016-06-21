/**
 * Chain functions together.  Return value of one function passed to the other.
 * If return value is array matching function arity, array will be applied.
 * @param {...function} fns
 * @returns {function}
 */
function chain(...fns) {
    /**
     * Function has argspec of first chain arg and returnspec of last chain arg.
     */
    return function() {
        var fn,
            functions = fns.slice(),
            args = Array.prototype.slice.call(arguments),
            result;
        
        while (fn = functions.shift()) {
            result = fn.apply(this, args);
            
            if (fn.length) {
                args = result;
                if (!(args instanceof Array) || args.length !== fn[0].length) {
                    args = [args];
                }
            }
        }
        
        return result;
    };
}

module.exports = chain;
