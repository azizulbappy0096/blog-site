export function AddClassToAllParagraph( editor ) {
    // Both the data and the editing pipelines are affected by this conversion.
    editor.conversion.for( 'downcast' ).add( dispatcher => {
        // Headings are represented in the model as a "heading1" element.
        // Use the "low" listener priority to apply the changes after the headings feature.
        dispatcher.on( 'insert:paragraph', ( evt, data, conversionApi ) => {
            const viewWriter = conversionApi.writer;

            viewWriter.addClass( 'text-lg md:text-xl mb-8', conversionApi.mapper.toViewElement( data.item ) );
        }, { priority: 'low' } );

    } );
}