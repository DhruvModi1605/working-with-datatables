$(document).ready(function(){
	var t = $('#datatable').DataTable(); 
	$("#btn").click(function(){
		var number_of_entries= $('#entries').val();
		$.ajax({
			url:'https://randomuser.me/api/?results='+number_of_entries,
			dataType:'json',
			success: function(data) {
				var obj=data;
				var arr_of_arr=[];
				for(var i=0;i<number_of_entries;i++)
				{
					var arr=[];
					arr.push(obj.results[i].gender);
					arr.push(obj.results[i].location.postcode);
					arr.push(obj.results[i].login.username);
					arr.push(obj.results[i].phone);
					arr.push(obj.results[i].email);
					arr_of_arr.push(arr);
				}	
				t.clear().draw();
				for(var i=0;i<number_of_entries;i++)
				t.row.add(arr_of_arr[i]).draw( false );
			}
		});
	});
});