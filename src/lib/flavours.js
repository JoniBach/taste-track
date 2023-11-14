export const coffeeTastingWheel = {
    name: 'Coffee Tasting Wheel',
    children: [
        {
            id: 'tastes',
            name: 'Tastes',
            definition: 'Having a sugary taste.',
            explanation: 'Recognizable by its pleasant, sugary flavor similar to the taste of sugar or candy.',
            children: [
                {
                    id: 'sweet',
                    name: 'Sweet',
                    definition: 'Having a sugary taste.',
                    explanation: 'Characterized by a pleasant, sugary flavor similar to the sweetness of sugar or candy.',
                    children: [
                        {
                            id: 'mellow',
                            name: 'Mellow',
                            definition: 'Having a mild and gentle flavor.',
                            explanation: 'Mellowness is a subtle and soothing taste that is not overpowering.',
                            children: [
                                { id: 'mild', name: 'Mild', definition: 'Having a soft and gentle flavor.', explanation: 'Mildness is a gentle and understated taste that is not overpowering.', children: [] },
                                { id: 'delicate', name: 'Delicate', definition: 'Having a fine and subtle flavor.', explanation: 'Delicateness is a refined and nuanced taste that is subtle and refined.', children: [] },
                            ],
                        },
                        {
                            id: 'acidic',
                            name: 'Acidic',
                            definition: 'Having a tangy or sharp taste.',
                            explanation: 'Acidity is a tangy or sharp sensation on your palate, similar to the acidity in certain fruits.',
                            children: [
                                { id: 'nippy', name: 'Nippy', definition: 'Having a slightly sharp and tangy taste.', explanation: 'Nippiness is a gentle, pleasant sharpness that tickles your taste buds.', children: [] },
                                { id: 'piquant', name: 'Piquant', definition: 'Having a pleasantly sharp and spicy taste.', explanation: 'Piquancy is a delightful combination of sharpness and spiciness that adds depth to the flavor.', children: [] },
                            ],
                        }
                    ]
                },
                {
                    id: 'sour',
                    name: 'Sour',
                    definition: 'Having a tangy or tart taste.',
                    explanation: 'Sourness is a tangy or tart sensation on your palate, similar to the sharpness in certain fruits.',
                    children: [
                        {
                            id: 'winey',
                            name: 'Winey',
                            definition: 'Having a wine-like taste.',
                            explanation: 'Winey notes resemble the flavors found in wine, often with fruity and grape-like qualities.',
                            children: [
                                { id: 'tangy', name: 'Tangy', definition: 'Having a sharp and lively taste.', explanation: 'Tanginess is a sharp and lively sensation on your palate, similar to the zestiness of citrus fruits.', children: [] },
                                { id: 'tart', name: 'Tart', definition: 'Having a pleasantly sharp taste.', explanation: 'Tartness is a pleasantly sharp taste, similar to the refreshing sharpness of certain berries.', children: [] },
                            ],
                        },
                        {
                            id: 'hard',
                            name: 'Hard',
                            definition: 'Having an intense and strong taste.',
                            explanation: 'Hardness refers to a more intense and robust flavor profile, often with bold and pronounced characteristics.',
                        },
                        {
                            id: 'acrid',
                            name: 'Acrid',
                            definition: 'Having a harsh and bitter taste.',
                            explanation: 'Acridity is a harsh and bitter taste that can be intense and unpleasant.',
                        },
                    ]
                },
                {
                    id: 'bitter',
                    name: 'Bitter',
                    definition: 'Having a sharp and sometimes harsh taste.',
                    explanation: 'Bitterness is a sharp and sometimes harsh taste that can range from mild to intense.',
                    children: [
                        {
                            id: 'harsh',
                            name: 'Harsh',
                            definition: 'Having an intense and unpleasant taste.',
                            explanation: 'Harshness refers to an intense and unpleasant taste that can be overpowering.',
                            children: [
                                { id: 'alkaline', name: 'Alkaline', definition: 'Having a basic or alkaline taste.', explanation: 'Alkalinity is a basic or alkaline taste that can be harsh and unappealing.', children: [] },
                                { id: 'caustic', name: 'Caustic', definition: 'Having a corrosive or burning taste.', explanation: 'Causticity is a corrosive or burning taste that is unpleasant.', children: [] },
                            ],
                        },
                        {
                            id: 'pungent',
                            name: 'Pungent',
                            definition: 'Having a strong and sharp taste.',
                            explanation: 'Pungency is a strong and sharp taste that can be both intense and invigorating.',
                            children: [
                                { id: 'phenolic', name: 'Phenolic', definition: 'Having a medicinal or chemical taste.', explanation: 'Phenolic notes resemble medicinal or chemical flavors, which can be strong and distinctive.', children: [] },
                                { id: 'creosol', name: 'Creosol', definition: 'Having a smoky or woody taste.', explanation: 'Creosol flavors are reminiscent of smokiness or woodiness, which can be prominent in the taste.', children: [] },
                            ],
                        },
                    ]
                },
                {
                    id: 'salty',
                    name: 'Salty',
                    definition: 'Having a taste similar to salt.',
                    explanation: 'Saltiness is a taste similar to the subtle, savory flavor of salt itself.',
                    children: [
                        {
                            id: 'bland',
                            name: 'Bland',
                            definition: 'Having a mild and unexciting taste.',
                            explanation: 'Blandness refers to a mild and unexciting taste that lacks strong flavors or excitement.',
                            children: [
                                { id: 'soft', name: 'Soft', definition: 'Having a gentle and smooth taste.', explanation: 'Softness is a gentle and smooth taste that is not sharp or intense.', children: [] },
                                { id: 'neutral', name: 'Neutral', definition: 'Having a balanced and unremarkable taste.', explanation: 'Neutrality is a balanced and unremarkable taste that does not stand out.', children: [] },
                            ],
                        },
                        {
                            id: 'sharp',
                            name: 'Sharp',
                            definition: 'Having a strong and intense taste.',
                            explanation: 'Sharpness is a strong and intense taste that can be bold and pronounced.',
                            children: [
                                { id: 'rough', name: 'Rough', definition: 'Having a coarse or abrasive taste.', explanation: 'Roughness is a coarse or abrasive taste that can be intense and rugged.', children: [] },
                                { id: 'astringent', name: 'Astringent', definition: 'Having a puckering and drying taste.', explanation: 'Astringency is a puckering and drying taste, similar to the sensation of strong tea or red wine.', children: [] },
                            ],
                        },
                    ]
                },
            ]
        },
        {
            id: 'aromas',
            name: 'Aromas',
            children: [
                {
                    id: 'enzymatic',
                    name: 'Enzymatic',
                    definition: 'Related to aromas produced by enzymatic reactions.',
                    explanation: 'Enzymatic aromas in coffee are those created through natural enzymatic processes during coffee bean development. They often include floral, fruity, or herbal scents that add complexity to the coffee aroma.',
                    children: [
                        {
                            id: 'flowery',
                            name: 'Flowery',
                            definition: 'Having an aroma reminiscent of flowers.',
                            explanation: 'Flowery aromas in coffee resemble the pleasant scents of various flowers and can add a floral and fragrant aspect to the sensory experience.',
                            children: [
                                {
                                    id: 'floral',
                                    name: 'Floral',
                                    definition: 'Having a scent resembling various flowers.',
                                    explanation: 'Floral aromas encompass a range of scents resembling different flowers, adding a floral dimension to the aroma.',
                                    children: []
                                },
                                {
                                    id: 'fragrant',
                                    name: 'Fragrant',
                                    definition: 'Having a pleasant and aromatic scent.',
                                    explanation: 'Fragrance in coffee indicates a pleasant and aromatic scent that enhances the overall olfactory experience.',
                                    children: []
                                },
                            ],
                        },
                        {
                            id: 'fruity',
                            name: 'Fruity',
                            definition: 'Having an aroma reminiscent of fruits.',
                            explanation: 'Fruity aromas in coffee resemble the delightful scents of fruits, often contributing citrusy or berry-like notes to the aroma profile.',
                            children: [
                                {
                                    id: 'citrus',
                                    name: 'Citrus',
                                    definition: 'Having an aroma resembling citrus fruits.',
                                    explanation: 'Citrusy aromas in coffee resemble the zesty and refreshing scents of citrus fruits like oranges and lemons.',
                                    children: []
                                },
                                {
                                    id: 'berry-like',
                                    name: 'Berry-like',
                                    definition: 'Having an aroma resembling various berries.',
                                    explanation: 'Berry-like aromas in coffee encompass a range of scents reminiscent of different berries, adding fruity richness to the aroma.',
                                    children: []
                                },
                            ],
                        },
                        {
                            id: 'herbaceous',
                            name: 'Herbaceous',
                            definition: 'Having an aroma reminiscent of herbs and plants.',
                            explanation: 'Herbaceous aromas in coffee resemble the scents of various herbs and plants, often adding complexity and earthiness to the aroma.',
                            children: [
                                {
                                    id: 'alliacious',
                                    name: 'Alliacious',
                                    definition: 'Having an aroma resembling garlic or onion.',
                                    explanation: 'Alliacious aromas in coffee resemble the pungent scents of garlic or onion, contributing a distinct and savory note.',
                                    children: []
                                },
                                {
                                    id: 'leguminous',
                                    name: 'Leguminous',
                                    definition: 'Having an aroma reminiscent of legumes or beans.',
                                    explanation: 'Leguminous aromas in coffee resemble the earthy and nutty scents of legumes or beans, adding depth to the aroma profile.',
                                    children: []
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'sugar_browning',
                    name: 'Sugar Browning',
                    definition: 'Related to aromas resulting from the browning of sugars.',
                    explanation: 'Sugar browning aromas in coffee develop during the roasting process when sugars in the coffee beans undergo browning reactions. These aromas can include caramel, chocolate, and nutty scents, enhancing the sweetness and richness of the coffee aroma.',
                    children: [
                        {
                            id: 'caramel',
                            name: 'Caramel',
                            definition: 'Having an aroma resembling caramelized sugars.',
                            explanation: 'Caramel aromas in coffee resemble the sweet and rich scents of caramelized sugars, adding a sweet and creamy aspect to the aroma profile.',
                            children: [
                                {
                                    id: 'candy-like',
                                    name: 'Candy-like',
                                    definition: 'Having an aroma reminiscent of various candies.',
                                    explanation: 'Candy-like aromas in coffee encompass scents resembling different candies, contributing sweetness and nostalgia to the aroma.',
                                    children: []
                                },
                                {
                                    id: 'syrup-like',
                                    name: 'Syrup-like',
                                    definition: 'Having an aroma resembling syrup.',
                                    explanation: 'Syrup-like aromas in coffee resemble the thick and sweet scents of syrup, enhancing the overall sweetness of the aroma.',
                                    children: []
                                },
                            ],
                        },
                        {
                            id: 'chocolate',
                            name: 'Chocolate',
                            definition: 'Having an aroma resembling chocolate.',
                            explanation: 'Chocolate aromas in coffee resemble the rich and cocoa-like scents of chocolate, often varying from light to dark or even vanilla notes.',
                            children: [
                                {
                                    id: 'light',
                                    name: 'Light',
                                    definition: 'Having an aroma resembling light chocolate.',
                                    explanation: 'Light chocolate aromas in coffee resemble the subtle and creamy scents of milk chocolate.',
                                    children: []
                                },
                                {
                                    id: 'dark',
                                    name: 'Dark',
                                    definition: 'Having an aroma resembling dark chocolate.',
                                    explanation: 'Dark chocolate aromas in coffee resemble the intense and bittersweet scents of dark chocolate.',
                                    children: []
                                },
                                {
                                    id: 'vanilla',
                                    name: 'Vanilla',
                                    definition: 'Having an aroma resembling vanilla.',
                                    explanation: 'Vanilla aromas in coffee resemble the sweet and warm scents of vanilla, often adding a comforting note to the aroma.',
                                    children: []
                                },
                            ],
                        },
                        {
                            id: 'nutty',
                            name: 'Nutty',
                            definition: 'Having an aroma reminiscent of nuts.',
                            explanation: 'Nutty aromas in coffee resemble the pleasant scents of various nuts, adding nut-like or malt-like notes to the aroma profile.',
                            children: [
                                {
                                    id: 'nut-like',
                                    name: 'Nut-like',
                                    definition: 'Having an aroma resembling nuts.',
                                    explanation: 'Nut-like aromas in coffee encompass scents resembling different nuts, contributing a nutty richness to the aroma.',
                                    children: []
                                },
                                {
                                    id: 'malt-like',
                                    name: 'Malt-like',
                                    definition: 'Having an aroma resembling malt.',
                                    explanation: 'Malt-like aromas in coffee resemble the earthy and grainy scents of malt, adding depth and complexity to the aroma profile.',
                                    children: []
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'dry_distillation',
                    name: 'Dry Distillation',
                    definition: 'Related to aromas formed through dry heat processes.',
                    explanation: 'Dry distillation aromas in coffee develop during the roasting process, often resulting in spicy, carbonic (smoky or ashy), or resinous (wood-like) scents. These aromas contribute depth and complexity to the coffee\'s aroma profile.',
                    children: [
                        {
                            id: 'spicy',
                            name: 'Spicy',
                            definition: 'Having an aroma with a pleasant spice-like quality.',
                            explanation: 'Spicy aromas add a pleasant spice-like quality to the aroma profile, often featuring pungent or warming notes.',
                            children: [
                                {
                                    id: 'pungent',
                                    name: 'Pungent',
                                    definition: 'Having an aroma with a sharp and intense quality.',
                                    explanation: 'Pungent aromas in coffee have a sharp and intense quality, often evoking a lively and bold olfactory experience.',
                                    children: []
                                },
                                {
                                    id: 'warming',
                                    name: 'Warming',
                                    definition: 'Having an aroma that imparts a warming sensation.',
                                    explanation: 'Warming aromas in coffee create a comforting sensation of warmth, contributing to the overall sensory experience.',
                                    children: []
                                },
                            ],
                        },
                        {
                            id: 'carbonic',
                            name: 'Carbonic',
                            definition: 'Having an aroma reminiscent of carbon, smoke, or ash.',
                            explanation: 'Carbonic aromas in coffee can encompass smoky or ashy scents, adding complexity and depth to the aroma profile.',
                            children: [
                                {
                                    id: 'ashy',
                                    name: 'Ashy',
                                    definition: 'Having an aroma resembling ashes or burnt materials.',
                                    explanation: 'Ashy aromas in coffee resemble the scent of ashes or burnt materials, often contributing to a unique and intriguing aroma profile.',
                                    children: []
                                },
                                {
                                    id: 'smoky',
                                    name: 'Smoky',
                                    definition: 'Having an aroma resembling smoke.',
                                    explanation: 'Smoky aromas in coffee resemble the scent of smoke, adding a distinct and sometimes earthy note to the aroma.',
                                    children: []
                                },
                            ],
                        },
                        {
                            id: 'resinous',
                            name: 'Resinous',
                            definition: 'Having an aroma resembling resin or wood.',
                            explanation: 'Resinous aromas in coffee can encompass scents reminiscent of resin or wood, contributing to a robust and sometimes medicinal aroma profile.',
                            children: [
                                {
                                    id: 'turpeny',
                                    name: 'Turpeny',
                                    definition: 'Having an aroma resembling turpentine or pine.',
                                    explanation: 'Turpeny aromas in coffee resemble the scent of turpentine or pine, often adding a unique and forest-like quality to the aroma.',
                                    children: []
                                },
                                {
                                    id: 'medicinal',
                                    name: 'Medicinal',
                                    definition: 'Having an aroma reminiscent of medicinal herbs or substances.',
                                    explanation: 'Medicinal aromas in coffee can resemble the scent of medicinal herbs or substances, contributing to a complex and intriguing aroma profile.',
                                    children: []
                                },
                            ],
                        },
                    ],
                },
            ],
        }

    ]
}