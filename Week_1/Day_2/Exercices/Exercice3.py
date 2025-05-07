brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

brand['number_stores']=2

for type in brand['type_of_clothes']:
  print("Zara serves clients such as ", type)
  
brand['country_creation']="Spain"

if 'international_competitors' in brand:
    brand["international_competitors"].append("Desigual")

del brand['creation_date']

print(brand['major_color']['US'])

for key, value in brand.items():
    print(key, ":", value)

for key in brand.keys():
    print(key)
  
more_on_zara={
    'creation_date': 1975,
    'number_stores': 10000, 
    
} 

brand.update(more_on_zara)

print(brand['number_stores'])

# Number_stores has been updated when we merged the 2 dictionaries