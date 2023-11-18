export const selectArea = (CityName) => {
    if(CityName=='Hyderabad'){
      return ['Falaknuma', 'Shamshergunj', 'Shalibanda','Charminar','Salarjung Museum',
      'MGBS','Sultan Bazar','Narayanguda','Chikadpally','RTC X Road','Musherabad',
      'Gandhi Hospital','Secunderabad West','Parade Grounds'];
    }
    else if(CityName=='Chennai'){
      return ['Station 1','Station 2','Station 3','Station 4','Station 5','Station 6','Station 7','Station 8'];
    }
    else if(CityName=='Delhi'){
      return ['Station A', 'Station B', 'Station C','Station D','Station E','Station F'];
    }
    else{
      return []
    }
}