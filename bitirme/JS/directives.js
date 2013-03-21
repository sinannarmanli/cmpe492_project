angular.module("moledulesDisplayDirective", [])
    .directive('wMolecule', function ()
    {
        return function (scope, element, attrs)
        {
            var positionWrapper = function (ix)
            {
                var pos_x, pos_y;
                pos_x = ((ix % 5) * 80);
                pos_y = (Math.floor(ix / 5) * 80);
                if (scope.view.loadedWords == undefined) {
                    scope.view.loadedWords = 0;
                }
                if (scope.view.loadedWords < 40) {
                    scope.view.loadedWords++;

                    setTimeout(function ()
                    {
                        speed = Math.floor(Math.random() * 100) + 200;
                        $(element).animate({ "margin-left": pos_x.toString() + "px" }, speed, function ()
                        {
                            $(element).animate({ "margin-top": pos_y.toString() + "px" }, speed);
                        });
                    }, 500 * Math.random());
                } else {
                    $(element).animate({ "margin-left": pos_x.toString() + "px" }, 175, function ()
                    {
                        $(element).animate({ "margin-top": pos_y.toString() + "px" }, 175);
                    });
                }


            };
            scope.$watch('letter.visibleIndex', function (ix)
            {
                positionWrapper(ix);
            });             
        };
    });
    