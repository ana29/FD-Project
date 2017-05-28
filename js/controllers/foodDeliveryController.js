angular.module("foodDelivery",['ngStorage'])
angular.module("foodDelivery").controller("foodDeliveryController", function ($scope, $localStorage){
    $scope.app = "Food Delivery"

    $scope.foods = [
		{
			"id": "49642c9a-1155-46c0-9ef1-a8e4a6a08d41",
			"title": "Buffalo Chicken Salad",
			"price": 7.50,
			"cuisine": "salad"
		},
		{
			"id": "4c2404b8-4ef5-4dce-babd-5b67f57fb39e",
			"title": "Cheese",
			"price": 12.95,
			"cuisine": "pizza"
		},
		{
			"id": "1f4ff66d-cd4d-4ed6-8006-7fb89acf7d51",
			"title": "Teriyaki Chicken",
			"price": 11.95,
			"cuisine": "chinese"
		},
		{
			"id": "1fdd6457-34f4-4026-adc1-7df19e52777a",
			"title": "Pepperoni",
			"price": 13.50,
			"cuisine": "pizza"
		},
		{
			"id": "ca1da03e-679d-4b2f-a018-d153b1bb0c17",
			"title": "Hot Expresso",
			"price": 4.25,
			"cuisine": "beverage"
		},
		{
			"id": "19bf3107-2971-423b-a927-c6cb8f9cfb89",
			"title": "Classic Beef",
			"price": 9.50,
			"cuisine": "burgers"
		},
		{
			"id": "b93bd032-0b82-4676-91a5-05f770feddc0",
			"title": "Caesar",
			"price": 12.95,
			"cuisine": "salad"
		},
		{
			"id": "3a472318-025c-49fb-a8d0-372ba8d5388c",
			"title": "BBQ Chicken",
			"price": 5.50,
			"cuisine": "pizza"
		},
		{
			"id": "5gr72318-025c-efa9-4379-372baa4g38zw",
			"title": "Hawaiian pizza",
			"price": 9.50,
			"cuisine": "pizza"
		},
		{
			"id": "c74d8225-7a5d-4d50-9a7b-09cd6e30c1a9",
			"title": "Canned Soda",
			"price": 4.50,
			"cuisine": "beverage"
		},
		{
			"id": "ee251f63-efa9-4379-a57b-d5120b03f1c7",
			"title": "General Tso Chicken",
			"price": 10.50,
			"cuisine": "chinese"
		},
		{
			"id": "c0a52421-d081-497d-af26-acaffbb2ba50",
			"title": "2 Liter Soda",
			"price": 6.25,
			"cuisine": "beverage"
		},
		{
			"id": "d0111f15-30f1-4e30-885d-361a3698d28f",
			"title": "Bacon Cheese",
			"price": 6.95,
			"cuisine": "burgers"
		},
		{
			"id": "b5500b82-c60a-4c12-9645-7ebca78b5e72",
			"title": "Orange Chicken",
			"price": 10.25,
			"cuisine": "chinese"
		},
		{
			"id": "1e8bc522-10dd-4d4a-9544-b5b58415c810",
			"title": "Roast Pork Chow Mein",
			"price": 7.95,
			"cuisine": "chinese"
		},
		{
			"id": "083112eb-6414-4611-aeee-fc73dbe1db0d",
			"title": "Chai Latte",
			"price": 13.50,
			"cuisine": "beverage"
		},
		{
			"id": "90a4d500-4ba9-4d6a-b45f-5b05c44f1c53",
			"title": "Big Mini",
			"price": 7.95,
			"cuisine": "burgers"
		},
		{
			"id": "a56a19e5-1734-4cf3-ae65-c784e89f881b",
			"title": "Steak & Fries",
			"price": 10.25,
			"cuisine": "burgers"
		},
		{
			"id": "d978f89d-cfc9-43ae-9117-190e54d77542",
			"title": "Turkey Club",
			"price": 8.25,
			"cuisine": "burgers"
		},
		{
			"id": "ae859887-bd68-4670-aba7-69b1c2306aef",
			"title": "Iced Tea",
			"price": 5.25,
			"cuisine": "beverage"
		},
		{
			"id": "9c5909cf-cc27-4966-9a1f-606d6c84e15c",
			"title": "Grilled Chicken Salad",
			"price": 7.50,
			"cuisine": "salad"
		},
		{
			"id": "2e740be7-6412-498e-bd87-fb6893e68778",
			"title": "Seafood Lo Mein",
			"price": 11.25,
			"cuisine": "chinese"
		},
		{
			"id": "f80eeb0e-5d40-407a-96d8-dc2336d268c7",
			"title": "Club Salad",
			"price": 9.25,
			"cuisine": "salad"
		},
		{
			"id": "bba04376-582e-461b-8628-abce95cbdacc",
			"title": "Small Chow Fun",
			"price": 4.50,
			"cuisine": "chinese"
		},
		{
			"id": "09f184a9-11d3-4376-b2e9-0325eb75c8a0",
			"title": "Sweet & Sour Chicken",
			"price": 11.95,
			"cuisine": "chinese"
		}
	];
    // if ($scope.bag == undefined) {
    //     $scope.bag = [];
    //     $scope.total = 0;
    //
    // }else{
    //     $scope.bag = $scope.saved;
    //     $scope.total = $scope.savedTotal;
    // }
    $scope.loadBag = function () {
        $scope.bag = $localStorage.bag;
        $scope.total = $localStorage.total;
    } ;

    $scope.saveBag = function () {
        $localStorage.bag = $scope.bag;
        $localStorage.total = $scope.total;

    } ;

    $scope.clearBag = function(){
        $scope.bag = [];
        $scope.total = 0;
        $scope.saveBag();

    };

    $scope.filterByCuisine = function(cuisine){};

    $scope.removeFromBag = function(item) {
        for (var b in $scope.bag) {
            if ($scope.bag[b] === item) {
                if ($scope.bag[b].amount>1) {
                    var newAmount = $scope.bag[b].amount -1
                    $scope.bag[b].amount = newAmount;
                    $scope.total = ($scope.bag[b].amount * $scope.bag[b].foodObj.price);

                }else{
                    $scope.bag.splice(b,1);
                }

            }
            if ($scope.bag[0] == null) {
                $scope.total = 0;

            }

        }

        $scope.saveBag();
    };

    $scope.addToBag = function(food){
        var flag = true;
        var oldTotal = $scope.total;

        if ($scope.bag == undefined) {
            $scope.bag = [];
            $scope.total = 0;}

        for (var b in $scope.bag) {
            if ($scope.bag[b].foodObj === food) {
                var newAmount = $scope.bag[b].amount +1
                $scope.bag[b].amount = newAmount;
                flag = false;

            }
            $scope.total = (oldTotal+($scope.bag[b].amount * $scope.bag[b].foodObj.price));

        }

        if(flag) {
            var id = (Math.random().toString(16)+"000000000").substr(2,10);
            $scope.bag.push({"id": id, "amount": 1 , "foodObj": food});

        }
        if ($scope.bag[1] == null) {
            $scope.total = ($scope.bag[0].amount * $scope.bag[0].foodObj.price);

        }

        $scope.saveBag();
    };

    $scope.saved = $scope.loadBag();

});
