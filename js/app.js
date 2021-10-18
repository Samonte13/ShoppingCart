var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Leather Gaming Chair Ergonomic", p_image:"images/7.jpg", p_price: 2499, p_description: "Details: Multifunctional gaming chair where you can sit or lie down for comfortable gaming experience."}, 
					{p_id: "2", p_name: "Wireless Keyboard & Mouse Set", p_image:"images/8.jpg", p_price: 898, p_description: "Details: Suitable for all mobile phone models, all IPAD's,tablets. Multimedia control center,typing is more comfortable"},
					{p_id: "3", p_name: "Snowflake Mini Fan Chargeable", p_image:"images/9.jpg", p_price: 100,p_description: "Details: USB Fan Fresh Summer Desk Mini Fan, Portable fan powered by Premium 18650 battery rechargeble(safe & efficient)"},
					{p_id: "4", p_name: "Table Home Office Desk Computer", p_image:"images/10.jpg", p_price:2000,p_description: "Details: High-quality materils, Quality assurance, Comprehensive testing, safe and reliable long term use."},
					{p_id: "5", p_name: "Pink Gaming Headphone LED", p_image:"images/11.jpg", p_price: 600,p_description: "Details: Sound is real, Enemy position are more accurate and comfortable to wear, HIFI sound effect."},
					{p_id: "6", p_name: "Laptop Stand Aluminum", p_image:"images/12.jpg", p_price: 300,p_description: "Details: Adjustable angles, Compatible with all brand laptop, Foldable and Portable design."},
					{p_id: "7", p_name: "Extended Gaming Mouse Pad",p_image:"images/13.jpg", p_price: 200,p_description: "Details: Washable, Suitable For Gaming, Smooth area for Shooting and Moving,Durable & High Quality Mousepad"},
					 {p_id: "8", p_name: "VINE Studio USB Computer Laptop", p_image:"images/14.jpg", p_price: 400,p_description: "Details: USB cable, it easy to compatible with both for Windows operating system."},
				    {p_id: "9", p_name: "Vention USB HUB Multiple USB Splitter", p_image:"images/15.jpg", p_price: 349,p_description: "Details: 4 Ports Hight Speed USB 3.0 HUB OTG Printer for Laptop PC"},
				    {p_id: "10",p_name: "WiFi to Powerbank Cable DC 5V to 12V ", p_image:"images/16.jpg", p_price: 100,p_description: "Details: USB Cable Boost Converter Step-up Cord Connector for Wifi Router Modem"},
					];
			
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price });
					}	
				}
						
					 
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				

				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});